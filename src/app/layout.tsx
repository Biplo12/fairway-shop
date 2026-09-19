import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "FAIRWAY — Made for the shot. Built for the story.",
    template: "%s — FAIRWAY",
  },
  description:
    "Golf equipment designed around the way golf is actually played. Founded 1987 near St. Andrews, Scotland.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:rounded-control focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-offwhite"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
