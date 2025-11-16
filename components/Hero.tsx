export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Andrei Beliaev
        </h1>

        {/* Subheading / Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full-stack developer, designer, and builder of things.
        </p>

        {/* Short Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I create elegant solutions to complex problems. Currently focused on
          web development, AI, and building products people love.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}