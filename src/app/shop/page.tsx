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
  searchParams: Promise<{
    brand?: string;
    type?: string;
    price?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const { brand, type, price, sort, page } = await searchParams;
  return (
    <ShopPage
      brand={brand}
      type={type}
      price={price}
      sort={sort}
      page={Number(page) || 1}
    />
  );
}
