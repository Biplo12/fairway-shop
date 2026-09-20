import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { CartProvider } from "@/components/cart/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { cn } from "@/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  /** so the generated og:image and canonical urls come out absolute */
  metadataBase: new URL(site.url),
  title: {
    default: "FAIRWAY. Golf equipment, fitted properly",
    template: "%s | FAIRWAY",
  },
  description:
    "Titleist, TaylorMade, Callaway, Ping and Mizuno, fitted to the way you play. A specialist golf shop near St. Andrews since 1987.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(inter.variable, instrumentSerif.variable)}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:rounded-control focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-offwhite"
        >
          Skip to content
        </a>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
