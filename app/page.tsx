import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const title = "Andrei Beliaev | Machine Learning";
const description =
  "Machine learning and computer vision engineer at Epivara. Creator of HistoForge, an open-source pathology platform, and builder of research-data agents.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Andrei Beliaev",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
