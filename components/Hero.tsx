import GenerativeArt from "@/components/GenerativeArt";

export default function Hero() {
  return (
    <section className="px-4 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
        <div>
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">
            AI/ML Engineer
          </p>
          <h2 className="max-w-md text-3xl font-light leading-tight text-black dark:text-gray-100 sm:text-4xl">
            I train models and build the systems around them.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400">
            My work spans foundation models, computer vision, agentic data
            systems, and production software.
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="text-black underline decoration-gray-300 underline-offset-4 hover:decoration-black dark:text-white dark:decoration-gray-600 dark:hover:decoration-white"
            >
              Selected work ↓
            </a>
            <a
              href="/Andrei%20Beliaev%20resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline decoration-gray-300 underline-offset-4 hover:decoration-black dark:text-white dark:decoration-gray-600 dark:hover:decoration-white"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <GenerativeArt />
      </div>
    </section>
  );
}
