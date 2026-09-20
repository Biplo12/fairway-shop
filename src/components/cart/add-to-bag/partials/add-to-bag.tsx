"use client";

import { useBag } from "@/components/cart/cart-context";
import { cn } from "@/utils";

const sizes = {
  small: "px-4 py-2 text-[0.75rem]",
  large: "px-6 py-4 text-[0.875rem]",
};

export function AddToBag({
  slug,
  model,
  inStock,
  size = "small",
}: {
  slug: string;
  model: string;
  inStock: boolean;
  size?: keyof typeof sizes;
}) {
  const { add } = useBag();

  if (!inStock) {
    return (
      <span className={cn("block w-full rounded-control border border-mist text-center uppercase tracking-[0.06em] text-charcoal/40", sizes[size])}>
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
      className={cn("block w-full rounded-control uppercase tracking-[0.06em] transition-colors", sizes[size], size === "large"
          ? "bg-charcoal text-offwhite hover:bg-charcoal/90"
          : "border border-charcoal/25 hover:border-charcoal hover:bg-charcoal hover:text-offwhite")}
    >
      Add to bag
    </button>
  );
}
