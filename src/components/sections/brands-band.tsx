import Link from "next/link";

import { brands } from "@/content/brands";

/**
 * The rack, listed. For a multi-brand shop this is the strongest trust signal
 * on the page, so it gets a quiet band of its own rather than a logo soup.
 */
export function BrandsBand() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-charcoal px-6 py-10 text-offwhite md:px-12 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
            Twelve brands, chosen and stocked
          </p>
          <Link
            href="/brands"
            className="text-[0.875rem] uppercase tracking-[0.04em] text-offwhite/80 underline underline-offset-4 hover:text-offwhite"
          >
            All brands
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <li key={brand.slug}>
              <Link href={`/brands/${brand.slug}`} className="group block">
                <p className="text-[1.0625rem] leading-none transition-colors group-hover:text-offwhite/70">
                  {brand.name}
                </p>
                <p className="mt-1.5 text-[0.75rem] text-offwhite/45">
                  {brand.note}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
