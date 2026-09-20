import type { Metadata } from "next";

import { InfoPage } from "@/components/layout/info-page";
import { termsSections } from "./constants";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms an order, a fitting session and a custom build are sold under at FAIRWAY, written short enough to read.",
};

export default function Terms() {
  return (
    <InfoPage
      label="Terms"
      heading="What you are agreeing to, in plain language"
      intro="Short enough to read, which is the only kind of terms worth writing. If a clause here reads as though it exists to protect us from you, tell us, because that is not what it is for."
      sections={termsSections}
      footnote="FAIRWAY is a fictional shop, built as a design project. Nothing on this site is a real contract, no order is dispatched and no payment is taken."
      cta={{ href: "/delivery", label: "Delivery and returns" }}
    />
  );
}
