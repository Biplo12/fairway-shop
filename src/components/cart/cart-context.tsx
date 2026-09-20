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

const STORAGE_KEY = "fairway.bag";

type Line = { slug: string; quantity: number };

export type BagLine = { product: Product; quantity: number };

type Bag = {
  lines: BagLine[];
  count: number;
  subtotal: number;
  open: boolean;
  /** true once the saved bag has been read, so the count never flashes */
  ready: boolean;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  /** emptied when an order is placed, not when a customer changes their mind */
  clear: () => void;
  setOpen: (open: boolean) => void;
};

const BagContext = createContext<Bag | null>(null);

/** localStorage is the only store. The checkout in front of it takes an order
    as far as a confirmation and no further: there is no till behind this. */
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
    // a private window, or storage turned off. The bag still works for this visit.
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // Read after the first paint, never during render, so the server and the
  // first client pass agree on an empty bag and hydration stays quiet. The
  // badge shows nothing rather than a zero until this lands.
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

  const add = useCallback((slug: string, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (existing) {
        return current.map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.min(line.quantity + quantity, 99) }
            : line,
        );
      }
      return [...current, { slug, quantity }];
    });
    setOpen(true);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((line) => line.slug !== slug)
        : current.map((line) =>
            line.slug === slug
              ? { ...line, quantity: Math.min(quantity, 99) }
              : line,
          ),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<Bag>(() => {
    const resolved = lines.flatMap((line) => {
      const product = findProduct(line.slug);
      return product ? [{ product, quantity: line.quantity }] : [];
    });

    return {
      lines: resolved,
      count: resolved.reduce((total, line) => total + line.quantity, 0),
      subtotal: resolved.reduce(
        (total, line) => total + line.product.price * line.quantity,
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
