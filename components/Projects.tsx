export default function Projects() {
  const projects = [
    {
      title: "Full-stack AI platform for Data Analysis and Insertion",
      description: "The agentic platform I developed enables researchers to retrieve insights, generate reports, insert data, and run statistical analysis using natural language",
      link: "https://drive.google.com/file/d/1BDSyRKwTDX9cB4eC3iwxG2A1zhi6azbf/view?usp=sharing"
    },
    {
      title: "Entropy-aware sampling in vLLM",
      description: "Built a non-trivial method to control generation diversity",
      link: "https://github.com/siiyayu/vllm-entropy"
    },
    {
      title: "Energy-Based Transformers",
      description: "Performed ablation study of MCMC sampling strategies to improve performance and scaling",
      link: "https://alexiglad.github.io/blog/2025/ebt/"
    },
    {
      title: "Real-Time Trade Mirroring System",
      description: "A real-time futures trade mirroring service using WebSockets and async Python, achieved 56 ms latency",
      link: "#"
    },
    {
      title: "Image Immunization",
      description: "Implemented semantic attack to make images resistant to generative AI editing",
      link: "https://github.com/siiyayu/SemanticAttack"
    },
  ];

  const isExternalLink = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const isValidLink = (url: string) => {
    return url && url !== "#";
  };

  return (
    <section id="projects" className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => {
            const isExternal = isExternalLink(project.link);
            const hasLink = isValidLink(project.link);

            if (hasLink) {
              return (
                <a
                  key={index}
                  href={project.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <h3 className="text-base text-black dark:text-white mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {project.title}
                    {isExternal && " ↗"}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </a>
              );
            } else {
              return (
                <div key={index} className="block">
                  <h3 className="text-base text-black dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
