import type { Metadata } from "next";

import { CheckoutShell } from "../_components/checkout-shell";
import { Confirmation } from "./_components/confirmation";

export const metadata: Metadata = {
  title: "Order placed",
  robots: { index: false },
};

export default async function Confirmed({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; delivery?: string }>;
}) {
  const { order, delivery } = await searchParams;

  return (
    <CheckoutShell back="/shop" backLabel="Back to the rack">
      <Confirmation reference={order} deliveryId={delivery} />
    </CheckoutShell>
  );
}
