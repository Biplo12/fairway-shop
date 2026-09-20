"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

import { useBag } from "@/components/cart/cart-context";
import { formatPrice } from "@/content/products";
import { checkoutNotes, deliveryOptions } from "@/content/checkout";

export function BagPage() {
  const { lines, count, subtotal, ready, setQuantity, remove } = useBag();

  const standard = deliveryOptions[0];
  const carriage =
    standard.freeOver !== undefined && subtotal >= standard.freeOver
      ? 0
      : standard.price;
  const needsFitting = lines.some((line) => line.product.fittingRecommended);

  if (!ready) {
    return (
      <div className="px-6 py-16 md:px-10">
        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
          Reading your bag
        </p>
        <h1 className="mt-3 text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
          Your bag
        </h1>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h1 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
          Nothing in the bag
        </h1>
        <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.6] text-charcoal/70">
          If you are between two models, do not decide here. Put both on the
          monitor, keep the numbers, then come back and buy the one that won.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
          >
            Shop the rack
          </Link>
          <Link
            href="/fitting"
            className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
          >
            Book a fitting
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 md:px-10 md:py-12">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/55">
          <li>
            <Link href="/" className="hover:text-charcoal">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-charcoal">Your bag</li>
        </ol>
      </nav>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
          Your bag
        </h1>
        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
          {count} {count === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
        <ul>
          {lines.map(({ product, quantity, unitPrice }) => (
            <li
              key={product.slug}
              className="flex flex-col gap-5 border-t border-mist py-6 sm:flex-row sm:gap-6"
            >
              <Link
                href={`/shop/${product.category}/${product.slug}`}
                className="w-32 shrink-0 overflow-hidden rounded-[10px] bg-paper sm:w-36"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={288}
                  height={288}
                  sizes="144px"
                  className="size-full object-contain"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                      {product.brand}
                    </p>
                    <h2 className="mt-1.5 text-[1.25rem] leading-[1.2]">
                      <Link
                        href={`/shop/${product.category}/${product.slug}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {product.model}
                      </Link>
                    </h2>
                    <p className="mt-1 text-[0.875rem] text-charcoal/55">
                      {product.detail}
                      {product.fittingRecommended ? ", fit first" : ""}
                    </p>
                  </div>
                  <p className="text-[1.0625rem] tabular-nums text-charcoal/60">
                    {formatPrice(unitPrice)} each
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center rounded-control border border-charcoal/20">
                      <button
                        type="button"
                        onClick={() => setQuantity(product.slug, quantity - 1)}
                        aria-label={`One fewer ${product.model}`}
                        className="grid size-9 place-items-center text-charcoal/70 transition-colors hover:text-charcoal"
                      >
                        <Minus className="size-3.5" strokeWidth={1.75} />
                      </button>
                      <span
                        aria-live="polite"
                        className="w-8 text-center text-[1rem] tabular-nums"
                      >
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(product.slug, quantity + 1)}
                        aria-label={`One more ${product.model}`}
                        className="grid size-9 place-items-center text-charcoal/70 transition-colors hover:text-charcoal"
                      >
                        <Plus className="size-3.5" strokeWidth={1.75} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => remove(product.slug)}
                      className="text-[0.75rem] uppercase tracking-[0.08em] text-charcoal/45 underline underline-offset-4 transition-colors hover:text-charcoal"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="text-[1.25rem] tabular-nums">
                    {formatPrice(unitPrice * quantity)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-card bg-paper p-6 md:p-8">
            <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              Order
            </h2>

            <dl className="mt-6 space-y-3 text-[1rem]">
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-charcoal/65">Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-charcoal/65">Standard delivery</dt>
                <dd className="tabular-nums">
                  {carriage === 0 ? "Free" : formatPrice(carriage)}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-charcoal/15 pt-5">
              <p className="text-[1rem]">Total</p>
              <p className="text-[1.5rem] tabular-nums">
                {formatPrice(subtotal + carriage)}
              </p>
            </div>

            <p className="mt-3 text-[0.8125rem] leading-[1.6] text-charcoal/55">
              {checkoutNotes.vat} Carriage is settled at the checkout, where
              collection is free.
            </p>

            <Link
              href="/checkout"
              className="mt-6 block rounded-control bg-charcoal px-6 py-4 text-center text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
            >
              Checkout
            </Link>
            <Link
              href="/shop"
              className="mt-3 block text-center text-[0.8125rem] uppercase tracking-[0.06em] text-charcoal/60 underline underline-offset-4 transition-colors hover:text-charcoal"
            >
              Keep looking
            </Link>

            {needsFitting ? (
              <p className="mt-7 border-t border-charcoal/15 pt-5 text-[0.875rem] leading-[1.6] text-charcoal/70">
                {checkoutNotes.custom}
              </p>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
