export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              My Story
            </h3>
            <p className="text-gray-600 mb-4">
              Write about your background, what got you into development,
              and what drives you.
            </p>
            <p className="text-gray-600">
              Share your journey, interests, and what makes you unique.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
