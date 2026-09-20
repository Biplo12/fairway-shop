import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import {
  inPriceBand,
  priceBands,
  products,
  sortOptions,
  type Category,
} from "@/content/products";
import { cn } from "@/utils";

export function ShelfFilter({
  category,
  brand,
  type,
  price,
  sort,
}: {
  category?: Category;
  brand?: string;
  type?: string;
  price?: string;
  sort?: string;
}) {
  const path = category ? `/shop/${category}` : "/shop";

  const href = (next: {
    brand?: string;
    type?: string;
    price?: string;
    sort?: string;
  }) => {
    const query = new URLSearchParams();
    const nextBrand = "brand" in next ? next.brand : brand;
    const nextType = "type" in next ? next.type : type;
    const nextPrice = "price" in next ? next.price : price;
    const nextSort = "sort" in next ? next.sort : sort;
    if (nextBrand) query.set("brand", nextBrand.toLowerCase());
    if (nextType) query.set("type", nextType.toLowerCase());
    if (nextPrice) query.set("price", nextPrice);
    if (nextSort && nextSort !== "featured") query.set("sort", nextSort);
    const search = query.toString();
    return search ? `${path}?${search}` : path;
  };

  const shelf = products.filter(
    (product) => !category || product.category === category,
  );

  const withinType = shelf.filter(
    (product) => !type || product.subcategory?.toLowerCase() === type.toLowerCase(),
  );
  const withinBrand = shelf.filter(
    (product) => !brand || product.brand.toLowerCase() === brand.toLowerCase(),
  );
  const withinBoth = withinType.filter(
    (product) => !brand || product.brand.toLowerCase() === brand.toLowerCase(),
  );

  const bands = priceBands
    .map((band) => ({
      ...band,
      count: withinBoth.filter((product) => inPriceBand(product, band.slug))
        .length,
    }))
    .filter((band) => band.count > 0);

  const forBrands = withinType.filter((product) => inPriceBand(product, price));
  const brands = [...new Set(forBrands.map((product) => product.brand))]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      count: forBrands.filter((product) => product.brand === name).length,
    }));

  const types = [
    ...new Set(
      withinBrand
        .map((product) => product.subcategory)
        .filter((value): value is string => Boolean(value)),
    ),
  ]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      count: withinBrand.filter((product) => product.subcategory === name).length,
    }));

  const on = Boolean(brand || type || price || sort);

  return (
    <details className="group relative">
      <summary
        className={cn("inline-flex cursor-pointer select-none items-center gap-2.5 rounded-full border px-4 py-2 text-[0.8125rem] uppercase tracking-[0.06em] transition-colors [&::-webkit-details-marker]:hidden", on
            ? "border-charcoal bg-charcoal text-offwhite"
            : "border-charcoal/25 text-charcoal hover:border-charcoal/60")}
      >
        Filter
        <SlidersHorizontal className="size-3.5" strokeWidth={1.75} />
      </summary>

      <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-[min(23rem,calc(100vw-3rem))] rounded-card border border-mist bg-white p-5 shadow-[0_18px_40px_rgba(23,24,23,0.14)]">
        {types.length > 1 ? (
          <div className="mb-6">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
              Type
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <Chip href={href({ type: undefined })} active={!type}>
                  All
                </Chip>
              </li>
              {types.map((entry) => {
                const active = type?.toLowerCase() === entry.name.toLowerCase();
                return (
                  <li key={entry.name}>
                    <Chip
                      href={href({ type: active ? undefined : entry.name })}
                      active={active}
                      label={
                        active
                          ? `Clear the ${entry.name} filter`
                          : `Show ${entry.name} only`
                      }
                    >
                      <span className="capitalize">{entry.name}</span>
                      <span className="text-[0.6875rem] tabular-nums opacity-55">
                        {entry.count}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {bands.length > 1 ? (
          <div className="mb-6">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
              Price
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <Chip href={href({ price: undefined })} active={!price}>
                  Any
                </Chip>
              </li>
              {bands.map((band) => {
                const active = price === band.slug;
                return (
                  <li key={band.slug}>
                    <Chip
                      href={href({ price: active ? undefined : band.slug })}
                      active={active}
                      label={
                        active
                          ? `Clear the ${band.name} filter`
                          : `Show ${band.name} only`
                      }
                    >
                      {band.name}
                      <span className="text-[0.6875rem] tabular-nums opacity-55">
                        {band.count}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div className="mb-6">
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
            Sort
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sortOptions.map((option) => {
              const active = (sort ?? "featured") === option.slug;
              return (
                <li key={option.slug}>
                  <Chip
                    href={href({ sort: option.slug })}
                    active={active}
                    label={`Sort by ${option.name}`}
                  >
                    {option.name}
                  </Chip>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
          Brand
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li>
            <Chip href={href({ brand: undefined })} active={!brand}>
              All
            </Chip>
          </li>
          {brands.map((entry) => {
            const active = brand?.toLowerCase() === entry.name.toLowerCase();
            return (
              <li key={entry.name}>
                <Chip
                  href={href({ brand: active ? undefined : entry.name })}
                  active={active}
                  label={
                    active
                      ? `Clear the ${entry.name} filter`
                      : `Show ${entry.name} only`
                  }
                >
                  {entry.name}
                  <span className="text-[0.6875rem] tabular-nums opacity-55">
                    {entry.count}
                  </span>
                </Chip>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}

function Chip({
  href,
  active,
  label,
  children,
}: {
  href: string;
  active: boolean;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      aria-label={label}
      title={label}
      className={cn("inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-colors", active
          ? "border-charcoal bg-charcoal text-offwhite"
          : "border-charcoal/20 text-charcoal hover:border-charcoal/60")}
    >
      {children}
    </Link>
  );
}
