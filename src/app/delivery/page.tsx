import type { Metadata } from "next";

import { InfoPage } from "@/components/layout/info-page";
import { deliveryOptions } from "@/content/checkout";
import { formatPrice } from "@/content/products";
import { deliverySections } from "./constants";

export const metadata: Metadata = {
  title: "Delivery and returns",
  description:
    "How an order leaves the shop, what it costs, how long a custom build takes and what happens when something comes back.",
};

export default function Delivery() {
  return (
    <InfoPage
      label="Delivery and returns"
      heading="How it leaves the shop, and how it comes back"
      intro="Stock lines go out the same day if they are on the rack by two. Anything built to your specs takes as long as it takes, and we would rather tell you four weeks and be early than tell you ten days and ring you with an excuse."
      sections={deliverySections}
      footnote="FAIRWAY is a fictional shop, built as a design project. Nothing ordered here is dispatched, and no money changes hands."
      cta={{ href: "/shop", label: "Back to the rack" }}
    >
      <div className="mt-10 w-full self-start overflow-hidden rounded-card bg-paper lg:mt-0">
        <dl>
          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-charcoal/12 px-6 py-5 first:border-t-0 md:px-8"
            >
              <dt className="text-[1.0625rem]">
                {option.name}
                <span className="mt-1 block text-[0.875rem] leading-[1.5] text-charcoal/65">
                  {option.note}
                </span>
              </dt>
              <dd className="text-[1.0625rem] tabular-nums">
                {option.price === 0 ? "Free" : formatPrice(option.price)}
                {option.freeOver !== undefined ? (
                  <span className="ml-3 text-[0.75rem] uppercase tracking-[0.08em] text-olive">
                    Free over {formatPrice(option.freeOver)}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </InfoPage>
  );
}
