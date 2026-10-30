"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

type ProjectMedia = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  label: string;
};

type Project = {
  title: string;
  href?: string;
  description: string;
  details?: string[];
  media: ProjectMedia[];
};

const projects: Project[] = [
  {
    title: "HistoForge",
    href: "https://histoforge.github.io/",
    description:
      "I built and released an open-source platform that lets researchers train, run, and share pathology models directly from QuPath.",
    details: [
      "A DINOv3 + CNN-adapter model captures tissue-scale context while preserving cell-level detail. It processes 16× more tissue per pass, trains 3.7× faster, and halves inference cost compared with a state-of-the-art baseline. It improves segmentation and classification and is applicable to roughly 3/4 of surveyed tissue types.",
      "Longer term, I'd like to build on this work toward a general-purpose, promptable model for segmenting tissue regions and individual structures, so researchers can quantify their number, morphology, and spatial relationships.",
    ],
    media: [
      {
        id: "histoforge-screenshot",
        type: "image",
        src: "/media/histoforge-qupath.jpg",
        alt: "HistoForge in QuPath, showing Leydig-cell and tubule segmentation with per-module measurements.",
        label: "Screenshot",
      },
    ],
  },
  {
    title: "Animal perception",
    description:
      "Developing detection, re-identification, and multi-camera 3D pose tracking for animal behavior measurement, with a focus on maintaining identity through occlusion and re-entry. Work in progress.",
    media: [
      {
        id: "arm-demo",
        type: "video",
        src: "/media/arm-demo.mp4",
        poster: "/media/arm-poster.jpg",
        alt: "Camera-calibration prototype: a 3D hand pose reprojected onto three synchronized camera views.",
        label: "Calibration prototype",
      },
      {
        id: "arm-rig",
        type: "image",
        src: "/media/arm-rig.jpg",
        alt: "Synchronized machine-vision cameras mounted around the recording enclosure.",
        label: "Camera rig",
      },
    ],
  },
  {
    title: "Research data agents",
    description:
      "Built a conversational analytics platform that queries research databases, runs statistical analyses, and generates charts and reports. A human-in-the-loop ingestion agent turns experimental data into structured records.",
    media: [
      {
        id: "epibot-demo",
        type: "video",
        src: "/media/epibot-demo.mp4",
        poster: "/media/epibot-poster.jpg",
        alt: "The EpiBot analytics agent writing queries and generating charts.",
        label: "Demo",
      },
    ],
  },
];

const experiments = [
  {
    title: "Energy-Based Transformers",
    description:
      "Ran MCMC sampling ablations in Energy-Based Transformers, comparing perplexity across pretraining configurations.",
    href: "https://alexiglad.github.io/blog/2025/ebt/",
    linkLabel: "Blog",
  },
  {
    title: "Image immunization",
    description:
      "Implemented methods for protecting images from diffusion-based editing, using timestep-universal gradients and learned perturbation networks.",
    href: "https://github.com/andreibeliaev/SemanticAttack",
    linkLabel: "Code",
  },
  {
    title: "Entropy-aware sampling in vLLM",
    description:
      "Implemented GPU-batched lookahead to control sampling diversity by penalizing entropy-reducing tokens.",
    href: "https://github.com/andreibeliaev/vllm-entropy",
    linkLabel: "Code",
  },
];

type Lightbox = {
  title: string;
  items: ProjectMedia[];
  index: number;
};

