import type { Metadata } from "next";

import { InfoPage } from "@/components/layout/info-page";
import { deliveryOptions } from "@/content/checkout";
import { formatPrice } from "@/content/products";

export const metadata: Metadata = {
  title: "Delivery and returns",
  description:
    "How an order leaves the shop, what it costs, how long a custom build takes and what happens when something comes back.",
};

/**
 * Carriage comes off the same list the checkout charges from, so the page and
 * the till can never quote different numbers.
 */
const sections = [
  {
    title: "Custom builds take longer",
    body: "Anything cut, bent or regripped to your specs is two to four weeks, and longer through spring when every maker is behind. We tell you the week at the counter and we ring you if it moves.",
  },
  {
    title: "Collection is free, always",
    body: "Order online, collect at 12 Links Road. We call when it is on the bench rather than when it arrives in the back, so the club is checked before you drive over for it.",
  },
  {
    title: "Thirty days to change your mind",
    body: "Unused, as it left us, in its packaging: refund to the card within five working days of it reaching the shop. Balls and gloves have to be unopened, which is the same rule every shop has and for the same reason.",
  },
  {
    title: "Fitted clubs are yours",
    body: "A club built to your specs cannot go back on the rack, so it cannot be returned unless it is faulty. That is exactly why nothing is ordered in the room and why we tell you to go home and think about it.",
  },
  {
    title: "If something is wrong with it",
    body: "Twelve months on workmanship, and the maker's own warranty on heads and shafts behind that. Bring the club in. We deal with the maker so you do not have to, and we lend you something to play with meanwhile.",
  },
  {
    title: "Outside the UK",
    body: "We ship to Ireland and the EU at cost, quoted at the checkout. Duties and local taxes are the buyer's, and a custom build going abroad is worth a phone call first so the specs are right the first time.",
  },
];

export default function Delivery() {
  return (
    <InfoPage
      label="Delivery and returns"
      heading="How it leaves the shop, and how it comes back"
      intro="Stock lines go out the same day if they are on the rack by two. Anything built to your specs takes as long as it takes, and we would rather tell you four weeks and be early than tell you ten days and ring you with an excuse."
      sections={sections}
      footnote="FAIRWAY is a fictional shop, built as a design project. Nothing ordered here is dispatched, and no money changes hands."
      cta={{ href: "/shop", label: "Back to the rack" }}
    >
      <div className="mt-10 max-w-[44rem] self-start overflow-hidden rounded-card bg-paper lg:mt-0">
        <dl>
          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-charcoal/12 px-6 py-5 first:border-t-0 md:px-8"
            >
              <dt className="text-[1.0625rem]">
                {option.name}
                <span className="mt-1 block text-[0.875rem] leading-[1.5] text-charcoal/60">
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
