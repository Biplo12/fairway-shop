"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Minus, Plus, X } from "lucide-react";

import { useBag } from "@/components/cart/cart-context";
import { formatPrice } from "@/content/products";

/**
 * The bag, as a panel rather than a page, so nothing a customer was reading
 * gets thrown away to look at it.
 *
 * next/image directly rather than the Media wrapper: Media resolves files with
 * node:fs and this runs in the browser.
 */
export function CartDrawer() {
  const { lines, count, subtotal, open, setOpen, setQuantity, remove } =
    useBag();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    panel.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  const fittingLines = lines.filter(
    (line) => line.product.fittingRecommended,
  ).length;

  return (
    <div
      className={`fixed inset-0 z-[70] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close bag"
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-charcoal/45 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panel}
        role="dialog"
        aria-modal={open}
        aria-label="Your bag"
        tabIndex={-1}
        className={`absolute inset-y-0 right-0 flex w-full max-w-[30rem] flex-col bg-offwhite transition-transform duration-300 ease-out focus:outline-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between gap-4 border-b border-mist px-5 py-5 md:px-7">
          <div>
            <h2 className="text-[1.25rem] leading-none">Your bag</h2>
            <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              {count === 0
                ? "Empty"
                : `${count} ${count === 1 ? "item" : "items"}`}
            </p>
          </div>
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            aria-label="Close bag"
            className="grid size-10 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/10"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col justify-center px-5 py-10 md:px-7">
            <p className="text-[1.375rem] leading-[1.25]">
              Nothing in the bag yet.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.6] text-charcoal/70">
              If you are between two models, do not pick here. Put both on the
              monitor, keep the numbers, then come back.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
              >
                Shop the rack
              </Link>
              <Link
                href="/fitting"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
              >
                Book a fitting
              </Link>
            </div>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-5 md:px-7">
            {lines.map(({ product, quantity }) => (
              <li
                key={product.slug}
                className="flex gap-4 border-b border-mist py-5"
              >
                {/* self-stretch, so the packshot is as tall as the line it
                    belongs to rather than a thumbnail floating beside it */}
                <div className="w-28 shrink-0 self-stretch overflow-hidden rounded-[10px] bg-white">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={224}
                    height={224}
                    sizes="112px"
                    className="size-full object-contain"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                        {product.brand}
                      </p>
                      <p className="mt-1 truncate text-[1rem]">
                        {product.model}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] text-charcoal/55">
                        {product.detail}
                      </p>
                    </div>

                    <button
                      type="button"
                      tabIndex={open ? 0 : -1}
                      onClick={() => remove(product.slug)}
                      aria-label={`Remove ${product.model}`}
                      className="shrink-0 text-[0.75rem] uppercase tracking-[0.08em] text-charcoal/45 underline underline-offset-4 transition-colors hover:text-charcoal"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <div className="flex items-center rounded-control border border-charcoal/20">
                      <button
                        type="button"
                        tabIndex={open ? 0 : -1}
                        onClick={() => setQuantity(product.slug, quantity - 1)}
                        aria-label={`One fewer ${product.model}`}
                        className="grid size-8 place-items-center text-charcoal/70 transition-colors hover:text-charcoal"
                      >
                        <Minus className="size-3.5" strokeWidth={1.75} />
                      </button>
                      <span
                        aria-live="polite"
                        className="w-7 text-center text-[0.9375rem] tabular-nums"
                      >
                        {quantity}
                      </span>
                      <button
                        type="button"
                        tabIndex={open ? 0 : -1}
                        onClick={() => setQuantity(product.slug, quantity + 1)}
                        aria-label={`One more ${product.model}`}
                        className="grid size-8 place-items-center text-charcoal/70 transition-colors hover:text-charcoal"
                      >
                        <Plus className="size-3.5" strokeWidth={1.75} />
                      </button>
                    </div>

                    <p className="text-[1.0625rem] tabular-nums">
                      {formatPrice(product.price * quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {lines.length > 0 ? (
          <footer className="border-t border-mist bg-paper px-5 py-6 md:px-7">
            <div className="flex items-baseline justify-between">
              <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                Subtotal
              </p>
              <p className="text-[1.375rem] tabular-nums">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="mt-2 text-[0.8125rem] leading-[1.5] text-charcoal/55">
              {fittingLines > 0
                ? "Clubs in this bag are worth fitting first. The session fee comes off the price."
                : "Delivery calculated at checkout. Free over £75."}
            </p>

            <button
              type="button"
              tabIndex={open ? 0 : -1}
              className="mt-5 w-full rounded-control bg-charcoal px-6 py-4 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
            >
              Checkout
            </button>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/60 underline underline-offset-4 transition-colors hover:text-charcoal"
            >
              Keep looking
            </button>
          </footer>
        ) : null}
      </div>
    </div>
  );
}
