"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { findProduct, type Product } from "@/content/products";
import { optionPriceFactor } from "@/content/product-options";

const STORAGE_KEY = "fairway.bag";

export type Chosen = Record<string, string>;

type Line = { slug: string; quantity: number; options?: Chosen };

export type BagLine = {
  key: string;
  product: Product;
  quantity: number;
  options?: Chosen;
  unitPrice: number;
};

type Bag = {
  lines: BagLine[];
  count: number;
  subtotal: number;
  open: boolean;
  ready: boolean;
  add: (slug: string, quantity?: number, options?: Chosen) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
};

const BagContext = createContext<Bag | null>(null);

function lineKey(slug: string, options?: Chosen) {
  const entries = Object.entries(options ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  return entries.length
    ? `${slug}|${entries.map(([id, value]) => `${id}:${value}`).join("|")}`
    : slug;
}

function read(): Line[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line): line is Line =>
        typeof line === "object" &&
        line !== null &&
        typeof (line as Line).slug === "string" &&
        typeof (line as Line).quantity === "number",
    );
  } catch {
    return [];
  }
}

function write(lines: Line[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLines(read());
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (ready) write(lines);
  }, [lines, ready]);

  const add = useCallback((slug: string, quantity = 1, options?: Chosen) => {
    const key = lineKey(slug, options);
    setLines((current) => {
      const existing = current.find(
        (line) => lineKey(line.slug, line.options) === key,
      );
      if (existing) {
        return current.map((line) =>
          lineKey(line.slug, line.options) === key
            ? { ...line, quantity: Math.min(line.quantity + quantity, 99) }
            : line,
        );
      }
      return [...current, { slug, quantity, options }];
    });
    setOpen(true);
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((line) => lineKey(line.slug, line.options) !== key)
        : current.map((line) =>
            lineKey(line.slug, line.options) === key
              ? { ...line, quantity: Math.min(quantity, 99) }
              : line,
          ),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setLines((current) =>
      current.filter((line) => lineKey(line.slug, line.options) !== key),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<Bag>(() => {
    const resolved = lines.flatMap((line) => {
      const product = findProduct(line.slug);
      return product
        ? [
            {
              key: lineKey(line.slug, line.options),
              product,
              quantity: line.quantity,
              options: line.options,
              unitPrice:
                product.price * optionPriceFactor(product, line.options),
            },
          ]
        : [];
    });

    return {
      lines: resolved,
      count: resolved.reduce((total, line) => total + line.quantity, 0),
      subtotal: resolved.reduce(
        (total, line) => total + line.unitPrice * line.quantity,
        0,
      ),
      open,
      ready,
      add,
      setQuantity,
      remove,
      clear,
      setOpen,
    };
  }, [lines, open, ready, add, setQuantity, remove, clear]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const bag = useContext(BagContext);
  if (!bag) throw new Error("useBag must be used inside CartProvider");
  return bag;
}
