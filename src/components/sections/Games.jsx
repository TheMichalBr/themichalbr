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
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-indigo-700 via-blue-600 to-blue-700 bg-clip-text text-transparent drop-shadow-lg select-none">
                Games
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto select-none">
                Here you can find few information about my competitive games, my
                highest ranks in these games, in-game settings, and my newest
                reviews.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.slice(0, 2).map((review, index) => (
                  <div
                    key={index}
                    tabIndex={0}
                    className="group relative p-5 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl 
                   border border-gray-900 overflow-hidden
                   transition-all duration-500 ease-out select-none will-change-transform
                   hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-500/20
                   focus:outline-none focus:ring-3 focus:ring-blue-500/40"
                    style={{
                      backgroundImage: `linear-gradient(165deg,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.85) 50%,
            rgba(0,0,0,0.80) 100%), 
            url(${review.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      willChange: "transform",
                    }}
                  >
                    {/* Pozadí s gradientem */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl 
                       bg-linear-to-br from-black/80 via-black/60 to-transparent 
                       transition-opacity duration-700 ease-out opacity-60
                       group-hover:opacity-40 group-hover:from-black/70"
                    ></div>

                    {/* Hlavní obsah */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Nadpis */}
                        <h3
                          className="text-xl font-bold text-gray-300 tracking-tight drop-shadow-lg mb-2
                         transition-colors duration-300 ease-out
                         group-hover:text-gray-200"
                        >
                          {review.title}
                        </h3>

                        {/* Tag */}
                        {review.tag && (
                          <div
                            className="inline-flex items-center gap-2 px-2.5 py-1 
                            rounded-full border border-gray-700/50
                            shadow-lg backdrop-blur-sm
                            transition-all duration-500 ease-out
                            group-hover:border-cyan-500/30 group-hover:scale-[1.02]"
                          >
                            <span className="text-sm text-gray-300 flex items-center gap-1.5">
                              <span className="transition-transform duration-500 ease-out group-hover:scale-110">
                                {getTagInfo(review.tag).icon}
                              </span>
                              <span className="font-medium">
                                {getTagInfo(review.tag).text}
                              </span>
                            </span>
                          </div>
                        )}

                        {/* Info sekce */}
                        <div className="relative mt-4">
                          <div
                            className="transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform
                  opacity-0 max-h-0 translate-y-1 overflow-hidden
                  group-hover:opacity-100 group-hover:max-h-[500px] group-hover:translate-y-0 delay-75">
                            <div className="space-y-1">
                              {Object.entries(review.info).map(
                                ([key, value], index) => (
                                  <div
                                    key={index}
                                    className="flex gap-2 text-sm text-gray-200 leading-relaxed
                        [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
                                  >
                                    <span className="text-gray-400 min-w-[70px] font-medium">
                                      {key.charAt(0).toUpperCase() +
                                        key.slice(1)}
                                      :
                                    </span>
                                    <span className="text-gray-300 wrap-break-word flex-1">
                                      {value}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Spodní část s hodnocením a tlačítkem */}
                      <div className="relative flex items-end justify-between mt-4 h-8">
                        {/* Hodnocení s animací */}
                        <div
                          className={`
              absolute transform transition-all duration-700 ease-in-out
              ${review.review ? "right-0 group-hover:left-0 group-hover:right-auto" : "right-0"}
            `}
                        >
                          <span
                            className="text-lg font-bold text-yellow-400 flex items-center gap-1.5
                             [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]
                             transition-colors duration-300
                             group-hover:text-yellow-300"
                          >
                            <span className="relative flex">
                              {/* Šedé hvězdičky na pozadí */}
                              <span className="flex text-gray-600">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={`bg-${star}`}>★</span>
                                ))}
                              </span>
                              {/* Žluté hvězdičky přes ně */}
                              <span
                                className="absolute top-0 left-0 flex overflow-hidden text-yellow-500/90"
                                style={{
                                  width: `${(parseFloat(review.rating) / 2 / 5) * 100}%`,
                                }}
                              >
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={`fg-${star}`}>★</span>
                                ))}
                              </span>
                            </span>
                            <span>{review.rating}</span>
                          </span>
                        </div>

                        {/* Tlačítko recenze */}
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

            <div className="h-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              {/* p-5 pridat copy tlacitko pro values */}
              {games.map((game) => (
                <div
                  key={game.id}
                  tabIndex={0}
                  className={`
        group relative p-6 bg-black/70 backdrop-blur-xl rounded-2xl 
        border border-gray-900 overflow-hidden
        transition-all duration-500 ease-out will-change-transform
        hover:scale-[1.02] hover:border-cyan-500/20 
        focus:outline-none focus:ring-3 focus:ring-blue-500/40
        active:scale-[0.99] active:shadow-[0_0_30px_rgba(6,182,212,0.1)]
        select-none cursor-pointer shadow-2xl hover:shadow-3xl
        motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.99]
        ${showSettings === game.id ? "ring-2 ring-blue-500/40" : ""}
      `}
                  onClick={() => toggleSettings(game.id)}
                  style={{
                    backgroundImage: `linear-gradient(165deg,
          rgba(0,0,0,0.97) 0%,
          rgba(0,0,0,0.92) 40%,
          rgba(0,0,0,0.85) 100%), 
          url(${game.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    willChange: "transform, opacity",
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-60
                   bg-linear-to-br from-black/90 via-black/70 to-transparent 
                   transition-opacity duration-700 group-hover:opacity-40
                   group-hover:via-black/60
                   motion-safe:transition-all"
                  />

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 items-start flex-1">
                        <div className="relative group/image perspective">
                          <img
                            src={game.image}
                            alt={game.name}
                            width="64"
                            height="64"
                            fetchPriority="high"
                            className="w-16 h-16 rounded-xl shadow-lg object-cover
                         transition-all duration-500 transform
                         group-hover/image:scale-105 group-hover/image:shadow-cyan-500/20
                         group-hover/image:rotate-3 group-hover/image:-translate-y-0.5
                         motion-safe:transform-gpu motion-safe:backface-visibility-hidden border-2 border-white/10 group-hover:scale-105"
                            loading="lazy"
                            draggable={false}
                            style={{ userSelect: "none" }}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div
                            className="absolute inset-0 rounded-xl bg-linear-to-br 
                           from-black/20 to-transparent opacity-0 
                           group-hover/image:opacity-100 transition-opacity duration-300"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xl font-bold text-transparent bg-clip-text
                         bg-linear-to-r from-white to-white/90
                         transition-all duration-300
                         group-hover:from-cyan-200 group-hover:to-white
                         motion-safe:transform drop-shadow select-none"
                          >
                            {" "}
                            {/* tracking-tight */}
                            {game.name}
                          </h3>
                          <p
                            className="text-sm text-gray-400 mt-0.5 truncate
                         transition-colors duration-300
                         group-hover:text-gray-300"
                          >
                            {game.platform}
                          </p>

                          <div
                            className="inline-flex items-center gap-2 mt-2 px-3 py-1
                           bg-black/30 rounded-full border border-white/10
                           backdrop-blur-sm transition-all duration-300
                           group-hover:border-cyan-500/30
                           group-hover:bg-black/40
                           group-hover:translate-x-1
                           motion-safe:transform-gpu"
                          >
                            <img
                              src={game.rankIcon}
                              alt={game.rank}
                              width="20"
                              height="20"
                              className="w-6 h-6 transition-transform duration-500
                           group-hover:scale-110 group-hover:rotate-6
                           motion-safe:transform-gpu drop-shadow"
                              loading="lazy"
                              draggable={false}
                              style={{ userSelect: "none" }}
                            />
                            <span
                              className="text-sm font-semibold bg-linear-to-r
                              from-sky-400 to-cyan-300 bg-clip-text text-transparent
                              transition-all duration-300
                              group-hover:from-cyan-300 group-hover:to-blue-300"
                            >
                              {game.rank}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSettings(game.id);
                        }}
                        className={`
              p-2.5 rounded-full transition-all duration-300
              backdrop-blur-sm transform
              hover:scale-110 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50
              motion-safe:hover:scale-110 motion-safe:active:scale-95 cursor-pointer
              ${showSettings === game.id
                            ? "bg-red-500/20 hover:bg-red-500/30 text-red-400"
                            : "bg-blue-500/20 hover:bg-cyan-500/30 text-cyan-400"
                          }
            `}
                        aria-label={
                          showSettings === game.id
                            ? "Hide settings"
                            : "Show settings"
                        }
                        tabIndex={0}
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-500 ease-out
                       ${showSettings === game.id ? "rotate-180" : "rotate-0"}
                       motion-safe:transform-gpu`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                            className="transition-all duration-300
                         group-hover:stroke-current"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`
            overflow-hidden transition-all duration-600 ease-in-out
            motion-safe:transform-gpu
            ${showSettings === game.id
                          ? "max-h-[500px] opacity-100 translate-y-0 scale-100"
                          : "max-h-0 opacity-0 -translate-y-4 scale-95"
                        }
          `}
                    >
                      <div
                        className="bg-black/40 backdrop-blur-sm rounded-xl p-4
                       border border-white/10 transition-all duration-300
                       hover:border-cyan-500/30 hover:bg-black/50
                       group-hover:shadow-lg"
                      >
                        <h4
                          className="text-sm font-medium text-cyan-400 mb-3
                        transition-colors duration-300
                        group-hover:text-cyan-300"
                        >
                          Settings & Information
                        </h4>
<div className="space-y-2.25">
  {Object.entries(game.settings).map(([key, value]) => (
    <div key={key} className="flex text-sm group/item items-center gap-2 cursor-auto">
      <span
        className="text-gray-400 font-medium min-w-[100px]
        transition-colors duration-300
        group-hover/item:text-gray-300"
      >
        {key}:
      </span>
      <span
        className="text-gray-300 wrap-break-word flex-1
        transition-colors duration-300 
        group-hover/item:text-gray-200"
      >
        {value}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(value);
        }}
        className="p-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20
        text-cyan-400 hover:text-cyan-300 transition-all duration-200
        opacity-0 group-hover/item:opacity-100 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
        aria-label={`Copy ${key}`}
        title="Copy"
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
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
        </RevealOnScroll>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const getTagInfo = (tag) => {
  switch (tag) {
    case "game":
      return {
        icon: "🎮",
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-cyan-500/20 backdrop-blur-sm",
        text: "Game",
      };
    case "film":
      return {
        icon: "🎬",
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-purple-500/20 backdrop-blur-sm",
        text: "Film",
      };
    case "series":
      return {
        icon: "📺",
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-orange-500/20 backdrop-blur-sm",
        text: "Series",
      };
  }
};