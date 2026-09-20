import type { Align, Size } from "./types";

export const gradients: Record<Align, string> = {
  middle: "bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent",
  bottom: "bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent",
};

export const blocks: Record<Align, string> = {
  middle: "items-center",
  bottom: "items-end",
};

export const heights: Record<Size, string> = {
  tall: "min-h-[26rem] md:aspect-[3.2/1] md:min-h-[24rem]",
  short: "min-h-[24rem] md:aspect-[3.6/1] md:min-h-[24rem]",
};

export const headings: Record<Size, string> = {
  tall: "text-[clamp(2.25rem,5vw,4.5rem)]",
  short: "text-[clamp(1.875rem,3.2vw,3rem)]",
};
