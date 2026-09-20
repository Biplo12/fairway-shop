import Link from "next/link";

import { products, type Category } from "@/content/products";

/**
 * Filtering as links, not state. The server already has the catalogue, so this
 * needs no JavaScript, every shelf has its own address, and a customer can
 * send someone the exact view they are looking at.
 *
 * The counts are counted inside the current category, and a brand with nothing
 * on this shelf is not offered at all. A filter that leads to an empty page is
 * worse than no filter.
 */
export function BrandFilter({
  category,
  brand,
}: {
  category?: Category;
  brand?: string;
}) {
  const path = category ? `/shop/${category}` : "/shop";
  const shelf = products.filter(
    (product) => !category || product.category === category,
  );
  const brands = [...new Set(shelf.map((product) => product.brand))]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      count: shelf.filter((product) => product.brand === name).length,
    }));

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
      <p className="shrink-0 text-[0.6875rem] uppercase tracking-[0.16em] text-olive md:pt-2">
        Brand
      </p>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Chip href={path} active={!brand}>
            All
          </Chip>
        </li>
        {brands.map((entry) => (
          <li key={entry.name}>
            <Chip
              href={`${path}?brand=${encodeURIComponent(entry.name.toLowerCase())}`}
              active={brand?.toLowerCase() === entry.name.toLowerCase()}
            >
              {entry.name}
              <span className="text-[0.6875rem] tabular-nums opacity-55">
                {entry.count}
              </span>
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] transition-colors ${
        active
          ? "border-charcoal bg-charcoal text-offwhite"
          : "border-charcoal/20 text-charcoal hover:border-charcoal/60"
      }`}
    >
      {children}
    </Link>
  );
}
