import type { Metadata } from "next";

import { CheckoutPage } from "@/components/checkout/checkout-page";
import { CheckoutShell } from "@/components/checkout/checkout-shell";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Delivery, collection from the shop in St. Andrews, and payment. A fictional shop, built as a design project.",
  robots: { index: false },
};

export default function Checkout() {
  return (
    <CheckoutShell back="/bag" backLabel="Back to the bag">
      <CheckoutPage />
    </CheckoutShell>
  );
}
