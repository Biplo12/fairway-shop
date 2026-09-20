import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { brands } from "@/content/brands";
import { brandPages } from "@/content/brand-pages";
import { products } from "@/content/products";

/**
 * The rack, listed as a page rather than as a band. Every cell is a logo, what
 * the maker is here for, and how many of their lines are actually on the shelf
 * today, because a count of zero is worth saying out loud in a shop that
 * orders specialist lines in.
 */
export function BrandsIndex() {
  const counted = brands.map((brand) => ({
    ...brand,
    statement: brandPages[brand.slug]?.statement,
    image: brandPages[brand.slug]?.image,
    imageAlt: brandPages[brand.slug]?.alt,
    lines: products.filter(
      (product) => product.brand.toLowerCase() === brand.name.toLowerCase(),
    ).length,
  }));

  const racked = counted.filter((brand) => brand.lines > 0).length;

  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="brands" />

            <div className="relative bg-charcoal">
              <div className="absolute inset-0">
                <Media
                  src="/images/brands/the-rack.jpg"
                  alt="A links course at dusk, a single figure on the fairway"
                  ratio="fill"
                  sizes="100vw"
                  priority
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/35"
              />

              <div className="relative flex min-h-[26rem] flex-col justify-between gap-10 p-6 pb-16 md:min-h-[24rem] md:p-10 md:pb-20 lg:p-12 lg:pb-24 lg:aspect-[3.05/1]">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/70">
                    <li>
                      <Link href="/" className="hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-white">Brands</li>
                  </ol>
                </nav>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-[34rem]">
                    <h1 className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
                      Every brand that matters
                    </h1>
                    <p className="mt-4 text-[1rem] leading-[1.55] text-white/80">
                      Twelve makers, chosen line by line rather than range by
                      range. We did not build any of it. We decided which of it
                      was worth the space.
                    </p>
                  </div>

                  <dl className="flex gap-10 lg:justify-end">
                    <div>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                        On the rack
                      </dt>
                      <dd className="mt-1.5 text-[1.375rem] leading-none text-white tabular-nums">
                        {racked} brands
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                        Fitted here
                      </dt>
                      <dd className="mt-1.5 text-[1.375rem] leading-none text-white tabular-nums">
                        All twelve
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* The grid lifts over the band, the join the shop pages use. */}
            <div className="relative -mt-7 rounded-t-[1.75rem] bg-white px-6 py-10 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-12">
              {/* Twelve logos on twelve grey plates read as one grey plate.
                  Each maker brings its own photograph instead, and the logo
                  reverses out over it: a black single ink mark inverted to
                  white by the filter rather than by a second file. */}
              <ul className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {counted.map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="group relative flex h-full flex-col justify-end overflow-hidden rounded-card bg-charcoal"
                    >
                      {brand.image ? (
                        <Media
                          src={brand.image}
                          alt={brand.imageAlt ?? ""}
                          ratio="4/5"
                          sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw"
                          imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="aspect-[4/5]" />
                      )}

                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/10"
                      />

                      <span className="absolute right-4 top-4 rounded-full border border-white/35 px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.08em] text-white/85">
                        {brand.lines === 0
                          ? "To order"
                          : `${brand.lines} ${brand.lines === 1 ? "line" : "lines"}`}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 flex flex-col p-6">
                        <BrandLogo
                          slug={brand.slug}
                          name={brand.name}
                          className="text-white"
                          imageClassName="brightness-0 invert"
                        />
                        <h2 className="sr-only">{brand.name}</h2>

                        <p className="mt-5 text-[0.9375rem] leading-[1.55] text-white/80">
                          {brand.statement}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-3 text-[0.8125rem] uppercase tracking-[0.04em] text-white">
                          <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                          <span className="underline underline-offset-4">
                            {brand.note}
                          </span>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="rounded-card bg-charcoal px-6 py-12 text-offwhite md:px-12 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                    We chose these. We did not build them.
                  </h2>
                  <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.7] text-offwhite/75">
                    A multi brand shop earns its keep in what it leaves off the
                    rack. Twelve makers is fewer than most, and every one of
                    them is here because it wins a specific argument at the
                    counter, not because a rep came round with a deal.
                  </p>
                </div>
                <div className="lg:pt-4">
                  <p className="text-[1.0625rem] leading-[1.7] text-offwhite/75">
                    If the brand you want is not here, ask. We will say whether
                    it is worth ordering in, and occasionally we will say it is
                    not.
                  </p>
                  <Link
                    href="/fitting#book"
                    className="mt-7 inline-flex rounded-control bg-offwhite px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:bg-white"
                  >
                    Book a fitting
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
