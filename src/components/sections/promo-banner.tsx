import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";

type Align = "middle" | "bottom";

const gradients: Record<Align, string> = {
  middle: "bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent",
  bottom: "bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent",
};

const blocks: Record<Align, string> = {
  middle: "items-center",
  bottom: "items-end",
};

type Size = "tall" | "short";

/**
 * A phone gets a minimum height and lets the copy set the rest. A wide screen
 * gets the band proportion, with the minimum still underneath it so a long
 * heading can never be cut off by the ratio.
 */
const heights: Record<Size, string> = {
  tall: "min-h-[26rem] md:aspect-[3.2/1] md:min-h-[24rem]",
  short: "min-h-[24rem] md:aspect-[3.6/1] md:min-h-[24rem]",
};

const headings: Record<Size, string> = {
  tall: "text-[clamp(2.25rem,5vw,4.5rem)]",
  short: "text-[clamp(1.875rem,3.2vw,3rem)]",
};

/**
 * Wide product band. One image, one statement, one way in, used for whatever
 * the shop is pushing this week.
 */
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
  /** where the crop holds when the band is shorter than the frame */
  focus?: string;
}) {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-card bg-charcoal">
        {/* Media is position: relative, so the absolute box goes around it
            rather than on it. The copy sets the card height, the photograph
            fills whatever that turns out to be. */}
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
        <div aria-hidden className={`absolute inset-0 ${gradients[align]}`} />
        {/* The band gradients run across or up the frame, which is right on a
            wide card. On a phone the copy crosses all of it, so it gets a flat
            veil underneath as well. */}
        <div aria-hidden className="absolute inset-0 bg-charcoal/35 md:hidden" />

        <div
          className={`relative flex p-6 md:p-12 ${heights[size]} ${blocks[align]}`}
        >
          <div className="max-w-[38rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.875rem] uppercase leading-none tracking-[0.02em] text-white">
              {label}
            </span>
            <h2
              className={`mt-5 font-normal leading-[1.05] tracking-[-0.025em] text-white ${headings[size]}`}
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
