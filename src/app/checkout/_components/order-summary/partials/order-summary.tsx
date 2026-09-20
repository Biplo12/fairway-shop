"use client";

import Image from "next/image";
import Link from "next/link";

import { useBag } from "@/components/cart/cart-context";
import { formatPrice } from "@/content/products";
import {
  checkoutNotes,
  deliveryCost,
  type DeliveryOption,
} from "@/content/checkout";

export function OrderSummary({ option }: { option: DeliveryOption }) {
  const { lines, count, subtotal, ready } = useBag();
  const carriage = deliveryCost(option, subtotal);
  const needsFitting = lines.some((line) => line.product.fittingRecommended);

  return (
    <div className="px-6 py-10 md:px-10 md:py-12 lg:sticky lg:top-0">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
          Your order
        </h2>
        <Link
          href="/bag"
          className="text-[0.75rem] uppercase tracking-[0.16em] text-charcoal/55 underline underline-offset-4 transition-colors hover:text-charcoal"
        >
          Edit
        </Link>
      </div>

      {!ready ? (
        <p className="mt-8 text-[0.875rem] text-charcoal/55">
          Reading your bag
        </p>
      ) : (
        <>
          <ul className="mt-7">
            {lines.map(({ product, quantity, unitPrice }) => (
              <li
                key={product.slug}
                className="flex gap-4 border-t border-charcoal/12 py-4"
              >
                <div className="relative w-16 shrink-0 overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={128}
                    height={128}
                    sizes="64px"
                    className="size-full object-contain"
                  />
                  <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-bl-[8px] bg-charcoal text-[0.6875rem] tabular-nums text-offwhite">
                    {quantity}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                      {product.brand}
                    </p>
                    <p className="mt-1 text-[0.9375rem] leading-[1.3]">
                      {product.model}
                    </p>
                  </div>
                  <p className="shrink-0 text-[0.9375rem] tabular-nums">
                    {formatPrice(unitPrice * quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <dl className="space-y-3 border-t border-charcoal/12 pt-6 text-[0.9375rem]">
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-charcoal/65">
                Subtotal, {count} {count === 1 ? "item" : "items"}
              </dt>
              <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-charcoal/65">{option.name}</dt>
              <dd className="tabular-nums">
                {carriage === 0 ? "Free" : formatPrice(carriage)}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-charcoal/15 pt-5">
            <p className="text-[1rem]">Total</p>
            <p className="text-[1.75rem] leading-none tabular-nums">
              {formatPrice(subtotal + carriage)}
            </p>
          </div>

          <p className="mt-3 text-[0.8125rem] leading-[1.6] text-charcoal/55">
            {checkoutNotes.vat}
          </p>

          {needsFitting ? (
            <p className="mt-7 border-t border-charcoal/15 pt-5 text-[0.875rem] leading-[1.6] text-charcoal/70">
              {checkoutNotes.custom}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
