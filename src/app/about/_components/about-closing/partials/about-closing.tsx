import Link from "next/link";

import { Media } from "@/components/ui/media";

export function AboutClosing() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="grid overflow-hidden rounded-card md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-end bg-paper p-6 md:p-12 lg:p-14">
          <p className="text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em]">
            Play the long game.
          </p>
          <p className="mt-4 max-w-[28rem] text-[1rem] leading-[1.6] text-charcoal/75">
            Fitted once beats bought twice, and a set that suits you is still
            the right set in ten years. That is the whole argument and we have
            not needed another one since 1987.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fitting#book"
              className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
            >
              Book a fitting
            </Link>
            <Link
              href="/contact"
              className="rounded-control border border-charcoal/40 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:border-charcoal/80"
            >
              Find the shop
            </Link>
          </div>
        </div>

        <div className="relative order-first min-h-[16rem] md:order-none md:min-h-[26rem]">
          <div className="absolute inset-0">
            <Media
              src="/images/shop-info/about-evening-links.jpg"
              alt="A links fairway in the last of the evening light, a trolley standing alone by a bunker"
              ratio="fill"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
