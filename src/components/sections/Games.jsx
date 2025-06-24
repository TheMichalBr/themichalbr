import React from "react";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import S from "/games/elements/G_S.webp";

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
      platform: "Steam (MichalBr)",
      rank: "Level 8 - Global Elite",
      rankIcon: R1,
      image: G1,
      settings: {
        Stats: "https://csgostats.gg/player/76561199019687093",
        Premier: "21 000+ ELO",
        MM: "Global Elite",
        FACEIT: "Level 8",
        resolution: "1920x1080",
        sensitivity: "1.5",
        crosshair: "Custom",
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
        resolution: "2560x1440",
        sensitivity: "4.0",
        graphics: "Ultra",
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
            resolution: "1920x1080",
            sensitivity: "2.0",
            graphics: "High",
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
            Stats: "https://fortnite.gg/stats?player=MichalBr / https://fortnitetracker.com/profile/all/MichalBr",
            resolution: "1920x1080",
            graphics: "High",
            sensitivity: "5.0",
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
        Resolution: "2560x1440, 270Hz, Limit: 500 FPS",
        Graphics: "Low and only Bloom, MT, NVRB are ON",
        Crosshair: "Cyan / Static",
        Info: "FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)",
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
        Stats: "https://r6.tracker.network/profile/pc/TheMichalBr",
        resolution: "",
        sensitivity: "",
        graphics: "",
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
        Account: "https://www.chess.com/member/michalbr13",
        Theme: "Dark Blue",
        Style: "Space",
      },
    },
  ];

  return (
    <section id="games" className="min-h-screen text-white py-20 justify-center flex items-center">
      <div className="max-w-5xl mx-auto space-y-16 px-4">  {/* 7xl bylo*/}
        <RevealOnScroll>
          {/* Recenze */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Latest Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* První recenze */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black/20 border-white/10">
                <img
                  src={RR}
                  alt="Doom Eternal"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-white">Doom Eternal</h3>
                  <p className="text-sm text-gray-300">Platform: PC</p>
                  <p className="text-sm text-gray-300">Difficulty: Nightmare (100%)</p>
                  <p className="text-sm text-yellow-400">Rating: ★★★★★ 9.2/10</p>
                  <a
                    href="https://steamcommunity.com/id/misakbr2/recommended/782330/"
                    className="mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read review →
                  </a>
                </div>
                <p className="absolute bottom-2 left-2 text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">
                  Doom Eternal
                </p>
                <p className="absolute bottom-2 right-2 text-sm text-yellow-400 bg-black/50 px-2 py-1 rounded">
                  ★★★★★ 9.2/10
                </p>
              </div>
              {/* Druhá recenze */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black/20 border-white/10">
                <img
                  src={RC}
                  alt="Cyberpunk 2077"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-white">Cyberpunk 2077 + Phantom Liberty</h3>
                  <p className="text-sm text-gray-300">Platform: PC</p>
                  <p className="text-sm text-yellow-400">Rating: ★★★★★ 10/10</p>
                  <a
                    href="#"
                    className="mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read review →
                  </a>
                </div>
                <p className="absolute bottom-2 left-2 text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">
                  Cyberpunk 2077 + Phantom Liberty
                </p>
                <p className="absolute bottom-2 right-2 text-sm text-yellow-400 bg-black/50 px-2 py-1 rounded">
                  ★★★★★ 10/10
                </p>
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
            {/* Fade overlay pro smooth tmavý efekt */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-black/80 via-black/60 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70"></div>

            {/* Obsah karty */}
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
                  <p className="text-sm text-gray-300 select-none">{game.platform}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <img
                      src={game.rankIcon}
                      alt={`${game.rank} Icon`}
                      className="w-6 h-6 drop-shadow"
                      draggable={false}
                      style={{ userSelect: "none" }}
                    />
                    <p className="text-sm font-bold text-sky-400 drop-shadow select-none">{game.rank}</p>
                  </div>
                </div>
              </div>

              {/* Tlačítko Settings */}
              <button
                onClick={() => toggleSettings(game.id)}
                className={`
                  absolute top-5 right-5 z-20 bg-blue-500 text-white p-2 rounded-full shadow-lg
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-cyan-400
                  ${showSettings === game.id
                    ? "rotate-45 bg-red-500 hover:bg-red-400 scale-110"
                    : "hover:bg-blue-400 hover:scale-110 active:scale-95"
                  }
                `}
                aria-label="Toggle Settings"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              {/* Obsah nastavení */}
              <div
                className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${showSettings === game.id ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="bg-gray-950/95 text-white p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                  <h4 className="text-sm font-bold mb-4 tracking-wide text-cyan-400">Settings</h4>
                  <ul className="text-xs space-y-2">
                    {Object.entries(game.settings).map(([key, value]) => (
                      <li key={key} className="flex gap-1">
                        <span className="font-semibold text-gray-200">{key}:</span>
                        <span className="text-gray-300 break-all">{value}</span>
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