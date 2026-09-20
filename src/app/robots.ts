import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * The bag, the checkout and a search result are a state rather than a page.
 * Nothing at those addresses is worth a crawl, and a search result page in an
 * index is the oldest way to fill one with rubbish.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/bag", "/checkout", "/search?"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
