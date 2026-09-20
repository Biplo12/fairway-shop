"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useBag, type BagLine } from "@/components/cart/cart-context";
import { formatPrice } from "@/content/products";
import { checkoutNotes, deliveryCost, deliveryOptions } from "@/content/checkout";

type Placed = { lines: BagLine[]; subtotal: number };

export function Confirmation({
  reference,
  deliveryId,
}: {
  reference?: string;
  deliveryId?: string;
}) {
  const { lines, subtotal, ready, clear } = useBag();
  const [placed, setPlaced] = useState<Placed | null>(null);

  useEffect(() => {
    if (!ready || placed || lines.length === 0) return;
    const frame = requestAnimationFrame(() => {
      setPlaced({ lines, subtotal });
      clear();
    });
    return () => cancelAnimationFrame(frame);
  }, [ready, placed, lines, subtotal, clear]);

  const option =
    deliveryOptions.find((entry) => entry.id === deliveryId) ??
    deliveryOptions[0];
  const carriage = placed ? deliveryCost(option, placed.subtotal) : 0;
  const needsFitting =
    placed?.lines.some((line) => line.product.fittingRecommended) ?? false;

  const next = [
    {
      index: "01",
      name: "A written confirmation",
      body: "It lands in your inbox in a minute or two, with the reference above on it.",
    },
    {
      index: "02",
      name: needsFitting ? "A call from the studio" : "Packed at the bench",
      body: needsFitting
        ? "There is a club here worth fitting. We ring before anything is cut, and the session fee comes off the price."
        : "Orders leave the bench the same day when they are in stock specs.",
    },
    {
      index: "03",
      name: option.id === "collect" ? "Collection" : option.name,
      body:
        option.id === "collect"
          ? "We call when it is on the bench. Ask for the studio when you arrive."
          : option.note,
    },
  ];

  return (
    <div className="px-6 py-12 md:px-10 md:py-16">
      <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
        Order placed
      </p>
      <h1 className="mt-5 max-w-[26rem] text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.03em]">
        That is yours. Thank you.
      </h1>
      {reference ? (
        <p className="mt-5 text-[1.0625rem] text-charcoal/70">
          Reference{" "}
          <span className="tabular-nums text-charcoal">{reference}</span>. Quote
          it if you call the shop.
        </p>
      ) : null}

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ol className="space-y-8">
          {next.map((step) => (
            <li key={step.index} className="border-t border-mist pt-5">
              <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
                {step.index}
              </span>
              <h2 className="mt-3 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                {step.name}
              </h2>
              <p className="mt-2.5 max-w-[30rem] text-[0.9375rem] leading-[1.65] text-charcoal/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="rounded-card bg-paper p-6 md:p-8">
          <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
            What you bought
          </h2>

          {placed ? (
            <>
              <ul className="mt-6">
                {placed.lines.map(({ product, quantity, unitPrice }) => (
                  <li
                    key={product.slug}
                    className="flex items-center gap-4 border-t border-charcoal/12 py-4"
                  >
                    <div className="w-14 shrink-0 overflow-hidden rounded-[8px] bg-white">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={112}
                        height={112}
                        sizes="56px"
                        className="size-full object-contain"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 items-baseline justify-between gap-4">
                      <p className="min-w-0 text-[0.9375rem]">
                        {product.model}
                        <span className="text-charcoal/50">
                          {" "}
                          &times; {quantity}
                        </span>
                      </p>
                      <p className="shrink-0 text-[0.9375rem] tabular-nums">
                        {formatPrice(unitPrice * quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="space-y-3 border-t border-charcoal/12 pt-5 text-[0.9375rem]">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-charcoal/65">{option.name}</dt>
                  <dd className="tabular-nums">
                    {carriage === 0 ? "Free" : formatPrice(carriage)}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-charcoal/15 pt-5">
                <p className="text-[1rem]">Paid</p>
                <p className="text-[1.5rem] tabular-nums">
                  {formatPrice(placed.subtotal + carriage)}
                </p>
              </div>
              <p className="mt-3 text-[0.8125rem] leading-[1.6] text-charcoal/55">
                {checkoutNotes.vat}
              </p>
            </>
          ) : (
            <p className="mt-6 text-[0.9375rem] leading-[1.65] text-charcoal/70">
              The lines are on the confirmation email. This page keeps nothing
              once the bag is emptied.
            </p>
          )}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-mist pt-8">
        <Link
          href="/shop"
          className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
        >
          Back to the rack
        </Link>
        <Link
          href="/fitting#book"
          className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
        >
          Book a fitting
        </Link>
      </div>

      <p className="mt-8 max-w-[36rem] text-[0.8125rem] leading-[1.6] text-charcoal/55">
        {checkoutNotes.demo}
      </p>
    </div>
  );
}
