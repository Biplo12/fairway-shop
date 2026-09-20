import Link from "next/link";

import { ShelfFilter } from "../../shelf-filter";
import { CategoryHero } from "../../category-hero";
import { Pagination } from "../../pagination";
import { ProductCard } from "@/components/product-card";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { PageNav } from "@/components/layout/page-nav";
import {
  categoryName,
  inPriceBand,
  priceBands,
  products,
  sortProducts,
} from "@/content/products";
import { shelves } from "@/content/shelves";
import { PAGE_SIZE } from "../constants";
import type { ShopPageProps } from "../types";

export function ShopPage({
  category,
  brand,
  type,
  price,
  sort,
  page = 1,
}: ShopPageProps) {
  const shelf = sortProducts(
    products.filter(
      (product) =>
        (!category || product.category === category) &&
        (!brand || product.brand.toLowerCase() === brand.toLowerCase()) &&
        (!type || product.subcategory?.toLowerCase() === type.toLowerCase()) &&
        inPriceBand(product, price),
    ),
    sort,
  );

  const pages = Math.max(1, Math.ceil(shelf.length / PAGE_SIZE));
  const current = Math.min(Math.max(page, 1), pages);
  const shown = shelf.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const path = category ? `/shop/${category}` : "/shop";
  const pageHref = (next: number) => {
    const query = new URLSearchParams();
    if (brand) query.set("brand", brand.toLowerCase());
    if (type) query.set("type", type.toLowerCase());
    if (price) query.set("price", price);
    if (sort && sort !== "featured") query.set("sort", sort);
    if (next > 1) query.set("page", String(next));
    const search = query.toString();
    return search ? `${path}?${search}` : path;
  };

  const band = shelves[category ?? "all"] ?? shelves.all;
  const heading = category ? categoryName(category) : "Equipment store";
  const brandLabel = brand ? (shelf[0]?.brand ?? brand) : undefined;
  const typeLabel = type ? (shelf[0]?.subcategory ?? type) : undefined;
  const priceLabel = price
    ? priceBands.find((band) => band.slug === price)?.name
    : undefined;

  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="shop" />
          <CategoryHero
            category={category}
            image={band.image}
            alt={band.alt}
            heading={heading}
            body={band.body}
            focus={band.focus}
            brand={brand}
          />

          <div className="relative -mt-7 rounded-t-[1.75rem] bg-white px-6 py-8 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-10">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <h2 className="text-[1.375rem] leading-none">
                {shelf.length} {shelf.length === 1 ? "result" : "results"}
                {typeLabel ? (
                  <span className="capitalize text-charcoal/65">
                    , {typeLabel}
                  </span>
                ) : null}
                {brandLabel ? (
                  <span className="text-charcoal/65">, {brandLabel}</span>
                ) : null}
                {priceLabel ? (
                  <span className="text-charcoal/65">, {priceLabel}</span>
                ) : null}
              </h2>
              <div className="flex items-center gap-4">
                {brand || type || price || sort ? (
                  <Link
                    href={category ? `/shop/${category}` : "/shop"}
                    className="text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/65 underline underline-offset-4 hover:text-charcoal"
                  >
                    Clear
                  </Link>
                ) : null}
                <ShelfFilter
                  category={category}
                  brand={brand}
                  type={type}
                  price={price}
                  sort={sort}
                />
              </div>
            </div>

            {shelf.length > 0 ? (
              <>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  {shown.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
                <Pagination page={current} pages={pages} href={pageHref} />
              </>
            ) : (
              <div className="py-16">
                <p className="text-[1.375rem] leading-[1.25]">
                  Nothing on that shelf today.
                </p>
                <p className="mt-4 max-w-[34rem] text-[1rem] leading-[1.6] text-charcoal/70">
                  We stock fewer lines than most, on purpose. Tell us what you
                  are after and we will say whether it is worth ordering in.
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
