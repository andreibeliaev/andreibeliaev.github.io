import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-zinc-900">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
