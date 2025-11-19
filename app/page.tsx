import Header from "@/components/Header";
import About from "@/components/About";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main className="bg-white dark:bg-zinc-900">
      <About />
      <News />
      <Projects />
    </main>
    <Footer />
    </>
  );
}
