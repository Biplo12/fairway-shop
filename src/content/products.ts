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

export const products: Product[] = [
  {
    slug: "srixon-zx7-mk-ii-irons",
    brand: "Srixon",
    model: "ZX7 Mk II Irons",
    category: "clubs",
    subcategory: "irons",
    price: 109900,
    statement: "Forged tour blade with a touch of forgiveness.",
    image: "/images/products/irons.jpg",
    alt: "A set of irons lit against a dark background",
    inStock: true,
    fittingRecommended: true,
    detail: "7 clubs, 4 to PW",
  },
  {
    slug: "titleist-pro-v1",
    brand: "Titleist",
    model: "Pro V1",
    category: "balls",
    price: 5200,
    statement: "The ball most of the field plays, for reasons.",
    image: "/images/products/balls.jpg",
    alt: "Tour golf balls lit against a dark background",
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
    image: "/images/products/bag.jpg",
    alt: "A stand bag with clubs, lit against a dark background",
    inStock: true,
    detail: "2.0 kg carry weight",
  },
  {
    slug: "footjoy-stasof",
    brand: "FootJoy",
    model: "StaSof Glove",
    category: "gloves",
    price: 2600,
    statement: "Cabretta leather. The one the tour wears out fastest.",
    image: "/images/products/glove.jpg",
    alt: "A gloved hand resting on a club head",
    inStock: false,
    detail: "Sizes S to XL",
  },
];

export function formatPrice(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: pence % 100 === 0 ? 0 : 2,
  }).format(pence / 100);
}
