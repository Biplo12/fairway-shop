import Link from "next/link";

import { Media } from "@/components/ui/media";
import { shopCategories, type Category } from "@/content/products";

/**
 * The band under the navigation: where you are, what the shelf is, and the
 * way across to the other shelves. Categories live here as pills rather than
 * in a filter panel, because moving between them is navigation, not filtering.
 */
export function CategoryHero({
  category,
  image,
  alt,
  heading,
  body,
  brand,
}: {
  category?: Category;
  image: string;
  alt: string;
  heading: string;
  body: string;
  brand?: string;
}) {
  const query = brand ? `?brand=${encodeURIComponent(brand.toLowerCase())}` : "";

  return (
    <div className="relative bg-charcoal">
      <div className="absolute inset-0">
        <Media src={image} alt={alt} ratio="fill" sizes="100vw" priority />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/25"
      />

      <div className="relative flex min-h-[28rem] flex-col justify-between gap-10 p-6 md:min-h-[27rem] md:p-10 lg:min-h-[31rem] lg:p-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              {category ? (
                <Link href="/shop" className="hover:text-white">
                  Equipment store
                </Link>
              ) : (
                <span className="text-white">Equipment store</span>
              )}
            </li>
            {category ? (
              <>
                <li aria-hidden>/</li>
                <li className="text-white">{heading}</li>
              </>
            ) : null}
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[32rem]">
            <h1 className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
              {heading}
            </h1>
            <p className="mt-4 text-[1rem] leading-[1.55] text-white/80">
              {body}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 lg:justify-end">
            {shopCategories.map((entry) => {
              const active = entry.slug === category;
              return (
                <li key={entry.slug}>
                  <Link
                    href={`/shop/${entry.slug}${query}`}
                    aria-current={active ? "true" : undefined}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] uppercase tracking-[0.04em] transition-colors ${
                      active
                        ? "border-white bg-white text-charcoal"
                        : "border-white/50 text-white hover:bg-white/15"
                    }`}
                  >
                    {entry.name}
                    <span className="text-[0.6875rem] tabular-nums opacity-60">
                      {entry.count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
