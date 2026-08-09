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
  plays?: number | null;
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
    plays: 739,
    status: "completed",
    featured: false,
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
    featured: false,
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
    id: "websites",
    order: 4,
    title: "Custom Websites",
    version: "v1.0",
    desc: "I have created several custom websites of various types, ranging from simple ones to more advanced.",
    tech: ["Website", "HTML / CSS", "JS", "React"],
    image: pm4,
    link: "#footer",
    linkLabel: "CONTACT ME",
    downloads: null,
    disabled: false,
    status: "completed",
    featured: false,
  },
  {
    id: "aim_blueline",
    order: 5,
    title: "aim_blueline",
    version: "v0.21a",
    desc: "You just want to have a blast with your friends? Or have a thrilling duel to compare who is the better shooter?",
    tech: ["Game Map", "CS2", "Source 2 Editor"],
    image: null,
    link: "#",
    linkLabel: "DOWNLOAD MAP",
    downloads: null,
    disabled: true,
    status: "development",
    featured: false,
  },
  {
    id: "shooter",
    order: 6,
    title: "shooter game",
    version: "v0.02a",
    desc: "First person shooter game on unknown island. Game will be made in Unreal Engine!",
    tech: ["Game", "Unreal"],
    image: null,
    link: "#",
    linkLabel: "DOWNLOAD GAME",
    downloads: 100,
    disabled: true,
    status: "development",
    featured: false,
  },
];

const imagePreloadCache = new Set<string>();

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusStyles: Record<string, string> = {
    completed: "bg-green-500/10 text-green-300 border border-green-400/40 shadow-[0_0_0_1px_rgba(34,197,94,0.22)]",
    development: "bg-yellow-500/10 text-yellow-300 border border-yellow-400/40 shadow-[0_0_0_1px_rgba(245,158,11,0.22)]",
    planning: "bg-purple-500/18 text-purple-300 border border-purple-500/40 shadow-[0_0_0_1px_rgba(168,85,247,0.17)]",
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
    projects.forEach((project) => {
      if (project.image && !imagePreloadCache.has(project.image)) {
        const img = new Image();
        img.src = project.image;
        img.onload = () => imagePreloadCache.add(project.image as string);
      }
    });
  }, [projects]);

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
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 select-none">
          Failed to load download statistics: {error}!
        </div>
      )}

      <div className="overflow-hidden rounded-[1.75rem] bg-[#0a0a0c]/85 backdrop-blur-xl border border-white/4 shadow-xl">
        <div className="relative">
          <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-950/70 p-1.5 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => switchProject((activeIndex - 1 + projects.length) % projects.length)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 transition-all duration-200 ease-out hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200 select-none cursor-pointer"
              aria-label="Previous project"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => switchProject((activeIndex + 1) % projects.length)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 transition-all duration-200 ease-out hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200 selection:none cursor-pointer"
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
                draggable="false"
                onDragStart={(event) => event.preventDefault()}
                onContextMenu={(event) => event.preventDefault()}
                className={`h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isTransitioning ? "scale-[1.03] opacity-90" : "scale-100 opacity-100"}`}
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-900 px-6 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 select-none">
                    Preview not available for {activeProject.title}
                  </p>
                </div>
              </div>
            )}
            <div className={`absolute inset-0 bg-linear-to-t from-zinc-950/75 via-zinc-950/20 to-transparent transition-opacity duration-700 ${isTransitioning ? "opacity-95" : "opacity-100"}`} />
            <div className="absolute left-4 top-4 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-sm select-none">
              Project {activeIndex + 1} / {projects.length}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#0a0a0c]/85 backdrop-blur-xl border border-white/4 rounded-2xl shadow-xl">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 select-none">
                <StatusBadge status={activeProject.status} />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.25em] text-zinc-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8.5 12 3l8 5.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5Z" />
                    <path d="M9.5 12.5 11 14l3.5-3.5" />
                  </svg>
                  <span className="font-light text-gray-300 normal-case">{activeProject.version}</span>
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl font-semibold text-gray-300 select-none">
                  {activeProject.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-400 select-none">
                  {activeProject.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition duration-200 ease-out hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-zinc-100 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="min-h-24">
                {activeProject.downloads === "modrinth" ? (
                  <div className="rounded-2xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-zinc-900/70 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 text-zinc-300">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-zinc-950/70">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-400 select-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3v14" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 19h14" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200 select-none">Downloads</div>
                          <div className="text-xs text-zinc-500 select-none">from Modrinth</div>
                        </div>
                      </div>
                      <div className="flex h-full w-24 items-center justify-end">
                        <div className="w-full text-base font-semibold text-blue-300 select-none text-right leading-none">
                          {loading
                            ? "Loading.."
                            : downloads !== null
                              ? downloads.toLocaleString()
                              : "Unavailable"}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : typeof activeProject.plays === "number" ? (
                  <div className="rounded-2xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-zinc-900/70 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 text-zinc-300">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/20 bg-zinc-950/70">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-300 select-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 3v18l15-9L5 3z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-200 select-none">Played</div>
                          <div className="text-xs text-zinc-500 select-none">from Statistics</div>
                        </div>
                      </div>
                      <div className="flex h-full w-24 items-center justify-end">
                        <div className="w-full text-base font-semibold text-emerald-300 select-none text-right leading-none">
                          {activeProject.plays.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full rounded-2xl border border-transparent bg-transparent p-4 sm:p-5" aria-hidden="true" />
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => switchProject(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer select-none ${
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
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition select-none ${
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