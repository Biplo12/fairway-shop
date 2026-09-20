import type { Metadata } from "next";

import { ShopPage } from "@/components/shop/shop-page";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Every brand FAIRWAY stocks, filtered by category or by maker. Clubs, balls, bags, gloves and headwear, fitted to the way you play.",
};

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string; type?: string; page?: string }>;
}) {
  const { brand, type, page } = await searchParams;
  return <ShopPage brand={brand} type={type} page={Number(page) || 1} />;
}
