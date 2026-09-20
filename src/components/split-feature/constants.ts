import type { Tone } from "./types";

export const tones: Record<Tone, { panel: string; chip: string; body: string }> = {
  light: {
    panel: "bg-white text-charcoal",
    chip: "border-charcoal/40",
    body: "text-charcoal/85",
  },
  dark: {
    panel: "bg-forest text-offwhite",
    chip: "border-offwhite/45",
    body: "text-offwhite/80",
  },
};
