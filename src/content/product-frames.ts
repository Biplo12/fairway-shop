import type { Category } from "@/content/products";

/**
 * Photography for the product page. Its own set: none of these frames appear
 * on the homepage or on a shop shelf, so a customer who walks from the rack
 * into a product never meets the same photograph twice.
 *
 * `band` is the wide statement, cut to 3.05:1. `note` sits in a half width
 * column beside what you need to know, cut to 3:2.
 */
type Frame = { image: string; alt: string };

export const productFrames: Record<Category, { band: Frame; note: Frame }> = {
  clubs: {
    band: {
      image: "/images/product/a-set-on-the-grass.jpg",
      alt: "A driver, irons, a wedge and a putter laid out on cut grass",
    },
    note: {
      image: "/images/product/irons-on-black.jpg",
      alt: "Three irons laid out on black cloth in low studio light",
    },
  },
  balls: {
    band: {
      image: "/images/product/ball-on-fairway.jpg",
      alt: "A single golf ball sitting up on a mown fairway",
    },
    note: {
      image: "/images/product/ball-at-the-lip.jpg",
      alt: "A golf ball at rest on the lip of the hole",
    },
  },
  bags: {
    band: {
      image: "/images/product/bag-on-the-fairway.jpg",
      alt: "A bag standing alone on an empty fairway in morning haze",
    },
    note: {
      image: "/images/product/clubs-in-the-bag.jpg",
      alt: "Woods and irons standing in a bag, lit against black",
    },
  },
  gloves: {
    band: {
      image: "/images/product/glove-carrying-clubs.jpg",
      alt: "A gloved hand holding clubs over a shoulder on the walk in",
    },
    note: {
      image: "/images/product/glove-on-the-grip.jpg",
      alt: "A gloved hand closed around a grip, lit against black",
    },
  },
  headwear: {
    band: {
      image: "/images/product/links-in-october.jpg",
      alt: "Two golfers standing out on an open links in autumn light",
    },
    note: {
      image: "/images/product/cap-over-the-shoulder.jpg",
      alt: "A golfer in a cap with a club over the shoulder, looking back",
    },
  },
  accessories: {
    band: {
      image: "/images/product/a-set-on-the-grass.jpg",
      alt: "A driver, irons, a wedge and a putter laid out on cut grass",
    },
    note: {
      image: "/images/product/irons-on-black.jpg",
      alt: "Three irons laid out on black cloth in low studio light",
    },
  },
};
