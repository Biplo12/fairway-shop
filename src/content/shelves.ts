import type { Category } from "@/content/products";

/**
 * One frame per shelf, none of them reused anywhere else on the site.
 * Files are named for what is in them, so replacing a frame means a new path
 * and no browser can serve the old one from cache.
 *
 * `focus` is for the narrow end. A phone shows roughly the middle quarter of
 * a 3.05:1 frame, so anything whose subject does not sit dead centre needs
 * the crop nudged onto it.
 */
export type Shelf = {
  image: string;
  alt: string;
  body: string;
  /** where the crop holds when the band is narrower than the frame */
  focus?: string;
};

export const shelves: Partial<Record<Category, Shelf>> & { all: Shelf } = {
  all: {
    image: "/images/shop/driver-and-iron.jpg",
    alt: "A driver and an iron lying on cut fairway grass",
    body: "Twelve brands, chosen line by line. If it is on the rack it earned the space, and anything marked fit first is worth putting on the monitor before you buy it.",
  },
  clubs: {
    image: "/images/shop/clubs-at-the-bag.jpg",
    alt: "A driver and a set of irons lying on the grass beside a bag",
    body: "Drivers, irons, wedges and putters from the makers worth carrying. Hit two before you choose one. Most players guess wrong between them.",
  },
  balls: {
    image: "/images/shop/ball-at-the-hole.jpg",
    alt: "A golf ball resting on the lip of the hole beside the flagstick",
    focus: "object-[52%_center]",
    body: "The only piece of equipment you use on every shot, and the gap between models is wider than most players expect. Come in with a sleeve of each.",
  },
  bags: {
    image: "/images/shop/three-stand-bags.jpg",
    alt: "Three stand bags with their legs out on a fairway",
    focus: "object-[45%_center]",
    body: "Stand bags and cart bags, weighed on the same scale, so you can compare what you will actually carry for four hours.",
  },
  gloves: {
    image: "/images/shop/glove-going-on.jpg",
    alt: "A golfer pulling a white leather glove onto their hand",
    focus: "object-[52%_center]",
    body: "Cabretta leather wears out. That is the point of it. Buy the size that feels a shade tight on the first hole.",
  },
  accessories: {
    image: "/images/shop/what-hangs-off-the-bag.jpg",
    alt: "A glove and a towel clipped to the outside of a bag",
    body: "Towels, tools and the small things that decide whether your grooves are clean on the fourteenth. None of it is exciting and all of it matters.",
  },
  headwear: {
    image: "/images/shop/caps-on-the-links.jpg",
    alt: "Two golfers in caps and coats standing on a links fairway",
    focus: "object-[44%_center]",
    body: "Caps and visors, vented where it matters. Nothing here carries our name, because we did not make any of it.",
  },
};
