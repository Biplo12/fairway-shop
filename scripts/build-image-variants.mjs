/**
 * The free Vercel plan allows 5,000 image transformations a month, and a
 * catalogue of thirteen hundred photographs spends that in a few days. Past
 * it, every /_next/image request answers 402 and no photograph loads.
 *
 * So the resizing happens here instead, once per build: every photograph in
 * public is written as WebP at each width next/image may ask for, into
 * public/_img, and the custom loader in src/utils/image-loader points the
 * srcset at those files. Nothing is ever upscaled: a file narrower than the
 * widest slot stops at its own width, and the manifest tells the loader where
 * each file stops.
 *
 * Encoded variants are kept in .next/cache, which Vercel carries between
 * builds, so only new or changed photographs are encoded again.
 *
 *   node scripts/build-image-variants.mjs
 */
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = "public";
const OUT = "public/_img";
const CACHE = ".next/cache/image-variants";
const MANIFEST = "src/utils/image-loader/manifest.json";
const WIDTHS_FILE = "src/utils/image-loader/widths.json";

/** bump to throw away every cached variant after changing the encoding */
const VERSION = 1;
const WEBP = { quality: 84, alphaQuality: 100, effort: 4, smartSubsample: true };
/** the light unsharp pass the photography rules ask for after a downscale */
const SHARPEN = { sigma: 0.5 };

const { imageSizes, deviceSizes } = JSON.parse(fs.readFileSync(WIDTHS_FILE, "utf8"));
const WIDTHS = [...new Set([...imageSizes, ...deviceSizes])].sort((a, b) => a - b);
const WIDEST = WIDTHS.at(-1);

function sources(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return file === path.normalize(OUT) ? [] : sources(file);
    return /\.(jpe?g|png)$/i.test(entry.name) ? [file] : [];
  });
}

/** the widths one photograph is written at, never past its own */
function targets(width) {
  const cap = Math.min(width, WIDEST);
  return [...WIDTHS.filter((w) => w < cap), cap];
}

async function variants(file) {
  const input = fs.readFileSync(file);
  const key = crypto
    .createHash("sha1")
    .update(JSON.stringify({ VERSION, WEBP, SHARPEN }))
    .update(input)
    .digest("hex");
  const cached = path.join(CACHE, key);

  const { width: rawWidth, height: rawHeight, orientation } = await sharp(input).metadata();
  // orientations 5 to 8 are stored on their side
  const width = orientation >= 5 ? rawHeight : rawWidth;
  const widths = targets(width);

  fs.mkdirSync(cached, { recursive: true });
  let encoded = 0;
  for (const w of widths) {
    const target = path.join(cached, `${w}.webp`);
    if (fs.existsSync(target)) continue;
    let image = sharp(input).rotate();
    if (w < width) image = image.resize({ width: w, kernel: "lanczos3" }).sharpen(SHARPEN);
    await image.webp(WEBP).toFile(target);
    encoded++;
  }

  const rel = path.relative(PUBLIC, file).replace(/\.[^.]+$/, "");
  fs.mkdirSync(path.join(OUT, path.dirname(rel)), { recursive: true });
  for (const w of widths) {
    fs.copyFileSync(path.join(cached, `${w}.webp`), path.join(OUT, `${rel}-${w}.webp`));
  }

  return { src: "/" + path.relative(PUBLIC, file).split(path.sep).join("/"), cap: widths.at(-1), encoded };
}

/**
 * Where each photograph stops, for the ones that stop short of the widest
 * slot. A folder gives the width most of its files stop at, once, and only
 * the files that differ are listed, so twelve hundred 1000px packshots cost
 * one line rather than twelve hundred.
 */
function manifest(results) {
  const byDir = new Map();
  for (const r of results) {
    const dir = r.src.slice(0, r.src.lastIndexOf("/") + 1);
    byDir.set(dir, [...(byDir.get(dir) ?? []), r]);
  }

  const dirs = {};
  const files = {};
  for (const [dir, entries] of byDir) {
    const counts = new Map();
    for (const r of entries) counts.set(r.cap, (counts.get(r.cap) ?? 0) + 1);
    const [common, count] = [...counts].sort((a, b) => b[1] - a[1])[0];
    if (count > 1 && common < WIDEST) dirs[dir] = common;
    for (const r of entries) {
      if (r.cap !== (dirs[dir] ?? WIDEST)) files[r.src] = r.cap;
    }
  }

  return { dirs, files };
}

const started = Date.now();
const queue = sources(PUBLIC);
const results = [];
fs.rmSync(OUT, { recursive: true, force: true });

// one libvips thread per photograph, as many photographs as there are cores
sharp.concurrency(1);
await Promise.all(
  Array.from({ length: os.availableParallelism() }, async () => {
    for (let file = queue.shift(); file; file = queue.shift()) results.push(await variants(file));
  }),
);

results.sort((a, b) => a.src.localeCompare(b.src));
const json = JSON.stringify(manifest(results), null, 2) + "\n";
// left alone when unchanged, so next dev does not reload for nothing
if (!fs.existsSync(MANIFEST) || fs.readFileSync(MANIFEST, "utf8") !== json) {
  fs.writeFileSync(MANIFEST, json);
}

const encoded = results.reduce((sum, r) => sum + r.encoded, 0);
const written = results.reduce((sum, r) => sum + targets(r.cap).length, 0);
console.log(
  `image variants: ${results.length} photographs, ${written} files, ${encoded} encoded, ` +
    `${((Date.now() - started) / 1000).toFixed(1)}s`,
);