function subscribeToHashChanges(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getMediaHash() {
  return window.location.hash;
}

function getServerMediaHash() {
  return "";
}

function findLightbox(hash: string): Lightbox | null {
  for (const project of projects) {
    const index = project.media.findIndex((item) => `#${item.id}` === hash);
    if (index !== -1) return { title: project.title, items: project.media, index };
  }
  return null;
}

function replaceMediaHash(mediaId: string) {
  const url = new URL(window.location.href);
  url.hash = mediaId;
  window.history.replaceState(window.history.state, "", url);
  // Replacing history preserves scroll but does not emit hashchange itself.
  window.dispatchEvent(new Event("hashchange"));
}

export default function Projects() {
  const hash = useSyncExternalStore(subscribeToHashChanges, getMediaHash, getServerMediaHash);
  const lightbox = findLightbox(hash);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = lightbox !== null;

  const close = useCallback(() => replaceMediaHash(""), []);
  const step = (delta: number) => {
    if (!lightbox) return;
    const index = (lightbox.index + delta + lightbox.items.length) % lightbox.items.length;
    replaceMediaHash(lightbox.items[index].id);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const current = lightbox?.items[lightbox.index];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="site-width pt-10">
      <h2 id="projects-heading" className="section-heading">Selected work</h2>
      <div className="space-y-9">
        {projects.map((project) => {
          const first = project.media[0];
          return (
            <article key={project.title} className="project-row">
              <a
                href={`#${first.id}`}
                className="project-thumbnail relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden"
                aria-label={"Open " + project.title + ": " + first.label.toLowerCase()}
              >
                <Image
                  src={first.poster ?? first.src}
                  alt={first.alt}
                  fill
                  sizes="(min-width: 640px) 220px, (max-width: 368px) 180px, 130px"
                  className="object-contain object-top"
                />
              </a>
              <div className="min-w-0">
                <h3 className="font-semibold">
                  {project.href ? (
                    <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : project.title}
                </h3>
                <p className="mt-1">{project.description}</p>
                {project.details && (
                  <details className="group mt-2">
                    <summary className="text-link inline-flex cursor-pointer list-none items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                      More details<span className="sr-only"> about {project.title}</span>
                      <ChevronDown className="h-4 w-4 shrink-0 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="mt-3 space-y-3">
                      {project.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </details>
                )}
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-base">
                  {project.href && (
                    <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
                      Website<span className="sr-only">: {project.title}</span>
                    </a>
                  )}
                  {project.media.map((item) => (
                    <a key={item.id} className="text-link" href={`#${item.id}`}>
                      {item.label}<span className="sr-only">: {project.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section aria-labelledby="experiments-heading" className="pt-10">
        <h2 id="experiments-heading" className="section-heading">Experiments</h2>
        <ul className="space-y-5">
          {experiments.map((experiment) => (
            <li key={experiment.title}>
              <h3 className="inline font-semibold">{experiment.title}</h3>{" "}
              <a className="text-link ml-2 text-base" href={experiment.href} target="_blank" rel="noopener noreferrer">
                {experiment.linkLabel}<span className="sr-only">: {experiment.title}</span>
              </a>
              <p className="mt-1">{experiment.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <dialog
        ref={dialogRef}
        className="media-dialog"
        aria-labelledby="media-title"
        onCancel={close}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onKeyDown={(event) => {
          if (event.target instanceof HTMLVideoElement) return;
          if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
        }}
      >
        {current && lightbox && (
          <>
            <div className="mb-3 flex items-start justify-between gap-5 text-base">
              <p id="media-title" className="py-2">{lightbox.title}: {current.label}</p>
              <div className="flex items-center gap-4">
                <a className="inline-flex min-h-11 items-center underline underline-offset-4" href={`#${current.id}`}>
                  Permalink
                </a>
                <button type="button" autoFocus className="min-h-11 cursor-pointer px-2 underline underline-offset-4" onClick={close}>Close</button>
              </div>
            </div>
            {current.type === "image" ? (
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1000}
                sizes="(max-width: 1200px) 95vw, 1120px"
                className="mx-auto h-auto max-h-[70dvh] w-auto max-w-full object-contain"
              />
            ) : (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                aria-label={current.alt}
                className="mx-auto max-h-[70dvh] max-w-full"
                controls
                autoPlay
                muted
                playsInline
              />
            )}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-base">
              <p>{current.alt}</p>
              {lightbox.items.length > 1 && (
                <div className="flex gap-5">
                  <button type="button" className="min-h-11 cursor-pointer underline underline-offset-4" onClick={() => step(-1)}>Previous</button>
                  <button type="button" className="min-h-11 cursor-pointer underline underline-offset-4" onClick={() => step(1)}>Next</button>
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
