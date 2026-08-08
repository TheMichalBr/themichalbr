import React, { useEffect, useMemo, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import pm1 from "/projects/P_1.webp";
import pm2 from "/projects/P_2.webp";
import pm3 from "/projects/P_3.webp";
import pm4 from "/projects/P_4.webp";

interface Project {
  id: string;
  order: number;
  title: string;
  version: string;
  desc: string;
  tech: string[];
  image: string | null;
  link: string;
  linkLabel: string;
  downloads: string | number | null;
  disabled?: boolean;
  status: "completed" | "development" | "planning";
  featured: boolean;
}

interface StatusBadgeProps {
  status: string;
}

const projectsData: Project[] = [
  {
    id: "tetris",
    order: 1,
    title: "Tetris",
    version: "v1.1",
    desc: "Probably everyone has heard of Tetris. So this is my version of Tetris with some interesting changes!",
    tech: ["Web Game", "Godot"],
    image: pm1,
    link: "https://themichalbr.github.io/mgames/Tetris.html",
    linkLabel: "PLAY ONLINE",
    downloads: null,
    status: "completed",
    featured: true,
  },
  {
    id: "snake",
    order: 2,
    title: "Snake",
    version: "v1.0.3",
    desc: "Classic Snake. Eat the food, grow the snake and try not to hit the walls or yourself!",
    tech: ["Game", "Python"],
    image: pm2,
    link: "https://github.com/TheMichalBr/snake_game",
    linkLabel: "DOWNLOAD GAME",
    downloads: null,
    status: "completed",
    featured: true,
  },
  {
    id: "rocketmod",
    order: 3,
    title: "NmS' Rocket Launcher Mod",
    version: "v1.0.3",
    desc: "This mod adds a rocket launcher to the game. You know what to do with it. Be nice to your friends!",
    tech: ["Game Mod", "Minecraft", "Java"],
    image: pm3,
    link: "https://modrinth.com/mod/nms-rocket-launcher-mod/",
    linkLabel: "DOWNLOAD MOD",
    downloads: "modrinth",
    status: "completed",
    featured: false,
  },
  {
    id: "shooter",
    order: 4,
    title: "shooter game",
    version: "v0.1 (alpha)",
    desc: "First person shooter game on unknown island. Game will be made in Unreal Engine!",
    tech: ["Game", "Unreal"],
    image: pm4,
    link: "#",
    linkLabel: "VIEW GAME PAGE",
    downloads: 100,
    disabled: true,
    status: "development",
    featured: false,
  },
  {
    id: "aim_blueline",
    order: 0,
    title: "aim_blueline",
    version: "in development",
    desc: "You just want to have a blast with your friends? Or have a thrilling duel to compare who is the bigger shooter? Inspired by the legendary aim_redline map.",
    tech: ["Game Map", "CS2", "Source 2 Editor"],
    image: null,
    link: "#",
    linkLabel: "PLAY IN CS2",
    downloads: null,
    disabled: true,
    status: "development",
    featured: false,
  },
  {
    id: "websites",
    order: 0,
    title: "Websites",
    version: "no version",
    desc: "I have created several custom websites of various types, ranging from simple ones to portfolios.",
    tech: ["Website", "HTML", "CSS", "JS", "React"],
    image: null,
    link: "#",
    linkLabel: "",
    downloads: null,
    disabled: true,
    status: "completed",
    featured: false,
  },
];

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusStyles: Record<string, string> = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    development: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    planning: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  const statusLabels: Record<string, string> = {
    completed: "Released",
    development: "In Development",
    planning: "Planning",
  };

  return (
    <span
      className={`rounded-full border px-2 py-1 text-xs ${statusStyles[status] || statusStyles.completed}`}
    >
      {statusLabels[status] || "Unknown"}
    </span>
  );
};

