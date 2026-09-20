import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ShopPage } from "../_components/shop-page";
import { categoryName, isCategory, shopCategories } from "@/content/products";

export function generateStaticParams() {
  return shopCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  return { title: categoryName(category) };
}

export default async function ShopCategory({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    brand?: string;
    type?: string;
    price?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const { brand, type, price, sort, page } = await searchParams;
  return (
    <ShopPage
      category={category}
      brand={brand}
      type={type}
      price={price}
      sort={sort}
      page={Number(page) || 1}
    />
  );
}
