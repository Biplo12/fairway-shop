import Link from "next/link";
import { Search } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { PageNav } from "@/components/layout/page-nav";
import { ProductCard } from "@/components/product-card";
import { searchProducts, shopCategories } from "@/content/products";

export function SearchPage({ query }: { query?: string }) {
  const term = (query ?? "").trim();
  const results = term ? searchProducts(term) : [];

  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="shop" />

          <div className="px-6 py-10 md:px-10 md:py-14">
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              Search the rack
            </p>
            <h1 className="mt-3 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              What are you after?
            </h1>

            <form action="/search" className="mt-7 max-w-[34rem]">
              <label htmlFor="q" className="sr-only">
                Search products
              </label>
              <div className="flex gap-3">
                <input
                  id="q"
                  name="q"
                  type="search"
                  defaultValue={term}
                  autoComplete="off"
                  placeholder="Brand, model or type. Try wedge, or Chrome Tour."
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

            {term ? (
              <p className="mt-8 text-[1.375rem] leading-none">
                {results.length} {results.length === 1 ? "result" : "results"}
                <span className="text-charcoal/65"> for {term}</span>
              </p>
            ) : (
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
            )}

            {term && results.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {results.slice(0, 48).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : null}

            {term && !results.length ? (
              <div className="py-12">
                <p className="max-w-[34rem] text-[1rem] leading-[1.6] text-charcoal/70">
                  Nothing on the rack matches that. We stock fewer lines than
                  most, on purpose. Tell us what you are after and we will say
                  whether it is worth ordering in.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                  >
                    See everything
                  </Link>
                  <Link
                    href="/fitting"
                    className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
                  >
                    Book a fitting
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
