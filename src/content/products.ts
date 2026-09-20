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
  /** on the homepage grid, four at a time */
  featured?: boolean;
};

/**
 * Photography is the manufacturers' own studio work, cut to one tile by
 * scripts/build-product-shots.mjs. Anything listed here needs a real packshot
 * behind it, so the rack is the products we can show properly.
 */
export const products: Product[] = [
  {
    slug: "taylormade-p790-irons",
    brand: "TaylorMade",
    model: "P790 Irons",
    category: "clubs",
    subcategory: "irons",
    price: 149900,
    statement: "Forged face, hollow body, distance without the look.",
    image: "/images/products/taylormade-p790-irons.jpg",
    alt: "A TaylorMade P790 seven iron at address, on white",
    inStock: true,
    fittingRecommended: true,
    detail: "7 clubs, 4 to PW",
    featured: true,
  },
  {
    slug: "titleist-pro-v1",
    brand: "Titleist",
    model: "Pro V1",
    category: "balls",
    price: 5200,
    statement: "The ball most of the field plays, for reasons.",
    image: "/images/products/titleist-pro-v1.jpg",
    alt: "A box of a dozen Titleist Pro V1 golf balls",
    inStock: true,
    detail: "Dozen",
    featured: true,
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
    featured: true,
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
    featured: true,
  },
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
    slug: "mizuno-jpx925-forged",
    brand: "Mizuno",
    model: "JPX925 Forged",
    category: "clubs",
    subcategory: "irons",
    price: 119900,
    statement: "Grain flow forged. You feel the strike before you see it.",
    image: "/images/products/mizuno-jpx925-forged.jpg",
    alt: "A Mizuno JPX925 Forged seven iron, cavity side, on white",
    inStock: true,
    fittingRecommended: true,
    detail: "7 clubs, 4 to PW",
  },
  {
    slug: "callaway-chrome-soft",
    brand: "Callaway",
    model: "Chrome Soft",
    category: "balls",
    price: 4800,
    statement: "Softer off the face than the Pro V1. Some players never go back.",
    image: "/images/products/callaway-chrome-soft.jpg",
    alt: "A box of a dozen Callaway Chrome Soft golf balls",
    inStock: true,
    detail: "Dozen",
  },
  {
    slug: "ping-tour-glove",
    brand: "Ping",
    model: "Tour Glove",
    category: "gloves",
    price: 2400,
    statement: "Cabretta leather. Wears out because it fits, not because it is cheap.",
    image: "/images/products/ping-tour-glove.jpg",
    alt: "A white Ping Tour cabretta leather golf glove, on white",
    inStock: true,
    detail: "Sizes S to XL",
  },
  {
    slug: "ping-tour-vented-delta",
    brand: "Ping",
    model: "Tour Vented Delta",
    category: "headwear",
    price: 3200,
    statement: "Laser cut vents on the crown. The one the staff wear in July.",
    image: "/images/products/ping-tour-vented-delta.jpg",
    alt: "A black Ping Tour Vented Delta cap, on white",
    inStock: true,
    detail: "One size, snapback",
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
];

/** the four on the homepage grid */
export const featuredProducts = products.filter((product) => product.featured);

const categoryNames: Record<Category, string> = {
  clubs: "Clubs",
  balls: "Balls",
  bags: "Bags",
  gloves: "Gloves",
  headwear: "Headwear",
  accessories: "Accessories",
};

/**
 * Derived from the rack rather than written out, so the shop can never
 * advertise a shelf with nothing on it.
 */
export const shopCategories = (Object.keys(categoryNames) as Category[])
  .map((slug) => ({
    slug,
    name: categoryNames[slug],
    count: products.filter((product) => product.category === slug).length,
  }))
  .filter((category) => category.count > 0);

export const shopBrands = [...new Set(products.map((product) => product.brand))]
  .sort((a, b) => a.localeCompare(b))
  .map((name) => ({
    name,
    count: products.filter((product) => product.brand === name).length,
  }));

export function isCategory(value: string): value is Category {
  return value in categoryNames;
}

export function categoryName(slug: Category) {
  return categoryNames[slug];
}

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: pence % 100 === 0 ? 0 : 2,
  }).format(pence / 100);
}
