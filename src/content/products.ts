export type Category =
  | "clubs"
  | "balls"
  | "bags"
  | "gloves"
  | "headwear"
  | "accessories";

export type Product = {
  slug: string;
  brand: string;
  model: string;
  category: Category;
  subcategory?: string;
  /** pence, so the page never does floating point money */
  price: number;
  statement: string;
  image: string;
  alt: string;
  inStock: boolean;
  fittingRecommended?: boolean;
  /** the number a fitter would quote about this product */
  detail: string;
};

/**
 * Photography is the manufacturers' own studio work, cut to one tile by
 * scripts/build-product-shots.mjs. Anything listed here needs a real packshot
 * behind it, so the rack is the products we can show properly.
 */
export const products: Product[] = [
  {
    slug: "ping-i230-irons",
    brand: "Ping",
    model: "i230 Irons",
    category: "clubs",
    subcategory: "irons",
    price: 109900,
    statement: "A cavity that looks like a blade the moment you set it down.",
    image: "/images/products/ping-i230-irons.jpg",
    alt: "A Ping i230 seven iron, cavity side, on white",
    inStock: true,
    fittingRecommended: true,
    detail: "7 clubs, 4 to PW",
  },
  {
    slug: "srixon-z-star-xv",
    brand: "Srixon",
    model: "Z-STAR XV",
    category: "balls",
    price: 4500,
    statement: "The firmer of the two Z-Stars. Take it if you spin it too much.",
    image: "/images/products/srixon-z-star-xv.jpg",
    alt: "A box of a dozen Srixon Z-STAR XV golf balls",
    inStock: true,
    detail: "Dozen",
  },
  {
    slug: "ping-hoofer-lite",
    brand: "Ping",
    model: "Hoofer Lite",
    category: "bags",
    price: 23900,
    statement: "Two kilos on the shoulder, four hours on the feet.",
    image: "/images/products/ping-hoofer-lite.jpg",
    alt: "A Ping Hoofer Lite stand bag, legs out, on white",
    inStock: true,
    detail: "2.0 kg carry weight",
  },
  {
    slug: "cleveland-rtx-6-zipcore",
    brand: "Cleveland",
    model: "RTX 6 ZipCore",
    category: "clubs",
    subcategory: "wedges",
    price: 15900,
    statement: "Four grinds off one head. Most players are on the wrong one.",
    image: "/images/products/cleveland-rtx6-zipcore.jpg",
    alt: "A Cleveland RTX 6 ZipCore wedge in tour satin, on white",
    inStock: false,
    fittingRecommended: true,
    detail: "46 to 60 degrees",
  },
];

export function formatPrice(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: pence % 100 === 0 ? 0 : 2,
  }).format(pence / 100);
}
