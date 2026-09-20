import Link from "next/link";

import { ShelfFilter } from "@/components/shop/shelf-filter";
import { CategoryHero } from "@/components/shop/category-hero";
import { Pagination } from "@/components/shop/pagination";
import { ProductCard } from "@/components/products/product-card";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { PageNav } from "@/components/layout/page-nav";
import { categoryName, products, type Category } from "@/content/products";
import { shelves } from "@/content/shelves";

/**
 * One shelf for every combination of category and brand, all of it server
 * rendered from the catalogue, so /shop and /shop/bags are the same page
 * reading a different pair of filters.
 *
 * Navigation, band and results sit in a single card, the way the rest of the
 * site is built: the page is cards on a grey ground, not a header over a body.
 */


/** one full row at xl, where the grid runs four across */
const PAGE_SIZE = 16;

export function ShopPage({
  category,
  brand,
  type,
  page = 1,
}: {
  category?: Category;
  brand?: string;
  type?: string;
  page?: number;
}) {
  const shelf = products.filter(
    (product) =>
      (!category || product.category === category) &&
      (!brand || product.brand.toLowerCase() === brand.toLowerCase()) &&
      (!type || product.subcategory?.toLowerCase() === type.toLowerCase()),
  );

  const pages = Math.max(1, Math.ceil(shelf.length / PAGE_SIZE));
  const current = Math.min(Math.max(page, 1), pages);
  const shown = shelf.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const path = category ? `/shop/${category}` : "/shop";
  const pageHref = (next: number) => {
    const query = new URLSearchParams();
    if (brand) query.set("brand", brand.toLowerCase());
    if (type) query.set("type", type.toLowerCase());
    if (next > 1) query.set("page", String(next));
    const search = query.toString();
    return search ? `${path}?${search}` : path;
  };

  const band = shelves[category ?? "all"] ?? shelves.all;
  const heading = category ? categoryName(category) : "Equipment store";
  // only when a brand is actually being filtered on, and spelled the way
  // the catalogue spells it rather than the way the URL did
  const brandLabel = brand ? (shelf[0]?.brand ?? brand) : undefined;
  const typeLabel = type ? (shelf[0]?.subcategory ?? type) : undefined;

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

          {/* The results lift over the band, so the photograph runs on behind
              the panel's rounded shoulders instead of stopping at a seam. */}
          <div className="relative -mt-7 rounded-t-[1.75rem] bg-white px-6 py-8 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-10">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <h2 className="text-[1.375rem] leading-none">
                {shelf.length} {shelf.length === 1 ? "result" : "results"}
                {typeLabel ? (
                  <span className="capitalize text-charcoal/45">
                    , {typeLabel}
                  </span>
                ) : null}
                {brandLabel ? (
                  <span className="text-charcoal/45">, {brandLabel}</span>
                ) : null}
              </h2>
              <div className="flex items-center gap-4">
                {brand || type ? (
                  <Link
                    href={category ? `/shop/${category}` : "/shop"}
                    className="text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/60 underline underline-offset-4 hover:text-charcoal"
                  >
                    Clear
                  </Link>
                ) : null}
                <ShelfFilter category={category} brand={brand} type={type} />
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
