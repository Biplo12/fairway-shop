import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductPage } from "@/components/product/product-page";
import { productPage } from "@/content/product-pages";
import { findProduct, products } from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};

  return {
    title: `${product.brand} ${product.model}`,
    description: productPage(product).description,
  };
}

export default async function Product({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = findProduct(slug);

  if (!product || product.category !== category) notFound();

  return <ProductPage product={product} detail={productPage(product)} />;
}
