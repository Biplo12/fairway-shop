import type { Product } from "@/content/products";

/**
 * What a customer has to choose before a club or a glove is actually theirs.
 *
 * Nothing here is a claim about a model. Hand, flex and shaft material are
 * what any shop offers on any club, and where a specific set of numbers is
 * quoted it is read off the product's own `detail` line rather than invented.
 * Section 7: never attribute a specification to a maker that the maker did
 * not publish.
 */
export type ProductOption = {
  id: string;
  label: string;
  values: string[];
  /** the fitter's line under the control, where there is one worth saying */
  note?: string;
};

const HAND: ProductOption = {
  id: "hand",
  label: "Hand",
  values: ["Right", "Left"],
};

const FLEX: ProductOption = {
  id: "flex",
  label: "Shaft flex",
  values: ["Regular", "Stiff", "Extra stiff"],
  note: "Set on the monitor, not off a chart.",
};

/** pulls a list of numbers out of a detail line, e.g. "9, 10.5 and 12 degrees" */
function numbersIn(detail: string, unit: string) {
  const match = detail.match(/^([\d.,\s]+(?:and)?[\d.\s]*)\s*(degrees|inches)/i);
  if (!match) return null;
  const values = match[1]
    .split(/,|and/)
    .map((part) => part.trim())
    .filter(Boolean);
  return values.length > 1 ? values.map((value) => `${value}${unit}`) : null;
}

function sizesIn(detail: string) {
  if (/junior/i.test(detail)) return ["Junior S", "Junior M", "Junior L"];
  if (/s to xl/i.test(detail)) return ["S", "M", "ML", "L", "XL"];
  if (/s\/m and l\/xl/i.test(detail)) return ["S/M", "L/XL"];
  return null;
}

export function productOptions(product: Product): ProductOption[] {
  const { category, subcategory, detail } = product;

  if (category === "gloves") {
    const sizes = sizesIn(detail) ?? ["S", "M", "ML", "L", "XL"];
    return [
      { id: "size", label: "Size", values: sizes, note: "Buy it a shade tight. Leather gives." },
      { id: "hand", label: "Worn on", values: ["Left hand", "Right hand"] },
    ];
  }

  if (category === "headwear") {
    const sizes = sizesIn(detail);
    return sizes ? [{ id: "size", label: "Size", values: sizes }] : [];
  }

  if (category === "balls") {
    return [
      {
        id: "quantity",
        label: "Boxes",
        values: ["1 dozen", "3 dozen", "6 dozen"],
        note: "Three dozen is a season for most people.",
      },
    ];
  }

  if (category !== "clubs") return [];

  const options: ProductOption[] = [];

  if (subcategory === "putters") {
    const lengths = numbersIn(detail, " in") ?? ["33 in", "34 in", "35 in"];
    options.push({
      id: "length",
      label: "Length",
      values: lengths,
      note: "The most commonly wrong number in golf. Get measured.",
    });
    options.push(HAND);
    return options;
  }

  const lofts = numbersIn(detail, "°");
  if (lofts) options.push({ id: "loft", label: "Loft", values: lofts });

  if (subcategory === "irons") {
    options.push({
      id: "shaft",
      label: "Shaft",
      values: ["Steel", "Graphite"],
      note: "On most heads the shaft changes more than the head does.",
    });
  }

  options.push(FLEX, HAND);
  return options;
}
