import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import GenerativeArt from "@/components/GenerativeArt"

export default function Home() {
  return (
    <>
    <Header />
    <main className="bg-white dark:bg-zinc-900">
      <GenerativeArt />
      <About />
      <Projects />
    </main>
    <Footer />
    </>
  );
}
