"use client";

import { useBag } from "@/components/cart/cart-context";

type Tone = "light" | "dark";

const tones: Record<Tone, { pill: string; badge: string }> = {
  /** white pill on photography, used in the hero */
  light: { pill: "bg-white text-charcoal", badge: "bg-charcoal text-white" },
  /** offwhite pill on the charcoal nav */
  dark: { pill: "bg-offwhite text-charcoal", badge: "bg-charcoal text-offwhite" },
};

/**
 * The bag pill. It opens the panel rather than navigating, because a cart that
 * throws away the page you were reading is a cart people stop opening.
 */
export function CartButton({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const { count, ready, setOpen } = useBag();
  const t = tones[tone];

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
      className={`flex items-center gap-2.5 rounded-full py-1 pl-4 pr-1 text-[0.8125rem] ${t.pill} ${className}`}
    >
      Cart
      <span
        className={`grid size-7 place-items-center rounded-full text-[0.75rem] tabular-nums ${t.badge}`}
      >
        {/* until the saved bag is read, the count is unknown, not zero */}
        {ready ? count : ""}
      </span>
    </button>
  );
}
