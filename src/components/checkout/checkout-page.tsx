"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";

import { useBag } from "@/components/cart/cart-context";
import { OrderSummary } from "@/components/checkout/order-summary";
import { formatPrice } from "@/content/products";
import {
  checkoutNotes,
  deliveryCost,
  deliveryOptions,
  orderReference,
  paymentOptions,
} from "@/content/checkout";

const field =
  "w-full rounded-control border border-charcoal/20 bg-white px-4 py-3.5 text-[1rem] text-charcoal placeholder:text-charcoal/35 focus:border-charcoal focus:outline-none";
const label = "block text-[0.6875rem] uppercase tracking-[0.16em] text-olive";

/** A numbered block, the way the fitting page numbers its steps. */
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

/**
 * One page, four blocks, no wizard. A shop this size does not hide the payment
 * step behind two screens of form, and a customer who wants to see what they
 * are about to spend should not have to go back for it.
 *
 * Nothing is posted anywhere: the order is carried to the confirmation as a
 * reference, and the bag is emptied there rather than here, so a customer who
 * turns back mid checkout still has their clubs.
 */
export function CheckoutPage() {
  const router = useRouter();
  const { lines, count, subtotal, ready } = useBag();

  const [deliveryId, setDeliveryId] = useState(deliveryOptions[0].id);
  const [paymentId, setPaymentId] = useState(paymentOptions[0].id);
  const [placing, setPlacing] = useState(false);

  const option =
    deliveryOptions.find((entry) => entry.id === deliveryId) ??
    deliveryOptions[0];
  const collecting = option.id === "collect";

  // Paying at the counter only means anything if you are coming to the counter.
  // Derived rather than corrected in an effect, so switching delivery cannot
  // leave the form showing a payment method for one render.
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
            <div className="sm:col-span-2">
              <label htmlFor="checkout-email" className={label}>
                Email
              </label>
              <input
                id="checkout-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`${field} mt-2.5`}
              />
            </div>
            <div>
              <label htmlFor="checkout-phone" className={label}>
                Telephone
              </label>
              <input
                id="checkout-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={`${field} mt-2.5`}
              />
            </div>
            <div>
              <label htmlFor="checkout-name" className={label}>
                Name
              </label>
              <input
                id="checkout-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={`${field} mt-2.5`}
              />
            </div>
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
            <div className="sm:col-span-2">
              <label htmlFor="checkout-address" className={label}>
                Address
              </label>
              <input
                id="checkout-address"
                name="address"
                type="text"
                required
                autoComplete="address-line1"
                className={`${field} mt-2.5`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="checkout-address-2" className={label}>
                Second line, if there is one
              </label>
              <input
                id="checkout-address-2"
                name="address2"
                type="text"
                autoComplete="address-line2"
                className={`${field} mt-2.5`}
              />
            </div>
            <div>
              <label htmlFor="checkout-town" className={label}>
                Town
              </label>
              <input
                id="checkout-town"
                name="town"
                type="text"
                required
                autoComplete="address-level2"
                className={`${field} mt-2.5`}
              />
            </div>
            <div>
              <label htmlFor="checkout-postcode" className={label}>
                Postcode
              </label>
              <input
                id="checkout-postcode"
                name="postcode"
                type="text"
                required
                autoComplete="postal-code"
                className={`${field} mt-2.5 uppercase`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="checkout-country" className={label}>
                Country
              </label>
              <select
                id="checkout-country"
                name="country"
                defaultValue="United Kingdom"
                className={`${field} mt-2.5 appearance-none`}
              >
                <option>United Kingdom</option>
                <option>Ireland</option>
                <option>France</option>
                <option>Germany</option>
                <option>Netherlands</option>
                <option>Sweden</option>
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
                    className={`flex cursor-pointer items-start gap-4 rounded-control border px-5 py-4 transition-colors ${
                      chosen
                        ? "border-charcoal bg-paper"
                        : "border-charcoal/20 hover:border-charcoal/45"
                    }`}
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
                    className={`flex items-start gap-4 rounded-control border px-5 py-4 transition-colors ${
                      available
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-45"
                    } ${
                      chosen
                        ? "border-charcoal bg-paper"
                        : "border-charcoal/20 hover:border-charcoal/45"
                    }`}
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
              <div className="sm:col-span-2">
                <label htmlFor="checkout-card" className={label}>
                  Card number
                </label>
                <input
                  id="checkout-card"
                  name="card"
                  type="text"
                  required
                  inputMode="numeric"
                  autoComplete="cc-number"
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                  className={`${field} mt-2.5 tabular-nums`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="checkout-card-name" className={label}>
                  Name on the card
                </label>
                <input
                  id="checkout-card-name"
                  name="cardName"
                  type="text"
                  required
                  autoComplete="cc-name"
                  className={`${field} mt-2.5`}
                />
              </div>
              <div>
                <label htmlFor="checkout-expiry" className={label}>
                  Expires
                </label>
                <input
                  id="checkout-expiry"
                  name="expiry"
                  type="text"
                  required
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  placeholder="MM / YY"
                  maxLength={7}
                  className={`${field} mt-2.5 tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="checkout-cvc" className={label}>
                  Security code
                </label>
                <input
                  id="checkout-cvc"
                  name="cvc"
                  type="text"
                  required
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  maxLength={4}
                  className={`${field} mt-2.5 tabular-nums`}
                />
              </div>
            </div>
          ) : null}
        </Section>

        <div className="mt-10 border-t border-mist pt-8">
          {/* On a phone the order sits under the form, so the number a
              customer is about to agree to comes up to the button. */}
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
