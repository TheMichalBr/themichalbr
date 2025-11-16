import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

import pm1 from "/projects/P_1.webp";
import pm2 from "/projects/P_2.webp";
import pm3 from "/projects/P_3.webp";
import pm4 from "/projects/P_4.webp";
{
  /* import pm5 from "/projects/PM_5.webp"; */
}

const projectsData = [
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

const StatusBadge = ({ status }) => {
  const statusStyles = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    development: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    planning: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  const statusLabels = {
    completed: "Released",
    development: "In Development",
    planning: "Planning",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs border ${statusStyles[status] || statusStyles.completed}`}
    >
      {statusLabels[status] || "Unknown"}
    </span>
  );
};

const ProjectCard = ({ project, downloads }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-6 rounded-xl border transition-all duration-300 overflow-hidden ${project.featured
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
              {/* mb-2 */}
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

        {/* bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all */}
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

export const Projects = () => {
  const [downloads, setDownloads] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModrinthData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.modrinth.com/v2/project/G4nmS8ee"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDownloads(data.downloads);
      } catch (error) {
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
        return b.featured - a.featured;
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
          {/* max-w-5xl ? bg-gradient-to-r from-blue-600 to-cyan-700*/}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-indigo-700 via-blue-600 to-blue-700 bg-clip-text text-transparent select-none">
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

      <style jsx>{`
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