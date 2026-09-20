import type { Product } from "@/content/products";

export type ProductOption = {
  id: string;
  label: string;
  values: string[];
  note?: string;
  priceFactor?: Record<string, number>;
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
        priceFactor: { "1 dozen": 1, "3 dozen": 3, "6 dozen": 6 },
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

export function optionPriceFactor(
  product: Product,
  chosen?: Record<string, string>,
) {
  if (!chosen) return 1;

  return productOptions(product).reduce((factor, option) => {
    const value = chosen[option.id];
    return factor * (option.priceFactor?.[value] ?? 1);
  }, 1);
}
