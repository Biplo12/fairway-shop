import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";

/**
 * Wide dark band under the hero — the first product statement, and the tonal
 * counterweight to the off-white page around it.
 */
export function BannerIrons() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-card bg-charcoal">
        <Media
          src="/images/editorial/irons-banner.jpg"
          alt="A set of TaylorMade irons standing in a bag on the course"
          ratio="16/9"
          sizes="100vw"
          quality={90}
          className="md:aspect-[2.24/1]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent"
        />

        <div className="absolute inset-0 flex items-center p-6 md:p-12">
          <div className="max-w-[38rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.875rem] uppercase leading-none tracking-[0.02em] text-white">
              New — TaylorMade P790
            </span>
            <h2 className="mt-5 text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
              Irons, fitted properly
            </h2>
            <p className="mt-5 text-[1.1875rem] leading-[1.55] text-white/80">
              P790, i230 and the JPX Tour on the rack. Hit all three before you choose — most players guess wrong between them.
            </p>
            <Link
              href="/shop/clubs/irons"
              className="group mt-8 inline-flex items-center gap-3 text-[1rem] uppercase tracking-[0.04em] text-white"
            >
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              <span className="underline underline-offset-4">Explore irons</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
