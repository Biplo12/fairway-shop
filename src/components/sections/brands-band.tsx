import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { brands } from "@/content/brands";

/**
 * The rack, listed. For a multi-brand shop this is the strongest trust signal
 * on the page. Logos render from public/brands when they are present, names
 * carry it until then.
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

        <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <li key={brand.slug}>
              <Link
                href={`/brands/${brand.slug}`}
                className="group flex flex-col items-center gap-2 text-center opacity-80 transition-opacity hover:opacity-100"
                title={brand.note}
              >
                <BrandLogo
                  slug={brand.slug}
                  name={brand.name}
                  imageClassName="brightness-0 invert"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
