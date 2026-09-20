import Link from "next/link";
import { Plus } from "lucide-react";

import { AddToBag } from "@/components/cart/add-to-bag";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { PageNav } from "@/components/layout/page-nav";
import { ProductGallery } from "@/components/product/product-gallery";
import { Media } from "@/components/ui/media";
import { categoryName, formatPrice, type Product } from "@/content/products";
import { type ProductPage as Detail } from "@/content/product-pages";
import { clubFrames, productFrames } from "@/content/product-frames";

/**
 * One product, laid out the way the reference lays one out: the buy block on a
 * recessed panel, then a photographic statement, then what a customer should
 * know, then the line a fitter would actually say.
 *
 * The voice through all of it is the shop's. FAIRWAY did not build any of this
 * and the page never pretends otherwise, so there is no technology claim and
 * no tour player quoted. Section 3.
 *
 * No entrance animation on the blocks below. They are panels inside one card,
 * not sections on a page, and sliding a panel up inside a clipped card opens a
 * gap against the card's own edge on the way in.
 */
export function ProductPage({
  product,
  detail,
}: {
  product: Product;
  detail: Detail;
}) {
  const images = detail.gallery ?? [product.image];
  const { band, note } =
    (product.subcategory ? clubFrames[product.subcategory] : undefined) ??
    productFrames[product.category];

  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="shop" />

          {/* One container, not three. The packshot and what it costs sit
              inside the page's own card rather than each in a card of their
              own, which on a phone was three rounded boxes deep. */}
          <div className="md:px-6 md:py-6 lg:px-8 lg:py-8">
            <div className="grid gap-0 md:gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
              <ProductGallery
                images={images}
                alt={product.alt}
                model={product.model}
              />

              <div className="flex flex-col border-t border-mist bg-white p-6 md:border-0 md:p-0 lg:py-2">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/50">
                    <li>
                      <Link href="/shop" className="hover:text-charcoal">
                        Equipment store
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href={`/shop/${product.category}`}
                        className="hover:text-charcoal"
                      >
                        {categoryName(product.category)}
                      </Link>
                    </li>
                  </ol>
                </nav>

                <h1 className="mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                  {product.brand} {product.model}
                </h1>
                <p className="mt-3 text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                  {detail.tagline}
                </p>
                <p className="mt-5 text-[1rem] leading-[1.6] text-charcoal/75">
                  {detail.description}
                </p>

                <div className="mt-7 flex items-baseline justify-between gap-4 border-t border-mist pt-5">
                  <p className="text-[1.75rem] leading-none tabular-nums">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-[0.8125rem] text-charcoal/55">
                    {product.detail}
                  </p>
                </div>

                <div className="mt-5">
                  <AddToBag
                    slug={product.slug}
                    model={product.model}
                    inStock={product.inStock}
                    size="large"
                  />
                </div>

                <p className="mt-3 text-[0.8125rem] leading-[1.5] text-charcoal/55">
                  {product.fittingRecommended ? (
                    <>
                      Worth fitting before you buy it. The session fee comes off
                      the price, and we will say so if it makes no difference.
                    </>
                  ) : (
                    <>
                      In the shop today. Free delivery over £75, and you can
                      bring it back if it is not right.
                    </>
                  )}
                </p>

                <div className="mt-7 border-t border-mist">
                  <Disclosure title="Specifications">
                    <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {detail.specs.map((spec, index) => {
                        // the rule under the last row would sit against the
                        // panel's own edge, and the grid is one column on a
                        // phone and two above it
                        const inLastRow =
                          index >=
                          detail.specs.length -
                            (detail.specs.length % 2 === 0 ? 2 : 1);
                        return (
                          <div
                            key={spec.label}
                            className={`flex items-baseline justify-between gap-4 border-b border-mist pb-2 last:border-0 last:pb-0 ${
                              inLastRow ? "sm:border-0 sm:pb-0" : ""
                            }`}
                          >
                            <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                              {spec.label}
                            </dt>
                            <dd className="text-right text-[0.9375rem]">
                              {spec.value}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                  </Disclosure>
                  <Disclosure title="Who it suits">
                    <p className="text-[0.9375rem] leading-[1.6] text-charcoal/75">
                      {detail.suits}
                    </p>
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-charcoal">
            <div className="absolute inset-0">
              <Media
                src={band.image}
                alt={band.alt}
                ratio="fill"
                sizes="100vw"
              />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 bg-charcoal/55 md:bg-charcoal/45"
            />

            <div className="relative flex min-h-[26rem] flex-col items-center justify-center gap-6 p-6 text-center md:min-h-[24rem] md:p-12 lg:aspect-[3.05/1]">
              <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2 text-[0.75rem] uppercase leading-none tracking-[0.06em] text-white">
                {product.brand} {product.model}
              </span>
              <h2 className="max-w-[46rem] text-[clamp(1.875rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-[-0.025em] text-white">
                {detail.headline}
              </h2>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8125rem] uppercase tracking-[0.1em] text-white/75">
                {detail.marks.map((mark, index) => (
                  <li key={mark} className="flex items-center gap-6">
                    {index > 0 ? (
                      <span aria-hidden className="text-white/35">
                        ·
                      </span>
                    ) : null}
                    {mark}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[20rem] md:min-h-[32rem]">
              <Media
                src={note.image}
                alt={note.alt}
                ratio="fill"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="absolute inset-0"
              />
            </div>

            <div className="flex flex-col justify-center gap-8 bg-paper p-6 md:p-12">
              <span className="inline-flex w-fit items-center rounded-full border border-charcoal/30 px-4 py-2 text-[0.75rem] uppercase leading-none tracking-[0.06em]">
                What you need to know
              </span>
              <ol className="flex flex-col">
                {detail.notes.map((line, index) => (
                  <li
                    key={line}
                    className="flex gap-5 border-b border-mist py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <span className="shrink-0 pt-1 text-[0.6875rem] uppercase tracking-[0.16em] text-olive tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1rem] leading-[1.55] text-charcoal/80">
                      {line}
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href="/fitting"
                className="w-fit text-[0.8125rem] uppercase tracking-[0.06em] underline underline-offset-4 hover:text-charcoal"
              >
                Book a fitting
              </Link>
            </div>
          </div>

          <div className="bg-charcoal px-6 py-14 text-offwhite md:px-12 md:py-20">
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
              From behind the counter
            </p>
            <blockquote className="mt-6 max-w-[48rem] text-[clamp(1.5rem,2.8vw,2.375rem)] font-normal leading-[1.2] tracking-[-0.02em]">
              {detail.counter}
            </blockquote>
            <p className="mt-8 text-[0.8125rem] uppercase tracking-[0.1em] text-offwhite/55">
              Fairway fitting studio, St. Andrews
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Disclosure rather than state, so the page stays on the server. */
function Disclosure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b border-mist">
      <summary className="flex cursor-pointer select-none items-center justify-between gap-4 py-4 text-[0.875rem] uppercase tracking-[0.06em] [&::-webkit-details-marker]:hidden">
        {title}
        <Plus
          className="size-4 shrink-0 text-charcoal/50 transition-transform duration-200 group-open:rotate-45"
          strokeWidth={1.75}
        />
      </summary>
      <div className="pb-5">{children}</div>
    </details>
  );
}
