import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { ProductCard } from "@/components/product-card";
import { Arrow } from "@/components/ui/arrow";
import { rackPicks, shopCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "Nothing at this address",
  description:
    "The page is not here. The search box and every shelf in the shop are, so start from one of those.",
};

export default function NotFound() {
  const picks = rackPicks(4);

  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="info" />

          <div className="px-6 py-12 md:px-10 md:py-16">
            <div className="max-w-[38rem]">
              <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                404
              </p>
              <h1 className="mt-3 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                Nothing at this address
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                Either the page has gone or the address has a character out of
                place. Both happen. The rack has not moved, so start from the
                search box or from a shelf.
              </p>
            </div>

            <form action="/search" className="mt-8 max-w-[34rem]">
              <label htmlFor="q" className="sr-only">
                Search products
              </label>
              <div className="flex gap-3">
                <input
                  id="q"
                  name="q"
                  type="search"
                  autoComplete="off"
                  placeholder="Brand, model or type. Try wedge, or Pro V1."
                  className="w-full rounded-control border border-charcoal/25 px-4 py-3.5 text-[1rem] placeholder:text-charcoal/65 focus:border-charcoal"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                >
                  <Search className="size-4" strokeWidth={1.75} />
                  Search
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap gap-2">
              {shopCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop/${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-3.5 py-1.5 text-[0.8125rem] transition-colors hover:border-charcoal/60"
                >
                  {category.name}
                  <span className="text-[0.6875rem] tabular-nums opacity-55">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-14 border-t border-mist pt-8">
              <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
                <h2 className="text-[1.375rem] leading-none tracking-[-0.015em]">
                  On the rack this week
                </h2>
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
                >
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="underline underline-offset-4">
                    Everything
                  </span>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
                {picks.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>

            <p className="mt-12 max-w-[38rem] text-[0.9375rem] leading-[1.65] text-charcoal/65">
              If you followed a link from somewhere and it landed here, ring the
              shop on{" "}
              <a
                href="tel:+441334555187"
                className="underline underline-offset-4 hover:text-charcoal"
              >
                01334 555 187
              </a>{" "}
              and tell us which one. We would rather fix it than have it sit
              there.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
