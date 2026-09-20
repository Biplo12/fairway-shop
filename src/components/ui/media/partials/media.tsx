import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/utils";
import { ratios } from "../constants";

export function Media({
  src,
  alt,
  ratio = "4/3",
  sizes = "100vw",
  className = "",
  imageClassName = "",
  style,
  priority = false,
  quality = 90,
}: {
  src: string;
  alt: string;
  ratio?: keyof typeof ratios;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  priority?: boolean;
  quality?: number;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <div
      className={cn("relative overflow-hidden bg-forest", ratios[ratio], className)}
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
          className={cn("object-cover", imageClassName)}
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
