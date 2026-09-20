"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/utils";

export function Lens({
  src,
  alt,
  zoom = 2,
  priority = false,
  sizes,
  className = "",
  map = true,
}: {
  src: string;
  alt: string;
  zoom?: number;
  priority?: boolean;
  sizes: string;
  className?: string;
  map?: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState<{ x: number; y: number } | null>(null);

  function follow(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const box = frame.current?.getBoundingClientRect();
    if (!box) return;
    setAt({
      x: ((event.clientX - box.left) / box.width) * 100,
      y: ((event.clientY - box.top) / box.height) * 100,
    });
  }

  const window = 100 / zoom;
  const clamp = (value: number) =>
    Math.min(Math.max(value - window / 2, 0), 100 - window);

  return (
    <div
      ref={frame}
      onPointerMove={follow}
      onPointerLeave={() => setAt(null)}
      className={cn("relative overflow-hidden", at ? "cursor-zoom-in" : "", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        priority={priority}
        sizes={sizes}
        style={
          at
            ? {
                transformOrigin: `${at.x.toFixed(2)}% ${at.y.toFixed(2)}%`,
                transform: `scale(${zoom})`,
              }
            : undefined
        }
        className="h-full w-full object-cover transition-transform duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
      />

      {map ? (
        <div
          aria-hidden
          className={cn("pointer-events-none absolute bottom-2.5 right-2.5 size-[4.5rem] overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-[0_6px_18px_rgba(23,24,23,0.22)] transition-opacity duration-200", at ? "opacity-100" : "opacity-0")}
        >
          <Image
            src={src}
            alt=""
            width={200}
            height={200}
            sizes="72px"
            className="h-full w-full object-cover"
          />
          <span
            className="absolute rounded-[3px] border-2 border-charcoal/80 bg-charcoal/10"
            style={{
              width: `${window}%`,
              height: `${window}%`,
              left: `${clamp(at?.x ?? 50).toFixed(2)}%`,
              top: `${clamp(at?.y ?? 50).toFixed(2)}%`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
