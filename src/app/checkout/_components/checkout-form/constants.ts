export const field =
  "w-full rounded-control border border-charcoal/20 bg-white px-4 py-3.5 text-[1rem] text-charcoal placeholder:text-charcoal/35 focus:border-charcoal";

export const label = "block text-[0.6875rem] uppercase tracking-[0.16em] text-olive";

export type CheckoutField = {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  inputMode?: "numeric";
  maxLength?: number;
  placeholder?: string;
  /** takes both columns of the grid rather than one */
  wide?: boolean;
  /** anything this one field needs on top of the shared shape */
  className?: string;
};

/** an email for the order, a number for the call before anything is cut */
export const contactFields: CheckoutField[] = [
  {
    id: "checkout-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
    wide: true,
  },
  {
    id: "checkout-phone",
    name: "phone",
    label: "Telephone",
    type: "tel",
    autoComplete: "tel",
    required: true,
  },
  {
    id: "checkout-name",
    name: "name",
    label: "Name",
    autoComplete: "name",
    required: true,
  },
];

export const addressFields: CheckoutField[] = [
  {
    id: "checkout-address",
    name: "address",
    label: "Address",
    autoComplete: "address-line1",
    required: true,
    wide: true,
  },
  {
    id: "checkout-address-2",
    name: "address2",
    label: "Second line, if there is one",
    autoComplete: "address-line2",
    wide: true,
  },
  {
    id: "checkout-town",
    name: "town",
    label: "Town",
    autoComplete: "address-level2",
    required: true,
  },
  {
    id: "checkout-postcode",
    name: "postcode",
    label: "Postcode",
    autoComplete: "postal-code",
    required: true,
    className: "uppercase",
  },
];

/** where the shop actually posts to, quoted at the checkout */
export const countries = [
  "United Kingdom",
  "Ireland",
  "France",
  "Germany",
  "Netherlands",
  "Sweden",
];

export const cardFields: CheckoutField[] = [
  {
    id: "checkout-card",
    name: "card",
    label: "Card number",
    autoComplete: "cc-number",
    required: true,
    inputMode: "numeric",
    maxLength: 19,
    placeholder: "0000 0000 0000 0000",
    wide: true,
    className: "tabular-nums",
  },
  {
    id: "checkout-card-name",
    name: "cardName",
    label: "Name on the card",
    autoComplete: "cc-name",
    required: true,
    wide: true,
  },
  {
    id: "checkout-expiry",
    name: "expiry",
    label: "Expires",
    autoComplete: "cc-exp",
    required: true,
    inputMode: "numeric",
    maxLength: 7,
    placeholder: "MM / YY",
    className: "tabular-nums",
  },
  {
    id: "checkout-cvc",
    name: "cvc",
    label: "Security code",
    autoComplete: "cc-csc",
    required: true,
    inputMode: "numeric",
    maxLength: 4,
    className: "tabular-nums",
  },
];
