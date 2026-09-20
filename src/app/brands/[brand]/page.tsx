import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandPage } from "@/components/brands/brand-page";
import { brands } from "@/content/brands";
import { brandPages } from "@/content/brand-pages";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = brands.find((entry) => entry.slug === slug);
  const page = brandPages[slug];
  if (!brand || !page) return {};

  return {
    title: brand.name,
    description: `${brand.name} at FAIRWAY: ${page.statement} ${brand.note}, fitted in the studio near St. Andrews.`,
  };
}

export default async function Brand({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = brands.find((entry) => entry.slug === slug);
  // a brand with no page written for it is not a brand this shop stocks
  if (!brand || !brandPages[slug]) notFound();

  return <BrandPage brand={brand} />;
}
