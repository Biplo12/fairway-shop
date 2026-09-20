"use client";

import Image from "next/image";

import { Lens } from "@/components/ui/lens";
import { useState } from "react";

/**
 * The packshot and its other views. Client, because switching view is the one
 * thing on this page that has to happen without a reload, and next/image
 * directly because the Media wrapper resolves files with node:fs.
 *
 * Switching is instant. An entrance animation here replays every time a
 * thumbnail is pressed, which reads as a flicker rather than as motion.
 */
export function ProductGallery({
  images,
  alt,
  model,
}: {
  images: string[];
  alt: string;
  model: string;
}) {
  const [shown, setShown] = useState(0);
  const current = images[shown] ?? images[0];

  return (
    <div className="flex flex-col gap-4">
      <Lens
        src={current}
        alt={alt}
        zoom={2.4}
        priority
        sizes="(min-width: 1024px) 45vw, 92vw"
        className="aspect-square w-full rounded-card bg-white"
      />

      {images.length > 1 ? (
        <ul className="flex flex-wrap gap-2">
          {images.map((image, index) => {
            const active = index === shown;
            return (
              <li key={image}>
                <button
                  type="button"
                  onClick={() => setShown(index)}
                  aria-label={`${model}, view ${index + 1} of ${images.length}`}
                  aria-current={active ? "true" : undefined}
                  className={`overflow-hidden rounded-[10px] border-2 bg-white transition-colors ${
                    active ? "border-charcoal" : "border-transparent hover:border-charcoal/30"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    width={160}
                    height={160}
                    sizes="72px"
                    className="size-[4.5rem] object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
