"use client";

import { useCallback, useEffect, useState } from "react";

type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** Short clips loop silently in the card instead of showing a play button. */
  autoplay?: boolean;
};

type Project = {
  title: string;
  description: string;
  link?: string;
  media?: ProjectMedia[];
};

const projects: Project[] = [
  {
    title: "HistoForge: Open-Source AI Platform for Digital Pathology",
    description:
      "End-to-end platform (QuPath plugin + GPU inference runtime + model hub) that brings foundation-model tissue analysis to pathologists and researchers. Launching August 2026",
    media: [
      {
        type: "image",
        src: "/media/histoforge-qupath.jpg",
        alt: "HistoForge plugin running inside QuPath: segmented Leydig cells and tubules overlaid on a histology slide, with per-module measurements",
      },
    ],
  },
  {
    title: "Epibot: Conversational AI for Data Analysis and Entry",
    description:
      "An analytics platform that lets researchers query databases and generate statistical analyses, charts, and reports in natural language, replacing hours of manual SQL and R/Python scripting",
    media: [
      {
        type: "video",
        src: "/media/epibot-demo.mp4",
        poster: "/media/epibot-poster.jpg",
        alt: "Screen recording of the Epibot analytics agent writing queries and generating charts",
      },
    ],
  },
  {
    title: "ARM: Multi-Camera Pose and Behavior Tracking (in progress)",
    description:
      "Multi-view 3D pose tracking on a calibrated camera rig with temporal event modeling, automating rodent behavior measurement under heavy occlusion",
    media: [
      {
        type: "video",
        src: "/media/arm-demo.mp4",
        poster: "/media/arm-poster.jpg",
        alt: "Three synchronized camera views with a 3D hand pose reprojected onto each",
        autoplay: true,
      },
      {
        type: "image",
        src: "/media/arm-rig.jpg",
        alt: "The multi-camera recording rig: synchronized cameras mounted around an enclosure under red lighting",
      },
    ],
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

const ROTATE_MS = 6000;

function ProjectCard({
  project,
  onExpand,
}: {
  project: Project;
  onExpand: (index: number) => void;
}) {
  const media = project.media;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!media || media.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % media.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [media, paused]);

  return (
    <div>
      {media && (
        <button
          type="button"
          onClick={() => onExpand(active)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label={`Expand media for ${project.title}`}
          className="group relative block w-full aspect-video mb-3 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 cursor-zoom-in"
        >
          {media.map((item, i) => (
            <span
              key={item.src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.type === "video" && item.autoplay ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  aria-label={item.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain block pointer-events-none transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <img
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-contain block transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              {item.type === "video" && !item.autoplay && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-11 h-11 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 translate-x-[1px] fill-white"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              )}
            </span>
          ))}

          {media.length > 1 && (
            <span className="absolute bottom-2 right-2 flex gap-1.5">
              {media.map((item, i) => (
                <span
                  key={item.src}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === active ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </span>
          )}
        </button>
      )}

      {project.link ? (
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
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project.description}
      </p>
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{
    items: ProjectMedia[];
    index: number;
  } | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((delta: number) => {
    setLightbox((current) => {
      if (!current) return current;
      const next =
        (current.index + delta + current.items.length) % current.items.length;
      return { ...current, index: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [lightbox, close, step]);

  const current = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <section id="projects" className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Projects
        </h2>

        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onExpand={(index) =>
                setLightbox({ items: project.media!, index })
              }
            />
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl leading-none transition-colors"
          >
            ×
          </button>

          {lightbox!.items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous"
                className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next"
                className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                ›
              </button>
            </>
          )}

          <div
            className="max-w-6xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === "image" ? (
              <img
                src={current.src}
                alt={current.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                className="max-w-full max-h-[85vh] rounded-lg"
                controls
                autoPlay
                muted
                playsInline
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
