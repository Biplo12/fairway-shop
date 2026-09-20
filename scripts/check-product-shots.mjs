/**
 * Not every studio ships a clean packshot. Some shoot on a blue gradient, some
 * composite an award badge or a stroke type banner into the frame, and a few
 * are lifestyle photographs with a product somewhere in them. All three read
 * as a mistake next to three hundred tiles cut the same way.
 *
 * Two tests, both read off the finished tile:
 *
 *   ring  a square of pixels just inside the product's own box. On a packshot
 *         that ring is mostly studio white. On a coloured backdrop it is the
 *         backdrop.
 *   edge  saturated colour out at the corners, where a product almost never
 *         reaches but a gold award badge or a blue banner does.
 *
 *   node scripts/check-product-shots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = "public/images/products";
const SIZE = 200;
const INSET = 0.11;

export const RING_FLOOR = 0.72;
export const EDGE_CEILING = 0.012;

export async function inspect(file) {
  const { data, info } = await sharp(file)
    .resize(SIZE, SIZE, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const px = (x, y) => (y * info.width + x) * info.channels;

  const at = Math.round(SIZE * INSET);
  const far = SIZE - 1 - at;
  const ringPoints = [];
  for (let i = at; i <= far; i++) {
    ringPoints.push([i, at], [i, far], [at, i], [far, i]);
  }
  let white = 0;
  for (const [x, y] of ringPoints) {
    const o = px(x, y);
    if (Math.min(data[o], data[o + 1], data[o + 2]) > 238) white++;
  }

  // the four corner quarters, outside the square the product is fitted into
  const corner = Math.round(SIZE * 0.22);
  let saturated = 0;
  let counted = 0;
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const inCorner =
        (x < corner || x >= SIZE - corner) && (y < corner || y >= SIZE - corner);
      if (!inCorner) continue;
      counted++;
      const o = px(x, y);
      const max = Math.max(data[o], data[o + 1], data[o + 2]);
      const min = Math.min(data[o], data[o + 1], data[o + 2]);
      if (max > 70 && max - min > 55) saturated++;
    }
  }

  return { ring: white / ringPoints.length, edge: saturated / counted };
}

export function usable(result) {
  return result.ring >= RING_FLOOR && result.edge <= EDGE_CEILING;
}

if (import.meta.filename === process.argv[1]) {
  const rows = [];
  for (const f of fs.readdirSync(OUT)) {
    rows.push({ f, ...(await inspect(path.join(OUT, f))) });
  }
  const bad = rows.filter((r) => !usable(r));
  bad.sort((a, b) => a.ring - b.ring || b.edge - a.edge);
  console.log(`${bad.length} of ${rows.length} tiles are not clean packshots`);
  for (const r of bad) {
    console.log(`${r.ring.toFixed(2)}\t${r.edge.toFixed(3)}\t${r.f}`);
  }
}
