/**
 * Manufacturer packshots come on white, but at four different framings: one
 * fills its file, another floats in half a frame of empty studio. Dropped
 * straight into a four up grid they read as four different scales.
 *
 * This finds the product in its frame, then sets it in a square white tile at
 * a fixed inset, so the row reads as one shelf. Where the product already ran
 * off an edge of its own frame, a shaft leaving the bottom of an iron shot, it
 * keeps running off that edge rather than stopping in mid air.
 *
 *   node scripts/build-product-shots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE = "assets/product-shots";
const OUT = "public/images/products";

const TILE = 1000;
/** share of the tile the product may fill on its longest edge */
const FILL = 0.84;
/** how far from the source edge still counts as running off it */
const BLEED = 24;
/** how far a pixel must sit from the studio white to count as product */
const INK = 10;

fs.mkdirSync(OUT, { recursive: true });

/** the product's box inside its frame, read off the pixels rather than trusting the file */
async function contentBox(file) {
  const { data, info } = await sharp(file)
    .flatten({ background: "#ffffff" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bg = [data[0], data[1], data[2]];
  let minX = info.width, minY = info.height, maxX = -1, maxY = -1;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      const delta = Math.max(
        Math.abs(data[i] - bg[0]),
        Math.abs(data[i + 1] - bg[1]),
        Math.abs(data[i + 2] - bg[2]),
      );
      if (delta <= INK) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  return { minX, minY, maxX, maxY, frame: info, background: bg };
}

for (const file of fs.readdirSync(SOURCE).sort()) {
  const slug = path.parse(file).name;
  const input = path.join(SOURCE, file);
  const { minX, minY, maxX, maxY, frame, background } = await contentBox(input);

  // Some studios shoot on a light grey rather than paper white. Lift the whole
  // frame until that grey clips to white, which leaves the drop shadow intact
  // and barely touches the product.
  const lift = 255 / Math.max(...background);

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  const scale = Math.min((TILE * FILL) / Math.max(width, height), 1);
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);

  const product = await sharp(input)
    .flatten({ background: "#ffffff" })
    .linear(lift, 0)
    .extract({ left: minX, top: minY, width, height })
    .resize({ width: w, height: h, fit: "fill", kernel: "lanczos3" })
    .sharpen({ sigma: 0.6, m1: 0.3, m2: 1.2 })
    .toBuffer();

  const bleedTop = minY <= BLEED;
  const bleedBottom = maxY >= frame.height - 1 - BLEED;
  const bleedLeft = minX <= BLEED;
  const bleedRight = maxX >= frame.width - 1 - BLEED;

  let top = Math.round((TILE - h) / 2);
  if (bleedTop !== bleedBottom) top = bleedTop ? 0 : TILE - h;

  let left = Math.round((TILE - w) / 2);
  if (bleedLeft !== bleedRight) left = bleedLeft ? 0 : TILE - w;

  await sharp({
    create: { width: TILE, height: TILE, channels: 3, background: "#ffffff" },
  })
    .composite([{ input: product, top, left }])
    .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(OUT, `${slug}.jpg`));

  console.log(
    `${slug.padEnd(26)} ${width}x${height} at ${Math.round(scale * 100)}%` +
      `${lift > 1.01 ? `  lift ${lift.toFixed(3)}` : ""}` +
      `${bleedTop || bleedBottom || bleedLeft || bleedRight ? "  (bleeds)" : ""}`,
  );
}
