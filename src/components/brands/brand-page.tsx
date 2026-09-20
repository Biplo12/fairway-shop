import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { ProductCard } from "@/components/products/product-card";
import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { brands, type Brand } from "@/content/brands";
import { brandPages } from "@/content/brand-pages";
import { products } from "@/content/products";

/** one full row at lg, where the grid runs three across */
const SHOWN = 6;

/**
 * A page per maker, built from the same parts as the rest of the shop: a card
 * with the navigation in it, then bands on the grey ground underneath.
 *
 * The hero is split rather than full bleed, because a brand frame is as often
 * a macro of a ball as it is a fairway, and a 2.5:1 band eats a macro.
 *
 * Counts come off the catalogue, so a brand we fit but do not rack says so
 * instead of showing an empty grid.
 */
export function BrandPage({ brand }: { brand: Brand }) {
  const page = brandPages[brand.slug];
  const shelf = products.filter(
    (product) => product.brand.toLowerCase() === brand.name.toLowerCase(),
  );
  const shown = shelf.slice(0, SHOWN);
  const others = brands.filter((entry) => entry.slug !== brand.slug);
  const shelfHref = `/shop?brand=${encodeURIComponent(brand.name.toLowerCase())}`;

  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="brands" />

            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-between gap-12 p-6 md:p-12 lg:p-14">
                <div>
                  <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/55">
                      <li>
                        <Link href="/" className="hover:text-charcoal">
                          Home
                        </Link>
                      </li>
                      <li aria-hidden>/</li>
                      <li>
                        <Link href="/brands" className="hover:text-charcoal">
                          Brands
                        </Link>
                      </li>
                      <li aria-hidden>/</li>
                      <li className="text-charcoal">{brand.name}</li>
                    </ol>
                  </nav>

                  <div className="mt-10 flex h-14 items-center">
                    <BrandLogo slug={brand.slug} name={brand.name} />
                  </div>

                  <h1 className="mt-8 text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.03em]">
                    {brand.name}
                  </h1>
                  <p className="mt-5 max-w-[30rem] text-[1.125rem] leading-[1.5] text-charcoal/80">
                    {page.statement}
                  </p>
                </div>

                <div>
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-mist pt-7 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                        Founded
                      </dt>
                      <dd className="mt-1.5 text-[1.25rem] leading-none tabular-nums">
                        {page.founded}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                        On our rack
                      </dt>
                      <dd className="mt-1.5 text-[1.25rem] leading-none tabular-nums">
                        Since {page.since}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                        Home
                      </dt>
                      <dd className="mt-1.5 text-[1.0625rem] leading-tight">
                        {page.home}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {shelf.length > 0 ? (
                      <Link
                        href={shelfHref}
                        className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                      >
                        Shop {brand.name}
                      </Link>
                    ) : null}
                    <Link
                      href="/fitting#book"
                      className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
                    >
                      Book a fitting
                    </Link>
                  </div>
                </div>
              </div>

              {/* Media is position: relative, so the absolute box goes around
                  it rather than on it, or ratio="fill" has nothing to measure
                  against. */}
              <div className="relative min-h-[20rem] md:min-h-[34rem]">
                <div className="absolute inset-0">
                  <Media
                    src={page.image}
                    alt={page.alt}
                    ratio="fill"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="rounded-card bg-white px-6 py-12 md:px-12 md:py-16">
              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <div>
                  <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                    Why it is on the rack
                  </span>
                  {page.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-6 max-w-[40rem] text-[1.0625rem] leading-[1.7] text-charcoal/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="mt-8 max-w-[38rem] border-t border-mist pt-6 text-[1.0625rem] leading-[1.6]">
                    {page.counter}
                  </p>
                </div>

                <div className="rounded-card bg-paper p-6 md:p-8">
                  <h2 className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                    What we keep
                  </h2>
                  <ul className="mt-6">
                    {page.stocked.map((line) => (
                      <li
                        key={line}
                        className="border-t border-charcoal/12 py-3.5 text-[1rem] leading-[1.5] first:border-t-0 first:pt-0"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-charcoal/12 pt-5 text-[0.875rem] leading-[1.6] text-charcoal/60">
                    {brand.note}. Anything not on the rack is ordered in and
                    fitted here first.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="rounded-card bg-white px-6 py-12 md:px-12 md:py-16">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                  {shelf.length > 0
                    ? `${brand.name} on the rack`
                    : `No ${brand.name} on the rack today`}
                </h2>
                {shelf.length > SHOWN ? (
                  <Link
                    href={shelfHref}
                    className="group inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
                  >
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="underline underline-offset-4">
                      All {shelf.length} lines
                    </span>
                  </Link>
                ) : null}
              </div>

              {shelf.length > 0 ? (
                <div className="mt-9 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
                  {shown.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <>
                  <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.6] text-charcoal/70">
                    We fit {brand.name} and order it in rather than keeping it
                    on the shelf. It is a specialist line, the wait is two to
                    four weeks, and nothing is ordered before you have hit it.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/fitting#book"
                      className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                    >
                      Book a fitting
                    </Link>
                    <Link
                      href="/shop"
                      className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
                    >
                      See what is racked
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="rounded-card bg-charcoal px-6 py-10 text-offwhite md:px-12 md:py-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
                  The rest of the rack
                </p>
                <Link
                  href="/brands"
                  className="text-[0.875rem] uppercase tracking-[0.04em] text-offwhite/80 underline underline-offset-4 hover:text-offwhite"
                >
                  All brands
                </Link>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
                {others.map((entry) => (
                  <li
                    key={entry.slug}
                    className="flex h-20 items-center justify-center"
                  >
                    <Link
                      href={`/brands/${entry.slug}`}
                      className="flex h-full w-full items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                      title={entry.note}
                    >
                      <BrandLogo
                        slug={entry.slug}
                        name={entry.name}
                        imageClassName="brightness-0 invert"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
