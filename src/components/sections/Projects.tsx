import React, { useEffect, useMemo, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Project, projectsData } from "../../data/ProjectsData";

interface StatusBadgeProps {
  status: string;
}

const imagePreloadCache = new Set<string>();

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusStyles: Record<string, string> = {
    completed: "bg-green-500/10 text-green-300 border border-green-400/40 shadow-[0_0_0_1px_rgba(34,197,94,0.22)]",
    development: "bg-yellow-500/10 text-yellow-300 border border-yellow-400/40 shadow-[0_0_0_1px_rgba(245,158,11,0.22)]",
    planning: "bg-purple-500/18 text-purple-300 border border-purple-500/40 shadow-[0_0_0_1px_rgba(168,85,247,0.17)]",
  };

  const statusLabels: Record<string, string> = {
    completed: "Released",
    development: "Development",
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const activeProject = projects[activeIndex] ?? projects[0];

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setShowSpinner(false);
  }, [activeProject?.image]);

  useEffect(() => {
    if (!activeProject?.image || imageLoaded || imageError) {
      setShowSpinner(false);
      return;
    }

    const timer = window.setTimeout(() => setShowSpinner(true), 80);
    return () => clearTimeout(timer);
  }, [activeProject?.image, imageLoaded, imageError]);

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

  if (!activeProject) {
    return null;
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 select-none">
          ERROR: Failed to load download statistics! ({error})
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
            {showSpinner && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10">
                <div className="w-8 h-8 border-3 border-white/10 border-t-blue-500 rounded-full animate-spin" />
              </div>
            )}

            {activeProject.image && !imageError ? (
              <img
                src={activeProject.image}
                alt={activeProject.title}
                draggable="false"
                onDragStart={(event) => event.preventDefault()}
                onContextMenu={(event) => event.preventDefault()}
                onLoad={() => {
                  setImageLoaded(true);
                  setImageError(false);
                }}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                className={`h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isTransitioning ? "scale-[1.03] opacity-90" : "scale-100 opacity-100"}`}
                loading="lazy"
              />
            ) : (
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-zinc-900 px-6 text-center">
                <svg
                  className="w-12 h-12 mb-3 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 select-none">
                  {activeProject.image
                    ? `Unable to load preview for ${activeProject.title}`
                    : `Preview not available for ${activeProject.title}`}
                </p>
              </div>
            )}
            <div className={`absolute inset-0 bg-linear-to-t from-zinc-950/75 via-zinc-950/20 to-transparent transition-opacity duration-700 ${isTransitioning ? "opacity-95" : "opacity-100"}`} />
            <div className="absolute left-4 top-4 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-sm select-none">
              Project {activeIndex + 1}/{projects.length}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#0a0a0c]/85 backdrop-blur-xl border border-white/4 rounded-2xl shadow-xl">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 select-none">
                <StatusBadge status={activeProject.status} />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.25em] text-zinc-300">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#aaaa" stroke="currentColor" strokeWidth="0.5">
                    <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
                  </svg>
                  <span className="font-light text-gray-300">{activeProject.version}</span>
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







/*
const ProjectCard: React.FC<ProjectCardProps> = ({ project, downloads }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`group relative p-6 rounded-xl border transition-all duration-300 overflow-hidden select-none ${project.featured
          ? "border-blue-500/30 bg-linear-to-br from-blue-500/5 to-cyan-500/5"
          : "border-white/10"
        } ${!project.disabled
          ? "hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
          : "opacity-70"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-linear-to-br from-indigo-700 via-blue-600 to-blue-700 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        </div>
      )}

      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${isHovered ? "scale-105 opacity-40" : "scale-100 opacity-25"
          }`}
        style={{
          backgroundImage: `url(${project.image})`,
          filter: "blur(0.5px)",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transition-all duration-700 ${isHovered
              ? "translate-x-4 translate-y-4"
              : "translate-x-0 translate-y-0"
            }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl transition-all duration-700 ${isHovered
              ? "-translate-x-4 -translate-y-4"
              : "translate-x-0 translate-y-0"
            }`}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-300 transition-colors">
              {" "}
               mb-2 
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{project.version}</span>
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed grow">
          {project.desc}
        </p>

         bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all 
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, key) => (
            <span
              key={key}
              className="bg-white/10 backdrop-blur-sm text-white/90 py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2">
          <a
            href={project.link}
            className={`group/link flex items-center gap-1 font-medium transition-all duration-300 ${project.disabled
                ? "text-gray-500 cursor-not-allowed pointer-events-none"
                : "text-blue-400 hover:text-blue-300"
              }`}
            style={project.disabled ? { pointerEvents: "none" } : {}}
            tabIndex={project.disabled ? -1 : 0}
          >
            {project.linkLabel}
            {!project.disabled && (
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            )}
          </a>

          {project.downloads === "modrinth" && downloads !== null && (
            <div className="flex items-center gap-1 text-cyan-400 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{downloads.toLocaleString()}</span>
            </div>
          )}
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
        const response = await fetch(
          "https://api.modrinth.com/v2/project/G4nmS8ee",
        );
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

  const visibleProjects = projectsData
    .filter((p) => p.order > 0)
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      return a.order - b.order;
    });

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {" "}
           max-w-5xl ? bg-gradient-to-r from-blue-600 to-cyan-700*
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-[#0845d1] to-[#015ea1] bg-clip-text text-transparent select-none">
              Featured projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto select-none">
              Explore some of my creations, such as various applications, games,
              or mods I have developed with passion, or projects I have been
              involved in.
            </p>
          </div>
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              Failed to load download statistics: {error}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <ProjectCard project={project} downloads={downloads} />
              </div>
            ))}
          </div>
          {loading && (
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 text-blue-400">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">Loading project statistics...</span>
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};
*/