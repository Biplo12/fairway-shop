"use client";

import Image from "next/image";

import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { cn } from "@/utils";

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
        className="aspect-square w-full bg-white md:rounded-media"
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
                  className={cn("overflow-hidden rounded-[10px] border-2 bg-white transition-colors", active ? "border-charcoal" : "border-transparent hover:border-charcoal/30")}
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
