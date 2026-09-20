import type { Category } from "@/content/products";

export type ShopPageProps = {
  category?: Category;
  brand?: string;
  type?: string;
  price?: string;
  sort?: string;
  page?: number;
};
