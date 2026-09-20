import type { Tone } from "./types";

export const tones: Record<Tone, { pill: string; badge: string }> = {
  light: { pill: "bg-white text-charcoal", badge: "bg-charcoal text-white" },
  dark: { pill: "bg-offwhite text-charcoal", badge: "bg-charcoal text-offwhite" },
};
