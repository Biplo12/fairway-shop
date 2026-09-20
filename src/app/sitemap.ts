import type { MetadataRoute } from "next";

import { brands } from "@/content/brands";
import { sessions } from "@/content/fitting";
import { products, shopCategories } from "@/content/products";
import { site } from "@/content/site";

/**
 * Every address a customer can reach, built from the same lists the shop
 * renders from, so a product added to the catalogue is in the sitemap without
 * anybody remembering to put it there.
 *
 * The bag and the checkout are left out on purpose: they are a state, not a
 * page, and there is nothing at either address worth indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;
  const lastModified = new Date();

  const fixed: MetadataRoute.Sitemap = [
    { url: url("/"), priority: 1, changeFrequency: "weekly" },
    { url: url("/shop"), priority: 0.9, changeFrequency: "weekly" },
    { url: url("/brands"), priority: 0.8, changeFrequency: "monthly" },
    { url: url("/fitting"), priority: 0.9, changeFrequency: "monthly" },
    { url: url("/about"), priority: 0.6, changeFrequency: "yearly" },
    { url: url("/contact"), priority: 0.6, changeFrequency: "yearly" },
    { url: url("/search"), priority: 0.3, changeFrequency: "yearly" },
    { url: url("/delivery"), priority: 0.4, changeFrequency: "yearly" },
    { url: url("/terms"), priority: 0.2, changeFrequency: "yearly" },
    { url: url("/privacy"), priority: 0.2, changeFrequency: "yearly" },
  ];

  const shelves: MetadataRoute.Sitemap = shopCategories.map((category) => ({
    url: url(`/shop/${category.slug}`),
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  const makers: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: url(`/brands/${brand.slug}`),
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const bookings: MetadataRoute.Sitemap = sessions.map((session) => ({
    url: url(`/fitting/${session.slug}`),
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const rack: MetadataRoute.Sitemap = products.map((product) => ({
    url: url(`/shop/${product.category}/${product.slug}`),
    priority: product.featured ? 0.7 : 0.5,
    changeFrequency: "weekly",
  }));

  return [...fixed, ...shelves, ...makers, ...bookings, ...rack].map(
    (entry) => ({ ...entry, lastModified }),
  );
}
