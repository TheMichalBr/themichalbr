import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { reviews } from "./GamesData";

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
      rank: "Emerald IV",
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
      {/* bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400 */}
      <div className="max-w-6xl mx-auto space-y-16 px-4">
        <RevealOnScroll>
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-700 bg-clip-text text-transparent drop-shadow-lg select-none">
                Games
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
    absolute top-5 right-5 z-20 bg-blue-700 text-white p-2 rounded-full shadow-lg
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













{/* nova vaerze */}




          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-700 bg-clip-text text-transparent drop-shadow-lg select-none">
                Games
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
                    group relative p-6 bg-black/60 backdrop-blur-xl rounded-2xl 
                    border border-white/10 shadow-2xl
                    transition-all duration-500
                    hover:scale-[1.02] hover:shadow-3xl hover:border-blue-500/30
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                    select-none
                    ${showSettings === game.id ? "ring-2 ring-blue-400/60" : ""}
                  `}
                >
                  
                  <div 
                    className="absolute inset-0 rounded-2xl z-0"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.8)), url(${game.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      
                      <div className="relative group/image">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-16 h-16 rounded-xl border border-gray-700/50 
                                   shadow-lg transition-all duration-500 
                                   group-hover/image:scale-105 group-hover/image:border-blue-500/30"
                          draggable={false}
                        />
                      </div>

                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow">
                          {game.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-0.5">
                          {game.platform}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <img
                            src={game.rankIcon}
                            alt={`${game.rank} Icon`}
                            className="w-5 h-5 drop-shadow"
                            draggable={false}
                          />
                          <p className="text-sm font-semibold bg-gradient-to-r 
                                      from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {game.rank}
                          </p>
                        </div>
                      </div>

                      
                      <button
                        onClick={() => toggleSettings(game.id)}
                        className={`
                          p-2.5 rounded-full transition-all duration-300
                          ${showSettings === game.id 
                            ? "bg-red-500/20 hover:bg-red-500/30 text-red-400"
                            : "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"}
                        `}
                        aria-label="Toggle Settings"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-500
                            ${showSettings === game.id ? "rotate-180" : "rotate-0"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                   
                    <div
                      className={`
                        mt-4 overflow-hidden transition-all duration-500
                        ${showSettings === game.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 
                                    border border-gray-700/50">
                        <h4 className="text-sm font-medium text-cyan-400 mb-3">
                          Settings and information
                        </h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(game.settings).map(([key, value]) => (
                            <div key={key} className="flex gap-2">
                              <span className="text-gray-400 font-medium min-w-[80px]">
                                {key}:
                              </span>
                              <span className="text-gray-300 break-words">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>











          <div className="h-16"></div>

{/* revid z gamedata... Reviews sekce */}

<div>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-700 
                   bg-clip-text text-transparent drop-shadow-lg select-none">
      Latest reviews
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto select-none">
      Check out my latest reviews of games, movies and TV series.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {reviews.slice(0, 2).map((review, index) => (
      <div
        key={index}
        tabIndex={0}
        className="group relative p-5 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800
          transition-all duration-500 ease-out select-none will-change-transform
          focus:outline-none focus:ring-4 focus:ring-cyan-500/40
          hover:scale-[1.02] hover:shadow-3xl hover:border-cyan-500/20"
        style={{
          backgroundImage: `linear-gradient(165deg,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.85) 50%,
            rgba(0,0,0,0.80) 100%), 
            url(${review.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-black/80 via-black/60 to-transparent 
          transition-all duration-700 ease-out opacity-60
          group-hover:opacity-40 group-hover:from-black/70">
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2
                         transition-colors duration-300 ease-out
                         group-hover:text-blue-300">
              {review.title}
            </h3>
            
            {review.tag && (
              <div className="inline-flex items-center gap-2 px-2.5 py-1 
                            rounded-full border border-gray-700/50
                            shadow-lg backdrop-blur-sm
                            transition-all duration-500 ease-out
                            group-hover:border-cyan-500/30 group-hover:scale-[1.02]">
                <span className="text-sm text-gray-300 flex items-center gap-1.5">
                  <span className="transition-transform duration-500 ease-out group-hover:scale-110">
                    {getTagInfo(review.tag).icon}
                  </span>
                  <span className="font-medium">{getTagInfo(review.tag).text}</span>
                </span>
              </div>
            )}

            <div className="space-y-1 mt-4">
              <div className="transition-all duration-500 ease-out
                            opacity-0 max-h-0 translate-y-2 pointer-events-none
                            group-hover:opacity-100 group-hover:max-h-32 group-hover:translate-y-0 
                            group-hover:pointer-events-auto [transition-delay:100ms]">
                {Object.entries(review.info).map(([key, value], index) => (
                  <p key={index} className="text-sm text-gray-200 leading-relaxed mb-1
                                          [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    <span className="text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{' '}
                    <span className="text-gray-200">{value}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between mt-4">
            <div className={`
              absolute transform transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
              ${review.review ? 'right-0 group-hover:left-0 group-hover:right-auto' : 'right-0'}
            `}>
              <span className="text-lg font-bold text-yellow-400 flex items-center gap-1.5
                             [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]
                             transition-colors duration-300
                             group-hover:text-yellow-300">
                <span className="text-yellow-500/90">★★★★★</span>
                <span>{review.rating}</span>
              </span>
            </div>
            
            {review.review && (
              <a
                href={review.review}
                className="absolute right-0 transform transition-all duration-500 ease-out
                         text-cyan-400 hover:text-cyan-300 text-sm font-semibold
                         bg-black/30 hover:bg-black/50 backdrop-blur-sm 
                         px-3 py-1.5 rounded-full
                         border border-cyan-500/20 hover:border-cyan-500/30
                         shadow-lg hover:shadow-cyan-500/10
                         opacity-0 translate-x-2
                         group-hover:opacity-100 group-hover:translate-x-0
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read review →
              </a>
            )}
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

// eslint-disable-next-line react-refresh/only-export-components
export const getTagInfo = (tag) => {
  switch (tag) {
    case 'game':
      return {
        icon: '🎮',
        color: 'text-white/90',
        bgColor: 'bg-white/10',
        borderColor: 'border-cyan-500/20 backdrop-blur-sm',
        text: 'Game'
      };
    case 'film':
      return {
        icon: '🎬',
        color: 'text-white/90',
        bgColor: 'bg-white/10',
        borderColor: 'border-purple-500/20 backdrop-blur-sm',
        text: 'Film'
      };
    case 'series':
      return {
        icon: '📺',
        color: 'text-white/90',
        bgColor: 'bg-white/10',
        borderColor: 'border-orange-500/20 backdrop-blur-sm',
        text: 'Series'
      };
  }
};