import type { Metadata } from "next";

import { BagPage } from "@/components/cart/bag-page";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Your bag",
  description:
    "What is in your bag at FAIRWAY, with delivery, collection and the fitting worth booking before anything is cut.",
};

export default function Bag() {
  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="bag" />
          <BagPage />
        </div>
      </main>
      <Footer />
    </>
  );
}
