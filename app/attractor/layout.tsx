import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Pieter de Jong Attractor | Andrei Beliaev";
const description =
  "A WebGL particle visualization of the Pieter de Jong attractor by Andrei Beliaev.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/attractor/" },
  openGraph: {
    title,
    description,
    url: "/attractor/",
    siteName: "Andrei Beliaev",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function AttractorLayout({ children }: { children: ReactNode }) {
  return children;
}
