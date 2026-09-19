import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Renders a brand logo from `public/brands/<slug>.svg` when the file is there,
 * and falls back to the brand name set as a wordmark when it is not. Logos are
 * third party trademarks, so they are dropped in rather than drawn here.
 */
export function BrandLogo({
  slug,
  name,
  className = "",
  imageClassName = "",
}: {
  slug: string;
  name: string;
  className?: string;
  /** applied only to a real logo file, never to the text fallback */
  imageClassName?: string;
}) {
  const file = `/brands/${slug}.svg`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", file));

  if (!exists) {
    return (
      <span
        className={`text-[1.0625rem] uppercase tracking-[0.12em] ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <Image
      src={file}
      alt={name}
      width={160}
      height={40}
      className={`h-7 w-auto object-contain ${className} ${imageClassName}`}
    />
  );
}
