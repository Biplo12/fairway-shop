import type { ReactNode } from "react";

export type InfoSection = {
  title: string;
  body: string;
};

export type InfoPageProps = {
  label: string;
  heading: string;
  intro: string;
  sections: InfoSection[];
  children?: ReactNode;
  footnote?: string;
  cta?: { href: string; label: string };
};
