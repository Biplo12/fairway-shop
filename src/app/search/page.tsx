import type { Metadata } from "next";

import { SearchPage } from "./_components/search-page";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search the rack by brand, model or type. Every line FAIRWAY stocks, in one place.",
};

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return <SearchPage query={q} />;
}
