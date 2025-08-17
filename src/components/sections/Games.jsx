import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import R1 from "/games/GR_R1.webp";
import R2 from "/games/GR_R2.webp";

import G1 from "/games/G_CS2.webp";
import G2 from "/games/G_OW2.webp";
import G3 from "/games/G_APEX.webp";
import G4 from "/games/G_FORTNITE.webp";
import G5 from "/games/G_VALORANT.webp";
import G6 from "/games/G_R6X.webp";
import G7 from "/games/G_CHESS.webp";

import GR1 from "/games/G_CS2_R.webp";
import GR2 from "/games/G_OW2_R.webp";
import GR3 from "/games/G_APEX_R.webp";
import GR4 from "/games/G_FORTNITE_R.webp";
import GR5 from "/games/G_VALORANT_R.webp";
import GR6 from "/games/G_R6X_R.webp";
import GR7 from "/games/G_CHESS_R.webp";

export const Games = () => {
  const [showSettings, setShowSettings] = useState(null);

  const toggleSettings = (gameId) => {
    setShowSettings((prev) => (prev === gameId ? null : gameId));
  };

  const games = [
    {
      id: "cs2",
      name: "Counter Strike 2",
      platform: "Steam (MichalBr)",
      rank: "Level 9",
      rankIcon: GR1,
      image: G1,
      settings: {
        FACEIT: "Level 9",
        Premier: "21 000+ ELO (MM p. Global Elite)",
        Crosshair: "CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D",
        Viewmodel:
          "viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2",
        Sensitivity: "2.52",
        Resolution: "1280x960, Almost everything on low quality",
        Config: "Soon...",
      },
    },
    {
      id: "overwatch2",
      name: "Overwatch 2",
      platform: "Battle.net (MichalBr#2144)",
      rank: "Platinum III",
      rankIcon: GR2,
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
      rankIcon: GR3,
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
      rankIcon: GR4,
      image: G4,
      settings: {
        Statistics: "https://fortnite.gg/stats?player=MichalBr",
        Sensitivity: "5.0",
        Resolution:
          "2560x1440, Almost everything on low quality, View Distance HIGH",
      },
    },
    {
      id: "valorant",
      name: "Valorant",
      platform: "Riot Games (MichalBr#UwU)",
      rank: "Platinum II",
      rankIcon: GR5,
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
      rank: "Platinum I",
      rankIcon: GR6,
      image: G6,
      settings: {
        Sensitivity: "16/16",
        Resolution: "2560x1440",
        Graphics: "Almost everything on low/medium quality",
      },
    },
    {
      id: "chess",
      name: "Chess",
      platform: "Chess.com (MichalBr13)",
      rank: "700+ Rating",
      rankIcon: GR7,
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
      <div className="max-w-6xl mx-auto space-y-16 px-4">
        <RevealOnScroll>
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none">
                Games information
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto select-none">
                You will find information about my highest rank in a given game,
                my name on the platform, and other game settings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {games.map((game) => (
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

          <div className="h-16"></div>

          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none">
                Latest reviews
              </h2>
            </div>

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
                    backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${R1})`,
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
                          Platform: PC (Game)
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
                    backgroundImage: `linear-gradient(to bottom right, rgba(10,30,60,0.18) 60%, rgba(0,0,0,0.18)), url(${R2})`,
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
                          Platform: PC (Game)
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
        </RevealOnScroll>
      </div>
    </section>
  );
};