import type { Metadata } from "next";

import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About the shop",
  description:
    "FAIRWAY opened in 1987 as a fitting bench behind a pro shop near St. Andrews. Twelve brands, one fitting bay, and staff who will talk you out of the wrong club.",
};

export default function About() {
  return <AboutPage />;
}
