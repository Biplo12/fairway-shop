import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { CSSProperties } from "react";

const ratios = {
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-4/3",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-3/4",
  fill: "h-full w-full",
} as const;

/**
 * Photography wrapper. Resolves the file at render time so a frame that has not
 * been shot yet renders as a labelled placeholder instead of a broken image ,
 * the layout stays readable while the shoot list is still being worked through.
 */
export function Media({
  src,
  alt,
  ratio = "4/3",
  sizes = "100vw",
  className = "",
  style,
  priority = false,
  quality = 90,
}: {
  src: string;
  alt: string;
  ratio?: keyof typeof ratios;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  quality?: number;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <div
      className={`relative overflow-hidden bg-forest ${ratios[ratio]} ${className}`}
      style={style}
    >
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <p className="text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-offwhite/55">
            {src.replace("/images/", "")}
          </p>
        </div>
      )}
    </div>
  );
}
