/**
 * What the counter would say while it wraps the order: how it travels, how it
 * is paid for, and the two things that are true of this shop rather than of
 * every shop, custom builds take weeks and a fitting comes off the price.
 *
 * Prices are pence, the way the catalogue holds them, so nothing here does
 * floating point money either.
 */

export type DeliveryOption = {
  id: string;
  name: string;
  note: string;
  price: number;
  /** order value above which the carriage is not charged */
  freeOver?: number;
};

export const deliveryOptions: DeliveryOption[] = [
  {
    id: "standard",
    name: "Standard delivery",
    note: "Three to five working days, tracked.",
    price: 495,
    freeOver: 7500,
  },
  {
    id: "next-day",
    name: "Next working day",
    note: "Ordered before 14.00, signed for on arrival.",
    price: 995,
  },
  {
    id: "collect",
    name: "Collect from the shop",
    note: "12 Links Road, St. Andrews. We call when it is on the bench.",
    price: 0,
  },
];

export type PaymentOption = {
  id: string;
  name: string;
  note: string;
};

export const paymentOptions: PaymentOption[] = [
  {
    id: "card",
    name: "Card",
    note: "Visa, Mastercard and Amex.",
  },
  {
    id: "counter",
    name: "Pay at the counter",
    note: "Collection orders only. Nothing is taken now.",
  },
];

/** carriage for an order, with the free threshold applied */
export function deliveryCost(option: DeliveryOption, subtotal: number) {
  if (option.freeOver !== undefined && subtotal >= option.freeOver) return 0;
  return option.price;
}

/**
 * A reference in the shop's own format: the year, then six characters from the
 * moment the order was placed. Generated in the browser on submit, so nothing
 * about it has to agree with the server.
 */
export function orderReference(now = new Date()) {
  const stamp = now.getTime().toString(36).toUpperCase().slice(-5);
  return `FW-${now.getFullYear()}-${stamp}`;
}

export const checkoutNotes = {
  vat: "All prices include VAT at 20 percent.",
  demo: "A fictional shop, built as a design project. No payment is taken and nothing leaves this page.",
  custom:
    "There is a club in this order worth fitting first. We will call before anything is cut, and the session fee comes off the price.",
  free: "Standard delivery is free over £75.",
};