interface ProjectShowcaseProps {
  projects: Project[];
  downloads: number | null;
  loading: boolean;
  error: string | null;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  downloads,
  loading,
  error,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    if (projects.length === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= projects.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, projects.length]);

  useEffect(() => {
    if (projects.length <= 1) {
      return;
    }

    let intervalId: number | undefined;
    const timerId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % projects.length);
      }, 10000);
    }, 20000);

    return () => {
      window.clearTimeout(timerId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [projects.length, lastInteraction]);

  const switchProject = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setLastInteraction(Date.now());
    setIsTransitioning(true);
    window.setTimeout(() => {
      setActiveIndex(index);
      window.setTimeout(() => setIsTransitioning(false), 140);
    }, 90);
  };

  const activeProject = projects[activeIndex] ?? projects[0];

  if (!activeProject) {
    return null;
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Failed to load download statistics: {error}
        </div>
      )}

      <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950/90 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div className="relative">
          <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-950/70 p-1.5 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => switchProject((activeIndex - 1 + projects.length) % projects.length)}
              className="rounded-full border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-200 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200 cursor-pointer"
              aria-label="Previous project"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => switchProject((activeIndex + 1) % projects.length)}
              className="rounded-full border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-200 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200 cursor-pointer"
              aria-label="Next project"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-96 overflow-hidden border-b border-zinc-800 lg:min-h-104 lg:border-b-0 lg:border-r">
            {activeProject.image ? (
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className={`h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isTransitioning ? "scale-[1.03] opacity-90" : "scale-100 opacity-100"}`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-900 px-6 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Preview coming soon
                  </p>
                  <p className="mt-2 text-lg font-medium text-zinc-200">
                    Visual concept for {activeProject.title}
                  </p>
                </div>
              </div>
            )}
            <div className={`absolute inset-0 bg-linear-to-t from-zinc-950/75 via-zinc-950/20 to-transparent transition-opacity duration-700 ${isTransitioning ? "opacity-95" : "opacity-100"}`} />
            <div className="absolute left-4 top-4 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-sm">
              Project {activeIndex + 1} / {projects.length}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={activeProject.status} />
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {activeProject.version}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl font-semibold text-zinc-100">
                  {activeProject.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-400">
                  {activeProject.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Details
                </div>
                <div className="mt-3 space-y-2.5 text-sm text-zinc-400">
                  <div className="flex items-center justify-between gap-3">
                    <span>Type</span>
                    <span className="font-medium text-zinc-200">{activeProject.tech[0]}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Status</span>
                    <span className="font-medium text-zinc-200">
                      {activeProject.status === "completed"
                        ? "Ready"
                        : activeProject.status === "development"
                          ? "Work in progress"
                          : "Planning"}
                    </span>
                  </div>
                </div>
              </div>

              {activeProject.downloads === "modrinth" && (
                <div className="rounded-2xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-zinc-900/70 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-zinc-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-zinc-950/70">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3v14" />
                          <path d="m7 10 5 5 5-5" />
                          <path d="M5 19h14" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200">Downloads</div>
                        <div className="text-xs text-zinc-500">from Modrinth</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-semibold text-blue-300">
                        {loading
                          ? "Loading..."
                          : downloads !== null
                            ? downloads.toLocaleString()
                            : "Unavailable"}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => switchProject(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIndex === index
                          ? "w-8 bg-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]"
                          : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                      aria-label={`Show ${project.title}`}
                    />
                  ))}
                </div>

                <a
                  href={activeProject.link}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeProject.disabled
                      ? "cursor-not-allowed border border-zinc-800 bg-zinc-900 text-zinc-500"
                      : "border border-blue-500/25 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                  }`}
                  style={activeProject.disabled ? { pointerEvents: "none" } : {}}
                  tabIndex={activeProject.disabled ? -1 : 0}
                >
                  <span>{activeProject.linkLabel || "Open project"}</span>
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border transition-transform ${
                    activeProject.disabled
                      ? "border-zinc-800 bg-zinc-900 text-zinc-500"
                      : "border-blue-400/20 bg-zinc-950/60 text-blue-300 group-hover:translate-x-0.5"
                  }`}>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [downloads, setDownloads] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModrinthData = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch("https://api.modrinth.com/v2/project/G4nmS8ee");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDownloads(data.downloads);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error("Error fetching Modrinth data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModrinthData();
  }, []);

  const orderedProjects = useMemo(() => {
    return [...projectsData]
      .filter((project) => project.order >= 0)
      .sort((a, b) => {
        if (a.featured !== b.featured) {
          return Number(b.featured) - Number(a.featured);
        }
        return a.order - b.order;
      });
  }, []);

  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      <RevealOnScroll>
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 bg-linear-to-br from-[#0845d1] to-[#015ea1] bg-clip-text text-4xl font-bold text-transparent select-none">
              Featured projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 select-none">
              Explore some of my creations, such as various applications, games,
              or mods I have developed with passion, or projects I have been
              involved in.
            </p>
          </div>

          <ProjectShowcase
            projects={orderedProjects}
            downloads={downloads}
            loading={loading}
            error={error}
          />
        </div>
      </RevealOnScroll>
    </section>
  );
};