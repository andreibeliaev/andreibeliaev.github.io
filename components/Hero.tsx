import Image from "next/image";

export default function Hero() {
  return (
    <section aria-label="About Andrei" className="site-width pt-7 sm:pt-8">
      <div className="about-layout">
        <div>
          <p>
            Hey, I&apos;m Andrei! I work on machine learning at{" "}
            <a className="text-link" href="https://epivara.com/">Epivara</a>,
            where I build vision models for tissue and cell analysis and develop systems for
            animal tracking, re-ID, pose estimation, and behavioral classification. I&apos;ve also built agents
            for analyzing, structuring, and ingesting research data. Previously, at{" "}
            <a className="text-link" href="https://tinkoff-group.com/">Tinkoff</a>, I
            worked on anti-money-laundering systems and tools for measuring and
            improving product quality. I recently finished my master&apos;s in
            computer science at{" "}
            <a className="text-link" href="https://cs.illinois.edu/">UIUC</a>.
          </p>
          <p className="mt-4">
            My interests in machine learning include representation learning and
            continual learning, particularly how models adapt to new tasks and
            environments, as well as energy-based models,
            iterative inference, and ML for scientific discovery.
          </p>
          <p className="about-invitation mt-4">
            I&apos;m currently looking for machine learning, research engineering,
            and software engineering roles. Feel free to{" "}
            <a className="text-link" href="mailto:andrewbelyaev2164@gmail.com">reach out</a>.
          </p>
          <p className="about-invitation mt-4">
            If you&apos;re working on related problems or have similar interests,
            I&apos;d be happy to{" "}
            <a className="text-link" href="mailto:andrewbelyaev2164@gmail.com">connect</a>{" "}
            and explore ways to collaborate.
          </p>
        </div>
        <div className="w-full max-w-[15rem] justify-self-center">
          <Image
            src="/media/andrei-portrait-2026-09.png"
            alt="Andrei Beliaev"
            width={1274}
            height={1274}
            sizes="(min-width: 768px) 240px, 192px"
            className="about-portrait mx-auto"
            priority
          />
          <nav aria-label="Contact and links" className="mt-3 space-y-1 text-center text-base">
            <div className="flex flex-wrap items-center justify-center gap-x-2">
              <a className="text-link" href="mailto:andrewbelyaev2164@gmail.com">Email</a>
              <span aria-hidden="true">/</span>
              <a className="text-link" href="https://github.com/andreibeliaev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span aria-hidden="true">/</span>
              <a className="text-link" href="https://www.linkedin.com/in/andreibeliaev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2">
              <a className="text-link" href="https://x.com/anbeli" target="_blank" rel="noopener noreferrer">X</a>
              <span aria-hidden="true">/</span>
              <a className="text-link" href="/Andrei%20Beliaev%20resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
