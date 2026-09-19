"use client";

import { useBag } from "@/components/cart/cart-context";

/**
 * Sits inside the product card's link, so it has to stop the click from
 * following through to a product page the customer did not ask for.
 */
export function AddToBag({
  slug,
  model,
  inStock,
}: {
  slug: string;
  model: string;
  inStock: boolean;
}) {
  const { add } = useBag();

  if (!inStock) {
    return (
      <span className="block w-full rounded-control border border-mist px-4 py-2.5 text-center text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/40">
        Back in Friday
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        add(slug);
      }}
      aria-label={`Add ${model} to bag`}
      className="block w-full rounded-control border border-charcoal/25 px-4 py-2.5 text-[0.8125rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal hover:bg-charcoal hover:text-offwhite"
    >
      Add to bag
    </button>
  );
}
