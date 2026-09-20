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
      image: "/images/product/clubs-from-above.jpg",
      alt: "A driver and irons laid out on cut grass, seen from above",
    },
    note: {
      image: "/images/product/iron-in-hand.jpg",
      alt: "An iron held up against a black studio background",
    },
  },
  balls: {
    band: {
      image: "/images/product/ball-on-fairway.jpg",
      alt: "A single golf ball sitting up on a mown fairway",
    },
    note: {
      image: "/images/product/reading-the-putt.jpg",
      alt: "A golfer over a putt on a green, flagstick in the hole",
    },
  },
  bags: {
    band: {
      image: "/images/product/bag-on-the-fairway.jpg",
      alt: "A bag standing alone on an empty fairway in morning haze",
    },
    note: {
      image: "/images/product/irons-in-the-bag.jpg",
      alt: "Irons standing in a bag at the end of a range mat",
    },
  },
  gloves: {
    band: {
      image: "/images/product/hands-on-the-grip.jpg",
      alt: "Two hands set on a grip, the top one in a white glove",
    },
    note: {
      image: "/images/product/glove-on-the-grip.jpg",
      alt: "A gloved hand closed around a grip, lit against black",
    },
  },
  headwear: {
    band: {
      image: "/images/product/swing-against-the-sky.jpg",
      alt: "A golfer in a cap at the finish of a swing against open sky",
    },
    note: {
      image: "/images/product/mid-swing.jpg",
      alt: "A golfer at the top of the backswing seen from below",
    },
  },
  accessories: {
    band: {
      image: "/images/product/clubs-from-above.jpg",
      alt: "A driver and irons laid out on cut grass, seen from above",
    },
    note: {
      image: "/images/product/iron-in-hand.jpg",
      alt: "An iron held up against a black studio background",
    },
  },
};
