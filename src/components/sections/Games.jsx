import React from "react";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import RR from "/games/reviews/R_R.webp";
import RC from "/games/reviews/R_C.webp";

import G1 from "/games/CS2.webp";
import G2 from "/games/OW2.webp";
import G3 from "/games/APEX.webp";
import G4 from "/games/FORTNITE.webp";
import G5 from "/games/VALORANT.webp";
import G6 from "/games/R6X.webp";
import G7 from "/games/CHESS.webp";

import R1 from "/games/CS2_R.webp";
import R2 from "/games/OW2_R.webp";
import R3 from "/games/APEX_R.webp";
import R4 from "/games/FORTNITE_R.webp";
import R5 from "/games/VALORANT_R.webp";
import R6 from "/games/R6X_R.webp";
import R7 from "/games/CHESS.webp";


export const Games = () => {
  const [showSettings, setShowSettings] = useState(null);

  const toggleSettings = (gameId) => {
    setShowSettings((prev) => (prev === gameId ? null : gameId));
  };

  const games = [
    {
      id: "cs2",
      name: "Counter Strike 2",
      platform: "Steam (MichalBr, michalbr-)",
      rank: "Level 9",
      rankIcon: R1,
      image: G1,
      settings: {
        FACEIT: "Level 9",
        Premier: "21 000+ ELO (MM p. Global Elite)",
        Crosshair: "CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D",
        Viewmodel: "viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2",
        Sensitivity: "2.52",
        Resolution: "1280x960, Almost everything on low quality",
      },
    },
    {
      id: "overwatch2",
      name: "Overwatch 2",
      platform: "Battle.net (MichalBr#2144)",
      rank: "Platinum III",
      rankIcon: R2,
      image: G2,
      settings: {
        Crosshair: "2560x1440",
        Sensitivity: "4.0",
        Resolution: "2560x1440, LOW quality",
      },
    },
    {
      id: "apex",
      name: "Apex Legends",
      platform: "EA (TheMichalBr)",
      rank: "Platinum IV",
      rankIcon: R3,
      image: G3,
      settings: {
        Crosshair: "1920x1080",
        Sensitivity: "2.0",
        Resolution: "2560x1440, LOW quality",
      },
    },
    {
      id: "fortnite",
      name: "Fortnite",
      platform: "Epic Games (MichalBr)",
      rank: "Unreal",
      rankIcon: R4,
      image: G4,
      settings: {
        Statistics: "https://fortnite.gg/stats?player=MichalBr",
        Sensitivity: "5.0",
        Resolution: "2560x1440, Almost everything on low quality, View Distance HIGH",
      },
    },
    {
      id: "valorant",
      name: "Valorant",
      platform: "Riot Games (MichalBr#UwU)",
      rank: "Platinum II",
      rankIcon: R5,
      image: G5,
      settings: {
        Sensitivity: "0.82 / 1 / 1",
        Graphics: "Low and only Bloom, MT, NVRB are ON",
        Crosshair: "Cyan / Static",
        Info: "FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)",
        Resolution: "2560x1440, Almost everything on low quality",
      },
    },
    {
      id: "rainbowsixsiegex",
      name: "Rainbow Six Siege X",
      platform: "Ubisoft (TheMichalBr)",
      rank: "Platinum IV",
      rankIcon: R6,
      image: G6,
      settings: {
        Sensitivity: "2.0",
        Resolution: "2560x1440, Almost everything on low quality",
      },
    },
    {
      id: "chess",
      name: "Chess",
      platform: "Chess.com (MichalBr13)",
      rank: "700+ Rating",
      rankIcon: R7,
      image: G7,
      settings: {
        Chessboard: "Dark Blue",
        Figurines: "Space",
      },
    },
  ];

  return (
    <section
      id="games"
      className="min-h-screen text-white py-20 justify-center flex items-center"
    >
      <div className="max-w-5xl mx-auto space-y-16 px-4">
        {" "}
        <RevealOnScroll>
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none">
              Latest Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="
        group relative p-8 min-h-[320px] bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-700/30
        transition-all duration-500
        select-none
        focus:outline-none focus:ring-4 focus:ring-cyan-500/40
        overflow-hidden
      "
                tabIndex={0}
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className="
          absolute inset-0 rounded-3xl z-0
          transition-transform duration-700 ease-[cubic-bezier(.4,2,.3,1)]
          will-change-transform
          group-hover:scale-105
        "
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${RR})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 pointer-events-none rounded-3xl bg-black/40 transition-all duration-500 group-hover:bg-black/70 z-10"></div>
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow select-none mb-2">
                      Doom Eternal
                    </h3>
                    <div className="space-y-1">
                      <div
                        className="
                transition-all duration-500 ease-in-out
                opacity-0 max-h-0 translate-y-2 pointer-events-none
                group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 group-hover:pointer-events-auto
              "
                      >
                        <p className="text-sm text-gray-200 select-none">
                          Platform: PC
                        </p>
                        <p className="text-sm text-gray-200 select-none">
                          Difficulty: Nightmare (100%)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-6 h-10 relative">
                    <span
                      className={`
              text-lg font-bold text-yellow-400 drop-shadow select-none
              absolute bottom-0 transition-all duration-500
              right-0 group-hover:left-0 group-hover:right-auto
              group-hover:translate-x-0
              group-hover:opacity-100
              opacity-100
              z-10
            `}
                      style={{
                        transition: "all 0.5s cubic-bezier(.4,2,.3,1)",
                      }}
                    >
                      ★★★★★ 9.2/10
                    </span>
                    <a
                      href="https://steamcommunity.com/id/misakbr2/recommended/782330/"
                      className={`
              text-cyan-300 hover:text-cyan-200 text-base font-semibold select-text focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-3 py-1 bg-black/30 backdrop-blur-md
              absolute right-0 bottom-0 opacity-0 pointer-events-none
              group-hover:opacity-100 group-hover:pointer-events-auto
              transition-all duration-500
              z-10
            `}
                      tabIndex={0}
                      style={{
                        WebkitUserSelect: "text",
                        userSelect: "text",
                        transition: "all 0.5s cubic-bezier(.4,2,.3,1)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read review →
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="
        group relative p-8 min-h-[320px] bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-700/30
        transition-all duration-500
        select-none
        focus:outline-none focus:ring-4 focus:ring-cyan-500/40
        overflow-hidden
      "
                tabIndex={0}
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className="
          absolute inset-0 rounded-3xl z-0
          transition-transform duration-700 ease-[cubic-bezier(.4,2,.3,1)]
          will-change-transform
          group-hover:scale-105
        "
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${RC})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 pointer-events-none rounded-3xl bg-black/40 transition-all duration-500 group-hover:bg-black/70 z-10"></div>
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow select-none mb-2">
                      Cyberpunk 2077
                    </h3>
                    <div className="space-y-1">
                      <div
                        className="
                transition-all duration-500 ease-in-out
                opacity-0 max-h-0 translate-y-2 pointer-events-none
                group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 group-hover:pointer-events-auto
              "
                      >
                        <p className="text-sm text-gray-200 select-none">
                          Platform: PC
                        </p>
                        <p className="text-sm text-gray-200 select-none">
                          Including datadisk: Phantom Liberty
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-6 h-10 relative">
                    <span
                      className={`
              text-lg font-bold text-yellow-400 drop-shadow select-none
              absolute bottom-0 transition-all duration-500
              right-0 group-hover:left-0 group-hover:right-auto
              group-hover:translate-x-0
              group-hover:opacity-100
              opacity-100
              z-10
            `}
                      style={{
                        transition: "all 0.5s cubic-bezier(.4,2,.3,1)",
                      }}
                    >
                      ★★★★★ 10/10
                    </span>
                    <a
                      href="#"
                      className={`
              text-cyan-300 hover:text-cyan-200 text-base font-semibold select-text focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-3 py-1 bg-black/30 backdrop-blur-md
              absolute right-0 bottom-0 opacity-0 pointer-events-none
              group-hover:opacity-100 group-hover:pointer-events-auto
              transition-all duration-500
              z-10
            `}
                      tabIndex={0}
                      style={{
                        WebkitUserSelect: "text",
                        userSelect: "text",
                        transition: "all 0.5s cubic-bezier(.4,2,.3,1)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read review →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-16"></div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none">
              Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {games.map((game, idx) => (
                <div
                  key={game.id}
                  tabIndex={0}
                  className={`
              group relative p-5 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800
              transition-all duration-500
              focus:outline-none focus:ring-4 focus:ring-cyan-500/40
              hover:scale-[1.025] hover:shadow-3xl
              select-none
              ${showSettings === game.id ? "ring-2 ring-blue-400/60" : ""}
            `}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.92) 60%, rgba(0,0,0,0.7)), url(${game.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-black/80 via-black/60 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70"></div>

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-16 h-16 rounded-xl border-2 border-gray-700 shadow-md transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow select-none">
                          {game.name}
                        </h3>
                        <p className="text-sm text-gray-300 select-none">
                          {game.platform}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <img
                            src={game.rankIcon}
                            alt={`${game.rank} Icon`}
                            className="w-6 h-6 drop-shadow"
                            draggable={false}
                            style={{ userSelect: "none" }}
                          />
                          <p className="text-sm font-bold text-sky-400 drop-shadow select-none">
                            {game.rank}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleSettings(game.id)}
                      className={`
    absolute top-5 right-5 z-20 bg-sky-900 text-white p-2 rounded-full shadow-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-cyan-400
    group/arrow
    ${showSettings === game.id
                          ? "bg-red-500 hover:bg-red-400 scale-110"
                          : "hover:bg-blue-400 hover:scale-110 active:scale-95"
                        }
  `}
                      aria-label="Toggle Settings"
                      tabIndex={0}
                    >
                      <span className="block w-6 h-6 relative">
                        <svg
                          className={`
        absolute left-0 top-0 w-6 h-6 transition-transform duration-500 ease-[cubic-bezier(.4,2,.3,1)]
        ${showSettings === game.id
                              ? "rotate-180 translate-y-1"
                              : "rotate-0 -translate-y-1"
                            }
      `}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 15 12 9 18 15" />
                        </svg>

                        <svg
                          className={`
        absolute left-0 top-0 w-6 h-6 opacity-30 blur-[2px] transition-all duration-500
        ${showSettings === game.id ? "text-red-300" : "text-cyan-300"}
      `}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 15 12 9 18 15" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${showSettings === game.id ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"}
                `}
                    >
                      <div className="bg-gray-950/95 text-white p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300 select-text">
                        <h4 className="text-sm font-bold mb-4 tracking-wide text-cyan-400">
                          Settings and information
                        </h4>
                        <ul className="text-xs space-y-2">
                          {Object.entries(game.settings).map(([key, value]) => (
                            <li key={key} className="flex gap-1">
                              <span className="font-semibold text-gray-200">
                                {key}:
                              </span>
                              <span className="text-gray-300 break-all">
                                {value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

{/*
import React from "react";
import { useState } from "react";

// Mock RevealOnScroll component
const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

// Mock image imports - replace with your actual images
const RR = "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Doom+Eternal";
const RC = "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Cyberpunk+2077";

const G1 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=CS2";
const G2 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=OW2";
const G3 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=APEX";
const G4 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=FN";
const G5 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=VAL";
const G6 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=R6";
const G7 = "https://via.placeholder.com/64x64/1a1a1a/ffffff?text=CHESS";

const R1 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R1";
const R2 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R2";
const R3 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R3";
const R4 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R4";
const R5 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R5";
const R6 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R6";
const R7 = "https://via.placeholder.com/24x24/1a1a1a/ffffff?text=R7";

export const Games = () => {
  const [showSettings, setShowSettings] = useState(null);

  const toggleSettings = (gameId) => {
    setShowSettings((prev) => (prev === gameId ? null : gameId));
  };

  const games = [
    {
      id: "cs2",
      name: "Counter Strike 2",
      platform: "Steam (MichalBr, michalbr-)",
      rank: "Level 9",
      rankIcon: R1,
      image: G1,
      settings: {
        FACEIT: "Level 9",
        Premier: "21 000+ ELO (MM p. Global Elite)",
        Crosshair: "CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D",
        Viewmodel: "viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2",
        Sensitivity: "2.52",
        Resolution: "1280x960, Almost everything on low quality",
      },
    },
    {
      id: "overwatch2",
      name: "Overwatch 2",
      platform: "Battle.net (MichalBr#2144)",
      rank: "Platinum III",
      rankIcon: R2,
      image: G2,
      settings: {
        Crosshair: "2560x1440",
        Sensitivity: "4.0",
        Resolution: "2560x1440, LOW quality",
      },
    },
    {
      id: "apex",
      name: "Apex Legends",
      platform: "EA (TheMichalBr)",
      rank: "Platinum IV",
      rankIcon: R3,
      image: G3,
      settings: {
        Crosshair: "1920x1080",
        Sensitivity: "2.0",
        Resolution: "2560x1440, LOW quality",
      },
    },
    {
      id: "fortnite",
      name: "Fortnite",
      platform: "Epic Games (MichalBr)",
      rank: "Unreal",
      rankIcon: R4,
      image: G4,
      settings: {
        Statistics: "https://fortnite.gg/stats?player=MichalBr",
        Sensitivity: "5.0",
        Resolution: "2560x1440, Almost everything on low quality, View Distance HIGH",
      },
    },
    {
      id: "valorant",
      name: "Valorant",
      platform: "Riot Games (MichalBr#UwU)",
      rank: "Platinum II",
      rankIcon: R5,
      image: G5,
      settings: {
        Sensitivity: "0.82 / 1 / 1",
        Graphics: "Low and only Bloom, MT, NVRB are ON",
        Crosshair: "Cyan / Static",
        Info: "FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)",
        Resolution: "2560x1440, Almost everything on low quality",
      },
    },
    {
      id: "rainbowsixsiegex",
      name: "Rainbow Six Siege X",
      platform: "Ubisoft (TheMichalBr)",
      rank: "Platinum IV",
      rankIcon: R6,
      image: G6,
      settings: {
        Sensitivity: "2.0",
        Resolution: "2560x1440, Almost everything on low quality",
      },
    },
    {
      id: "chess",
      name: "Chess",
      platform: "Chess.com (MichalBr13)",
      rank: "700+ Rating",
      rankIcon: R7,
      image: G7,
      settings: {
        Chessboard: "Dark Blue",
        Figurines: "Space",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        @-moz-document url-prefix() {
          .backdrop-blur-fallback {
            background-color: rgba(0, 0, 0, 0.85) !important;
          }
          
          .transform-gpu {
            transform: translateZ(0);
            will-change: transform;
          }
          
          .smooth-hover {
            transition: all 0.3s ease;
          }
        }
        
        .backdrop-blur-enhanced {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-enhanced {
            background-color: rgba(0, 0, 0, 0.85);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(0, 0, 0, 0.3);
        }
        
        .will-change-transform {
          will-change: transform;
        }
        
        .transform-3d {
          transform: translateZ(0);
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        

        @supports not (background-clip: text) {
          .gradient-text {
            color: #3b82f6;
          }
        }
        
        .button-hover {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
        }
        
        .button-hover:active {
          transform: translateY(0);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <section
        id="games"
        className="min-h-screen text-white py-20 justify-center flex items-center"
      >
        <div className="max-w-5xl mx-auto space-y-16 px-4">
          <RevealOnScroll>
            <div>
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text drop-shadow-lg select-none">
                Latest Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="group relative p-8 min-h-[320px] backdrop-blur-enhanced rounded-3xl shadow-2xl border border-cyan-700/30 transition-all duration-500 select-none focus:outline-none focus:ring-4 focus:ring-cyan-500/40 overflow-hidden transform-3d cursor-pointer"
                  tabIndex={0}
                >
                  <div
                    className="absolute inset-0 rounded-3xl z-0 transition-transform duration-500 will-change-transform group-hover:scale-105 transform-3d"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${RR})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-black/40 transition-all duration-500 group-hover:bg-black/70 z-10"></div>
                  <div className="relative z-20 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow select-none mb-2">
                        Doom Eternal
                      </h3>
                      <div className="space-y-1">
                        <div className="transition-all duration-500 ease-in-out opacity-0 max-h-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 group-hover:pointer-events-auto">
                          <p className="text-sm text-gray-200 select-none">
                            Platform: PC
                          </p>
                          <p className="text-sm text-gray-200 select-none">
                            Difficulty: Nightmare (100%)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-6 h-10 relative">
                      <span className="text-lg font-bold text-yellow-400 drop-shadow select-none absolute bottom-0 transition-all duration-500 right-0 group-hover:left-0 group-hover:right-auto group-hover:translate-x-0 group-hover:opacity-100 opacity-100 z-10">
                        ★★★★★ 9.2/10
                      </span>
                      <a
                        href="https://steamcommunity.com/id/misakbr2/recommended/782330/"
                        className="text-cyan-300 hover:text-cyan-200 text-base font-semibold select-text focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-3 py-1 bg-black/30 backdrop-blur-enhanced absolute right-0 bottom-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 z-10 button-hover"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read review →
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="group relative p-8 min-h-[320px] backdrop-blur-enhanced rounded-3xl shadow-2xl border border-cyan-700/30 transition-all duration-500 select-none focus:outline-none focus:ring-4 focus:ring-cyan-500/40 overflow-hidden transform-3d cursor-pointer"
                  tabIndex={0}
                >
                  <div
                    className="absolute inset-0 rounded-3xl z-0 transition-transform duration-500 will-change-transform group-hover:scale-105 transform-3d"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${RC})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-black/40 transition-all duration-500 group-hover:bg-black/70 z-10"></div>
                  <div className="relative z-20 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow select-none mb-2">
                        Cyberpunk 2077
                      </h3>
                      <div className="space-y-1">
                        <div className="transition-all duration-500 ease-in-out opacity-0 max-h-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 group-hover:pointer-events-auto">
                          <p className="text-sm text-gray-200 select-none">
                            Platform: PC
                          </p>
                          <p className="text-sm text-gray-200 select-none">
                            Including datadisk: Phantom Liberty
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-6 h-10 relative">
                      <span className="text-lg font-bold text-yellow-400 drop-shadow select-none absolute bottom-0 transition-all duration-500 right-0 group-hover:left-0 group-hover:right-auto group-hover:translate-x-0 group-hover:opacity-100 opacity-100 z-10">
                        ★★★★★ 10/10
                      </span>
                      <a
                        href="#"
                        className="text-cyan-300 hover:text-cyan-200 text-base font-semibold select-text focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-3 py-1 bg-black/30 backdrop-blur-enhanced absolute right-0 bottom-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 z-10 button-hover"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read review →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-16"></div>

            <div>
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text drop-shadow-lg select-none">
                Games
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {games.map((game) => (
                  <div
                    key={game.id}
                    tabIndex={0}
                    className={`group relative p-5 bg-gray-900/90 backdrop-blur-enhanced rounded-2xl shadow-2xl border border-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/40 hover:scale-105 hover:shadow-3xl select-none transform-3d cursor-pointer ${
                      showSettings === game.id ? "ring-2 ring-blue-400/60" : ""
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.92) 60%, rgba(0,0,0,0.7)), url(${game.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-black/80 via-black/60 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70"></div>

                    <div className="relative z-10 flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-16 h-16 rounded-xl border-2 border-gray-700 shadow-md transition-transform duration-300 group-hover:scale-105 transform-3d"
                          draggable={false}
                          style={{ userSelect: "none" }}
                        />
                        <div>
                          <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow select-none">
                            {game.name}
                          </h3>
                          <p className="text-sm text-gray-300 select-none">
                            {game.platform}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <img
                              src={game.rankIcon}
                              alt={`${game.rank} Icon`}
                              className="w-6 h-6 drop-shadow"
                              draggable={false}
                              style={{ userSelect: "none" }}
                            />
                            <p className="text-sm font-bold text-sky-400 drop-shadow select-none">
                              {game.rank}
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleSettings(game.id)}
                        className={`absolute top-5 right-5 z-20 p-2 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 button-hover ${
                          showSettings === game.id
                            ? "bg-red-500 hover:bg-red-400 scale-110"
                            : "bg-sky-900 hover:bg-blue-400 hover:scale-110 active:scale-95"
                        }`}
                        aria-label="Toggle Settings"
                        tabIndex={0}
                      >
                        <span className="block w-6 h-6 relative">
                          <svg
                            className={`absolute left-0 top-0 w-6 h-6 transition-transform duration-300 ${
                              showSettings === game.id
                                ? "rotate-180 translate-y-1"
                                : "rotate-0 -translate-y-1"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 15 12 9 18 15" />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          showSettings === game.id ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="backdrop-blur-enhanced text-white p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300 select-text">
                          <h4 className="text-sm font-bold mb-4 tracking-wide text-cyan-400">
                            Settings and information
                          </h4>
                          <ul className="text-xs space-y-2">
                            {Object.entries(game.settings).map(([key, value]) => (
                              <li key={key} className="flex gap-1">
                                <span className="font-semibold text-gray-200">
                                  {key}:
                                </span>
                                <span className="text-gray-300 break-all">
                                  {value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
*/}