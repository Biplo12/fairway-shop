import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";
import { cn } from "@/utils";
import { gradients, blocks, heights, headings } from "../constants";
import type { Align, Size } from "../types";

export function PromoBanner({
  image,
  alt,
  label,
  heading,
  body,
  href,
  cta,
  align = "middle",
  size = "tall",
  focus = "object-center",
}: {
  image: string;
  alt: string;
  label: string;
  heading: string;
  body: string;
  href: string;
  cta: string;
  align?: Align;
  size?: Size;
  focus?: string;
}) {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-card bg-charcoal">
        <div className="absolute inset-0">
          <Media
            src={image}
            alt={alt}
            ratio="fill"
            sizes="100vw"
            quality={90}
            imageClassName={focus}
          />
        </div>
        <div aria-hidden className={cn("absolute inset-0", gradients[align])} />
        <div aria-hidden className="absolute inset-0 bg-charcoal/35 md:hidden" />

        <div
          className={cn("relative flex p-6 md:p-12", heights[size], blocks[align])}
        >
          <div className="max-w-[38rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.875rem] uppercase leading-none tracking-[0.02em] text-white">
              {label}
            </span>
            <h2
              className={cn("mt-5 font-normal leading-[1.05] tracking-[-0.025em] text-white", headings[size])}
            >
              {heading}
            </h2>
            <p className="mt-4 max-w-[34rem] text-[1.0625rem] leading-[1.5] text-white/80">
              {body}
            </p>
            <Link
              href={href}
              className="group mt-6 inline-flex items-center gap-3 text-[1rem] uppercase tracking-[0.04em] text-white"
            >
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              <span className="underline underline-offset-4">{cta}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
