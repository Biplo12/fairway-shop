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
      image: "/images/product/clubs-against-the-bag.jpg",
      alt: "A driver and irons leaning against a stand bag on cut grass",
    },
  },
  gloves: {
    band: {
      image: "/images/product/glove-carrying-clubs.jpg",
      alt: "A gloved hand holding clubs over a shoulder on the walk in",
    },
    note: {
      image: "/images/product/pulling-the-glove-on.jpg",
      alt: "A golfer pulling a white leather glove onto their hand",
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
      image: "/images/product/a-cap-a-glove-and-a-ball.jpg",
      alt: "A cap, a glove and two balls lying on the grass beside a driver",
    },
    note: {
      image: "/images/product/driver-glove-and-balls.jpg",
      alt: "A driver head, a glove and two balls resting on cut grass",
    },
  },
};

/**
 * Clubs is six different things. A driver page has no business showing irons,
 * so anything on the clubs shelf takes its frames from its own subcategory and
 * only falls back to the shelf when there is none.
 */
export const clubFrames: Record<string, { band: Frame; note: Frame }> = {
  drivers: {
    band: {
      image: "/images/product/ball-on-a-tee.jpg",
      alt: "A ball teed up beside a driver face in autumn light",
    },
    note: {
      image: "/images/product/driver-and-balls.jpg",
      alt: "A driver head, two balls and a cap resting on the grass",
    },
  },
  "fairway woods": {
    band: {
      image: "/images/product/a-wood-and-an-iron.jpg",
      alt: "A fairway wood and an iron lying together on cut grass",
    },
    note: {
      image: "/images/product/a-basket-at-the-range.jpg",
      alt: "A basket of range balls beside a club on the mat",
    },
  },
  hybrids: {
    band: {
      image: "/images/product/an-iron-on-the-turf.jpg",
      alt: "Balls and an iron head sitting on the turf in low sun",
    },
    note: {
      image: "/images/product/two-clubs-on-the-turf.jpg",
      alt: "Two clubs lying together on cut grass",
    },
  },
  wedges: {
    band: {
      image: "/images/product/sand-at-dusk.jpg",
      alt: "A golfer taking sand out of a bunker at dusk",
    },
    note: {
      image: "/images/product/wedge-behind-the-ball.jpg",
      alt: "A wedge set behind a ball on close cut grass",
    },
  },
  putters: {
    band: {
      image: "/images/product/on-the-putting-green.jpg",
      alt: "A putter and ball on the green beside a golfer",
    },
    note: {
      image: "/images/product/blade-behind-the-ball.jpg",
      alt: "A blade putter set behind a ball on the green",
    },
  },
};
