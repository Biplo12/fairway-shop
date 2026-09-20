"use client";

import { useBag } from "@/components/cart/cart-context";
import { cn } from "@/utils";
import { tones } from "../constants";
import type { Tone } from "../types";

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
      aria-label={`Cart ${count} ${count === 1 ? "item" : "items"}`}
      className={cn("flex items-center gap-2.5 rounded-full py-1 pl-4 pr-1 text-[0.8125rem]", t.pill, className)}
    >
      Cart
      <span
        aria-hidden
        className={cn("grid size-7 place-items-center rounded-full text-[0.75rem] tabular-nums", t.badge)}
      >
        {ready ? count : ""}
      </span>
    </button>
  );
}
