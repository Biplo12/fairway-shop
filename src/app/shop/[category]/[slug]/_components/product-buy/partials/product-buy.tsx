"use client";

import { useState } from "react";

import { useBag } from "@/components/cart/cart-context";
import { formatPrice } from "@/content/products";
import { cn } from "@/utils";

import type { ProductBuyProps } from "../types";

export function ProductBuy({
  slug,
  model,
  price,
  detail,
  inStock,
  options,
}: ProductBuyProps) {
  const { add } = useBag();
  const [chosen, setChosen] = useState<Record<string, string>>(() =>
    Object.fromEntries(options.map((option) => [option.id, option.values[0]])),
  );

  const factor = options.reduce(
    (total, option) => total * (option.priceFactor?.[chosen[option.id]] ?? 1),
    1,
  );

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between gap-4 border-t border-mist pt-5">
        <p className="text-[1.75rem] leading-none tabular-nums">
          {formatPrice(price * factor)}
        </p>
        <p className="text-[0.8125rem] text-charcoal/65">{detail}</p>
      </div>

      {options.map((option) => (
        <fieldset key={option.id} className="mt-6 first:mt-0">
          <legend className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
            {option.label}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {option.values.map((value) => {
              const active = chosen[option.id] === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setChosen((current) => ({ ...current, [option.id]: value }))
                  }
                  className={cn("rounded-control border px-4 py-2 text-[0.875rem] transition-colors", active
                      ? "border-charcoal bg-charcoal text-offwhite"
                      : "border-charcoal/20 text-charcoal hover:border-charcoal/60")}
                >
                  {value}
                </button>
              );
            })}
          </div>
          {option.note ? (
            <p className="mt-2 text-[0.8125rem] text-charcoal/65">
              {option.note}
            </p>
          ) : null}
        </fieldset>
      ))}

      <div className={options.length ? "mt-7" : ""}>
        {inStock ? (
          <button
            type="button"
            onClick={() => add(slug, 1, options.length ? chosen : undefined)}
            aria-label={`Add to bag: ${model}`}
            className="block w-full rounded-control bg-charcoal px-6 py-4 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
          >
            Add to bag
          </button>
        ) : (
          <span className="block w-full rounded-control border border-mist px-6 py-4 text-center text-[0.875rem] uppercase tracking-[0.06em] text-charcoal/65">
            Back in Friday
          </span>
        )}
      </div>
    </div>
  );
}
