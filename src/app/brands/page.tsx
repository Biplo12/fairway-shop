import type { Metadata } from "next";

import { BrandsIndex } from "./_components/brands-index";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "The twelve makers FAIRWAY stocks and fits: Titleist, TaylorMade, Callaway, Ping, Mizuno, Srixon, Vokey, Scotty Cameron, Odyssey, FootJoy, Cleveland and Sun Mountain.",
};

export default function Brands() {
  return <BrandsIndex />;
}
