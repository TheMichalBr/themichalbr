import { RevealOnScroll } from "../RevealOnScroll";
import { Button } from "@material-tailwind/react";
import React from "react";

export const Projects = () => {
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
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/TheMichalBr/themichalbr/refs/heads/main/media/games/CBMB_Tetris_.webp')",
              }}
            ></div>

              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> Tetris <span className="text-xs font-normal">(v1.1)</span></h3>
              <p className="text-gray-400 mb-4">
              Probably everyone has heard of Tetris.. so this is my version of Tetris with some interesting changes!
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
                </a>
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
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/TheMichalBr/themichalbr_r/refs/heads/main/public/projects/PM_Tetris.webp')",
              }}
            ></div>


              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> aim_blueline <span className="text-xs font-normal">(in development)</span></h3>
              <p className="text-gray-400 mb-4">
                You just want to have a blast with your friends? Or have a thrilling duel up to 5v5 on one aim map and compare who is the bigger shooter? Inspired by the legendary aim_redline map.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CS2 Map", "Source 2 Editor"].map((tech, key) => (
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
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  PLAY IN CS2 →
                </a>
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
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/TheMichalBr/themichalbr_r/refs/heads/main/public/projects/PM_RocketLauncher.webp')",
              }}
            ></div>
              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> NmS' Rocket Launcher Mod <span className="text-xs font-normal">(v1.0)</span></h3>
              <p className="text-gray-400 mb-4">
              This mod adds a rocket launcher to the game. You know what to do with it. Be nice to your friends!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Minecraft Mod", "Java"].map(
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
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  DOWNLOAD MOD <span className="text-xs font-normal">from Modrinth</span> →
                </a>
              </div>
            </div>
            </div>

            <div className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center bg-black/80 hover:bg-black/30 transition-all duration-300 opacity-25 hover:opacity-40"
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/TheMichalBr/themichalbr_r/refs/heads/main/public/projects/PM_Tetris.webp')",
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> shooter game <span className="text-xs font-normal">(in development)</span></h3>
              <p className="text-gray-400 mb-4">
                First person shooter game on unknown island. Game will be made in Unreal Engine.
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
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">VIEW PROJECT →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-800 my-14 px-10"></div>
      
      <div
        className="mt-16 max-w-4xl mx-auto text-center px-6 lg:px-12 relative bg-cover bg-center rounded-xl p-8 bg-black/100 border-white/10"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/TheMichalBr/themichalbr_r/refs/heads/main/public/projects/PME.png')",
        }}>
    <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
      <div className="relative z-10">
        <p className="text-gray-300 text-lg mb-4">
        If you're interested or have any questions, since I don't have everything written here, feel free to email me or message me at @MichalBr on Discord.
        </p>
        <a href="mailto:biz.michalbr@gmail.com" className="transition bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-block">
          Contact me
        </a>
      </div>
    </div>
    </RevealOnScroll>
  </section>
  );
};