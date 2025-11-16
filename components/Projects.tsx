export default function Projects() {
  // You'll add your real projects here later
  const projects = [
    {
      title: "Project One",
      description: "A cool project that solves X problem using Y technology.",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Another awesome project showcasing your skills.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "Something interesting you built that you're proud of.",
      tech: ["Python", "Flask", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
