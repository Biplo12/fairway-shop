import type { ProductOption } from "@/content/product-options";

export type ProductBuyProps = {
  slug: string;
  model: string;
  price: number;
  detail: string;
  inStock: boolean;
  options: ProductOption[];
};
