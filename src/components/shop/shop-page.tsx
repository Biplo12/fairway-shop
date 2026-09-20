import Link from "next/link";

import { BrandFilter } from "@/components/shop/brand-filter";
import { CategoryHero } from "@/components/shop/category-hero";
import { ProductCard } from "@/components/products/product-card";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { PageNav } from "@/components/layout/page-nav";
import { categoryName, products, type Category } from "@/content/products";

/**
 * One shelf for every combination of category and brand, all of it server
 * rendered from the catalogue, so /shop and /shop/bags are the same page
 * reading a different pair of filters.
 *
 * Navigation, band and results sit in a single card, the way the rest of the
 * site is built: the page is cards on a grey ground, not a header over a body.
 */

/**
 * One frame per shelf, none of them reused anywhere else on the site.
 * Files are named for what is in them, so replacing a frame means a new path
 * and no browser can serve the old one from cache.
 */
const bands: Record<
  string,
  { image: string; alt: string; body: string }
> = {
  all: {
    image: "/images/shop/driver-and-iron.jpg",
    alt: "A driver and an iron lying on cut fairway grass",
    body: "Twelve brands, chosen line by line. If it is on the rack it earned the space, and anything marked fit first is worth putting on the monitor before you buy it.",
  },
  clubs: {
    image: "/images/shop/clubs-at-the-bag.jpg",
    alt: "A driver and a set of irons lying on the grass beside a bag",
    body: "Drivers, irons, wedges and putters from the makers worth carrying. Hit two before you choose one. Most players guess wrong between them.",
  },
  balls: {
    image: "/images/shop/ball-at-the-hole.jpg",
    alt: "A golf ball resting on the lip of the hole beside the flagstick",
    body: "The only piece of equipment you use on every shot, and the gap between models is wider than most players expect. Come in with a sleeve of each.",
  },
  bags: {
    image: "/images/shop/three-stand-bags.jpg",
    alt: "Three stand bags with their legs out on a fairway",
    body: "Stand bags and cart bags, weighed on the same scale, so you can compare what you will actually carry for four hours.",
  },
  gloves: {
    image: "/images/shop/glove-going-on.jpg",
    alt: "A golfer pulling a white leather glove onto their hand",
    body: "Cabretta leather wears out. That is the point of it. Buy the size that feels a shade tight on the first hole.",
  },
  headwear: {
    image: "/images/shop/caps-on-the-links.jpg",
    alt: "Two golfers in caps and coats standing on a links fairway",
    body: "Caps and visors, vented where it matters. Nothing here carries our name, because we did not make any of it.",
  },
};

export function ShopPage({
  category,
  brand,
}: {
  category?: Category;
  brand?: string;
}) {
  const shelf = products.filter(
    (product) =>
      (!category || product.category === category) &&
      (!brand || product.brand.toLowerCase() === brand.toLowerCase()),
  );

  const band = bands[category ?? "all"];
  const heading = category ? categoryName(category) : "Equipment store";
  // only when a brand is actually being filtered on, and spelled the way
  // the catalogue spells it rather than the way the URL did
  const brandLabel = brand ? (shelf[0]?.brand ?? brand) : undefined;

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
            brand={brand}
          />

          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-5">
              <h2 className="text-[1.375rem] leading-none">
                {shelf.length} {shelf.length === 1 ? "result" : "results"}
                {brandLabel ? (
                  <span className="text-charcoal/45">, {brandLabel}</span>
                ) : null}
              </h2>
              {brand ? (
                <Link
                  href={category ? `/shop/${category}` : "/shop"}
                  className="text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/60 underline underline-offset-4 hover:text-charcoal"
                >
                  Clear brand
                </Link>
              ) : null}
            </div>

            <div className="mt-6 border-t border-mist pt-6">
              <BrandFilter category={category} brand={brand} />
            </div>

            {shelf.length > 0 ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
                {shelf.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
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
