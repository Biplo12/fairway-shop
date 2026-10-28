"use client";

import type { ImageLoaderProps } from "next/image";
import manifest from "./manifest.json";
import widths from "./widths.json";

const WIDEST = Math.max(...widths.deviceSizes, ...widths.imageSizes);
const dirs: Record<string, number> = manifest.dirs;
const files: Record<string, number> = manifest.files;

/** the widest variant scripts/build-image-variants.mjs wrote for this file */
function cap(src: string) {
  return files[src] ?? dirs[src.slice(0, src.lastIndexOf("/") + 1)] ?? WIDEST;
}

/**
 * Points next/image at the WebP variants written at build time, in place of
 * Vercel's optimiser and its monthly quota. Anything the script does not
 * resize, an SVG, passes through as it is.
 */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!/^\/[^/].*\.(jpe?g|png)$/i.test(src)) return src;
  return `/_img${src.replace(/\.[^.]+$/, "")}-${Math.min(width, cap(src))}.webp`;
}
