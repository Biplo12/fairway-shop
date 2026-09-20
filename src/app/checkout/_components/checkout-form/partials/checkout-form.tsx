"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";

import { useBag } from "@/components/cart/cart-context";
import { OrderSummary } from "../../order-summary";
import { formatPrice } from "@/content/products";
import {
  checkoutNotes,
  deliveryCost,
  deliveryOptions,
  orderReference,
  paymentOptions,
} from "@/content/checkout";
import { cn } from "@/utils";
import {
  addressFields,
  cardFields,
  contactFields,
  countries,
  field,
  label,
  type CheckoutField,
} from "../constants";

/**
 * Every text field on this form is the same label over the same input. They
 * differ in six attributes, so those live in a list and this draws them.
 */
function Field({ spec }: { spec: CheckoutField }) {
  return (
    <div className={spec.wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={spec.id} className={label}>
        {spec.label}
      </label>
      <input
        id={spec.id}
        name={spec.name}
        type={spec.type ?? "text"}
        required={spec.required}
        autoComplete={spec.autoComplete}
        inputMode={spec.inputMode}
        maxLength={spec.maxLength}
        placeholder={spec.placeholder}
        className={cn(field, "mt-2.5", spec.className)}
      />
    </div>
  );
}

function Section({
  index,
  title,
  note,
  children,
}: {
  index: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-mist pt-8">
      <div className="flex items-baseline gap-4">
        <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
          {index}
        </span>
        <h2 className="text-[1.375rem] leading-none tracking-[-0.015em]">
          {title}
        </h2>
      </div>
      {note ? (
        <p className="ml-9 mt-3 max-w-[34rem] text-[0.875rem] leading-[1.6] text-charcoal/60">
          {note}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function CheckoutForm() {
  const router = useRouter();
  const { lines, count, subtotal, ready } = useBag();

  const [deliveryId, setDeliveryId] = useState(deliveryOptions[0].id);
  const [paymentId, setPaymentId] = useState(paymentOptions[0].id);
  const [placing, setPlacing] = useState(false);

  const option =
    deliveryOptions.find((entry) => entry.id === deliveryId) ??
    deliveryOptions[0];
  const collecting = option.id === "collect";

  const payment = !collecting && paymentId === "counter" ? "card" : paymentId;

  if (ready && lines.length === 0 && !placing) {
    return (
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h1 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
          Nothing to check out
        </h1>
        <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.6] text-charcoal/70">
          The bag is empty. Whatever was in it is still on the rack, and if you
          are choosing between two of them, the studio settles it in ninety
          minutes.
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
    <div className="grid lg:grid-cols-[1.35fr_1fr]">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setPlacing(true);
          router.push(
            `/checkout/confirmed?order=${orderReference()}&delivery=${option.id}`,
          );
        }}
        className="px-6 py-10 md:px-10 md:py-12 lg:border-r lg:border-mist"
      >
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/55">
            <li>
              <Link href="/bag" className="hover:text-charcoal">
                Your bag
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-charcoal">Checkout</li>
          </ol>
        </nav>

        <div className="mb-10 mt-6 flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
            Checkout
          </h1>
          {ready ? (
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              {count} {count === 1 ? "item" : "items"}
            </p>
          ) : null}
        </div>

        <Section
          index="01"
          title="Where we reach you"
          note="One email for the order, one number for the call before anything is cut or ordered in."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {contactFields.map((spec) => (
              <Field key={spec.id} spec={spec} />
            ))}
          </div>
        </Section>

        <Section
          index="02"
          title={collecting ? "Billing address" : "Delivery address"}
          note={
            collecting
              ? "The clubs wait in the shop. This is the address on the card."
              : undefined
          }
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {addressFields.map((spec) => (
              <Field key={spec.id} spec={spec} />
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="checkout-country" className={label}>
                Country
              </label>
              <select
                id="checkout-country"
                name="country"
                defaultValue="United Kingdom"
                className={cn(field, "mt-2.5 appearance-none")}
              >
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        </Section>

        <Section index="03" title="How it travels">
          <fieldset>
            <legend className="sr-only">Delivery</legend>
            <div className="space-y-3">
              {deliveryOptions.map((entry) => {
                const chosen = entry.id === deliveryId;
                return (
                  <label
                    key={entry.id}
                    className={cn("flex cursor-pointer items-start gap-4 rounded-control border px-5 py-4 transition-colors", chosen
                        ? "border-charcoal bg-paper"
                        : "border-charcoal/20 hover:border-charcoal/45")}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={entry.id}
                      checked={chosen}
                      onChange={() => setDeliveryId(entry.id)}
                      className="mt-1 size-4 accent-forest"
                    />
                    <span className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span>
                        <span className="block text-[1rem]">{entry.name}</span>
                        <span className="mt-1 block text-[0.875rem] leading-[1.5] text-charcoal/60">
                          {entry.note}
                        </span>
                      </span>
                      <span className="flex items-baseline gap-2 text-[1rem] tabular-nums">
                        {entry.freeOver !== undefined &&
                        deliveryCost(entry, subtotal) === 0 ? (
                          <span className="text-[0.75rem] uppercase tracking-[0.08em] text-olive">
                            Over {formatPrice(entry.freeOver)}
                          </span>
                        ) : null}
                        {deliveryCost(entry, subtotal) === 0
                          ? "Free"
                          : formatPrice(deliveryCost(entry, subtotal))}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </Section>

        <Section index="04" title="Payment">
          <fieldset>
            <legend className="sr-only">How you pay</legend>
            <div className="space-y-3">
              {paymentOptions.map((entry) => {
                const available = entry.id !== "counter" || collecting;
                const chosen = entry.id === payment && available;
                return (
                  <label
                    key={entry.id}
                    className={cn("flex items-start gap-4 rounded-control border px-5 py-4 transition-colors", available
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-45", chosen
                        ? "border-charcoal bg-paper"
                        : "border-charcoal/20 hover:border-charcoal/45")}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={entry.id}
                      checked={chosen}
                      disabled={!available}
                      onChange={() => setPaymentId(entry.id)}
                      className="mt-1 size-4 accent-forest"
                    />
                    <span>
                      <span className="block text-[1rem]">{entry.name}</span>
                      <span className="mt-1 block text-[0.875rem] leading-[1.5] text-charcoal/60">
                        {available
                          ? entry.note
                          : "Choose collection above and you can settle it in the shop."}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {payment === "card" ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {cardFields.map((spec) => (
                <Field key={spec.id} spec={spec} />
              ))}
            </div>
          ) : null}
        </Section>

        <div className="mt-10 border-t border-mist pt-8">
          {ready ? (
            <div className="mb-6 flex items-baseline justify-between gap-6 lg:hidden">
              <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                Total
              </p>
              <p className="text-[1.5rem] tabular-nums">
                {formatPrice(subtotal + deliveryCost(option, subtotal))}
              </p>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={placing}
            className="w-full rounded-control bg-charcoal px-6 py-4 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90 disabled:opacity-60 sm:w-auto sm:px-10"
          >
            {placing ? "Placing the order" : "Place the order"}
          </button>
          <p className="mt-4 max-w-[36rem] text-[0.8125rem] leading-[1.6] text-charcoal/55">
            {checkoutNotes.demo}
          </p>
        </div>
      </form>

      <aside className="bg-paper">
        <OrderSummary option={option} />
      </aside>
    </div>
  );
}
