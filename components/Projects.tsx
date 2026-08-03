type ProjectMedia =
  | { type: "video"; src: string; poster?: string; loop?: boolean }
  | { type: "image"; src: string; alt: string };

type Project = {
  title: string;
  description: string;
  link?: string;
  media?: ProjectMedia;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "HistoForge: Open-Source AI Platform for Digital Pathology",
      description:
        "End-to-end platform (QuPath plugin + GPU inference runtime + model hub) that brings foundation-model tissue analysis to pathologists and researchers. Launching August 2026",
    },
    {
      title: "Epibot: Conversational AI for Data Analysis and Entry",
      description:
        "An analytics platform that lets researchers query databases and generate statistical analyses, charts, and reports in natural language, replacing hours of manual SQL and R/Python scripting",
      media: {
        type: "video",
        src: "/media/epibot-demo.mp4",
        poster: "/media/epibot-poster.jpg",
      },
    },
    {
      title: "ARM: Multi-Camera Pose and Behavior Tracking (in progress)",
      description:
        "Multi-view 3D pose tracking with a calibrated camera rig and temporal event modeling to automate behavior measurement; live 3D reprojection shown below",
      media: {
        type: "video",
        src: "/media/arm-demo.mp4",
        loop: true,
      },
    },
    {
      title: "Entropy-aware sampling in vLLM",
      description:
        "Implemented entropy-aware token sampling in vLLM with GPU-batched lookahead to control diversity by penalizing entropy-reducing tokens in speculative decoding",
      link: "https://github.com/andreibeliaev/vllm-entropy",
    },
    {
      title: "Energy-Based Transformers",
      description:
        "Performed ablation study of MCMC sampling strategies to improve performance and scaling",
      link: "https://alexiglad.github.io/blog/2025/ebt/",
    },
    {
      title: "Real-Time Trade Mirroring System",
      description:
        "A real-time futures trade mirroring service using WebSockets and async Python, achieved 56 ms latency",
    },
    {
      title: "Image Immunization",
      description:
        "Implemented semantic attack to make images resistant to generative AI editing",
      link: "https://github.com/andreibeliaev/SemanticAttack",
    },
  ];

  const renderMedia = (media: ProjectMedia) => {
    const frame =
      "w-full rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden mb-3";
    if (media.type === "image") {
      return (
        <div className={frame}>
          <img src={media.src} alt={media.alt} className="w-full block" loading="lazy" />
        </div>
      );
    }
    if (media.loop) {
      return (
        <div className={frame}>
          <video
            src={media.src}
            className="w-full block"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      );
    }
    return (
      <div className={frame}>
        <video
          src={media.src}
          poster={media.poster}
          className="w-full block"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>
    );
  };

  return (
    <section id="projects" className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => {
            const heading = project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="text-base text-black dark:text-white mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {project.title} ↗
                </h3>
              </a>
            ) : (
              <h3 className="text-base text-black dark:text-white mb-1">
                {project.title}
              </h3>
            );

            return (
              <div key={index}>
                {project.media && renderMedia(project.media)}
                {heading}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
