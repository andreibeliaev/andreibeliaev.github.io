export default function About() {
  return (
    <section id="about" className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          About
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-black dark:text-white">
            Hey! It's Andrei. I started in control theory, worked on quality and fraud in <a href="https://tinkoff-group.com/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">FinTech ↗</a>,
            and eventually shifted into AI and shipping systems from whiteboard design to live production. I'm passionate about applying research, bringing ideas to life, and creating things.
            Outside of work I'm into swimming, something I've done my whole life. I also enjoy hiking and recently picked up running.
          </p>
          <p className="text-base leading-relaxed text-black dark:text-white">
            Feel free to reach out at <a href="mailto:andrewbelyaev2164@gmail.com" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">andrewbelyaev2164@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
