export default function About() {
  return (
    <section id="about" className="pt-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
          About
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-black">
            Hi, my name is Andrei. I started in control theory, worked on quality and fraud as an analyst in <a href="https://tinkoff-group.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">FinTech ↗</a>,
            and eventually shifted into AI and building systems from scratch. I love bringing ideas to life and creating.
            Outside of work I'm into swimming, something I've done my whole life. I also enjoy hiking and recently picked up running.
          </p>
          <p className="text-base">
            Feel free to reach out at andrewbelyaev2164 [at] gmail [dot] com.
          </p>
          <p className="text-base leading-relaxed text-black italic">
            I'm looking for roles starting in Summer 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
