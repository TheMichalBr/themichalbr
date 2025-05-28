import { RevealOnScroll } from "../RevealOnScroll";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import pm1 from "/projects/PM_1.webp";
import pm2 from "/projects/PM_2.webp";
import pm3 from "/projects/PM_3.webp";
import pm4 from "/projects/PM_4.webp";

export const Projects = () => {

  const [downloads, setDownloads] = useState(null);

  useEffect(() => {
    // Funkce pro získání dat z Modrinth API
    const fetchModrinthData = async () => {
      try {
        const response = await fetch("https://api.modrinth.com/v2/project/G4nmS8ee");
        const data = await response.json();
        setDownloads(data.downloads); // Nastavení počtu stažení
      } catch (error) {
        console.error("Chyba při načítání dat z Modrinth API:", error);
      }
    };

    fetchModrinthData();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-black/80 hover:bg-black/30 transition-all duration-300 opacity-25 hover:opacity-40"
            style={{ backgroundImage: `url(${pm1})` }}
            >
            </div>

              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> Tetris <span className="text-xs font-normal">(v1.1)</span></h3>
              <p className="text-gray-400 mb-4">
              Probably everyone has heard of Tetris.. so this is my version of Tetris with some interesting changes! So definitely give it a try!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Web Game", "Godot"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="https://themichalbr.github.io/mgames/Tetris.html" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  PLAY ONLINE →
                </a>{downloads !== null && (
                  <span className="text-blue-400 text-sm">
                    100+ played games ▶
                  </span>
                )}
              </div>
            </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center bg-black/80 hover:bg-black/30 transition-all duration-300 opacity-25 hover:opacity-40"
            style={{ backgroundImage: `url(${pm2})` }}
            >
            </div>

              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> aim_blueline <span className="text-xs font-normal">(in development)</span></h3>
              <p className="text-gray-400 mb-4">
                You just want to have a blast with your friends? Or have a thrilling duel to compare who is the bigger shooter? Inspired by the legendary aim_redline map.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Game Map", "CS2", "Source 2 Editor"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-gray-400 cursor-not-allowed"
                  style={{ pointerEvents: "none" }}
                >
                  PLAY IN CS2 →
                </a>{downloads !== null && (
                  <span className="text-blue-400 text-sm">
                    not available ⇩
                  </span>
                )}
              </div>
            </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center bg-black/80 hover:bg-black/30 transition-all duration-300 opacity-25 hover:opacity-40"
            style={{ backgroundImage: `url(${pm3})` }}
            >
            </div>
              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> NmS' Rocket Launcher Mod <span className="text-xs font-normal">(v1.0)</span></h3>
              <p className="text-gray-400 mb-4">
              This mod adds a rocket launcher to the game. You know what to do with it. Be nice to your friends!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Game Mod", "Minecraft", "Java"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://modrinth.com/mod/nms-rocket-launcher-mod/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  DOWNLOAD MOD →
                </a>{downloads !== null && (
                  <span className="text-blue-400 text-sm">
                    {downloads.toLocaleString()} downloads ⇩
                  </span>
                )}
              </div>
            </div>
            </div>

            <div className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center bg-black/80 hover:bg-black/30 transition-all duration-300 opacity-25 hover:opacity-40"
            style={{ backgroundImage: `url(${pm4})` }}
            >
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> shooter game <span className="text-xs font-normal">(in development)</span></h3>
              <p className="text-gray-400 mb-4">
                First person shooter game on unknown island. Game will be made in Unreal Engine. More info soon!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Game", "Unreal"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-gray-400 cursor-not-allowed"
      style={{ pointerEvents: "none" }}>VIEW PROJECT PAGE →</a>{downloads !== null && (
                  <span className="text-blue-400 text-sm">
                    not available ⇩
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </RevealOnScroll>
  </section>
  );
};