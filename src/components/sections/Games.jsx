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
      name: "Counter-Strike 2",
      platform: "Steam (MichalBr)",
      rank: "Global Elite (Premier: 21 000+ ELO)",
      rankIcon: R1,
      image: G1,
      settings: {
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
    <section id="games" className="min-h-screen text-white py-20 px-6 justify-center">
      <div className="max-w-5xl mx-auto space-y-16">  {/* 7xl bylo*/}
        <RevealOnScroll>
          {/* Recenze */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Latest Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Jedna recenze */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black/20">
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
                    Read Review →
                  </a>
                </div>
                <p className="absolute bottom-2 left-2 text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">
                  Doom Eternal
                </p>
                <p className="absolute bottom-2 right-2 text-sm text-yellow-400 bg-black/50 px-2 py-1 rounded">
                  ★★★★★ 9.2/10
                </p>
              </div>
              {/* Další recenze */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black/20">
                <img
                  src={RC}
                  alt="Cyberpunk 2077"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-white">Cyberpunk 2077 + PL</h3>
                  <p className="text-sm text-gray-300">Platform: PC</p>
                  <p className="text-sm text-yellow-400">Rating: ★★★★★ 10/10</p>
                  <a
                    href="#"
                    className="mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Coming soon →
                  </a>
                </div>
                <p className="absolute bottom-2 left-2 text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">
                  Cyberpunk 2077 + PL
                </p>
                <p className="absolute bottom-2 right-2 text-sm text-yellow-400 bg-black/50 px-2 py-1 rounded">
                  ★★★★★ 10/10
                </p>
              </div>
            </div>
          </div>

  <div className="h-16"></div>

  <div>
  <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
    Games
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {games.map((game) => (
      <div
        key={game.id}
        className="p-4 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-700 hover:border-gray-500"
        style={{
          backgroundImage: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Překryv pro ztmavení */}
        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

        {/* Zmenšené logo ranku na levé straně */}
        <div
          className="absolute left-2 top-2 w-16 h-16 opacity-60"
          style={{
            backgroundImage: `url(${game.rankIcon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            filter: "blur(1px) brightness(0.5)",
          }}
        ></div>

        {/* Fade efekt zleva */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-lg"></div>

        {/* Obsah karty */}
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <img
              src={game.image}
              alt={game.name}
              className="w-14 h-14 rounded-lg border border-gray-600"
            />
            <div>
              <h3 className="text-lg font-bold text-white">{game.name}</h3>
              <p className="text-sm text-gray-300">Platform: {game.platform}</p>
              <div className="flex items-center gap-2">
                <img
                  src={game.rankIcon}
                  alt={`${game.rank} Icon`}
                  className="w-6 h-6"
                />
                <p className="text-sm text-yellow-400">{game.rank}</p>
              </div>
            </div>
          </div>

          {/* Tlačítko Settings */}
<button
  onClick={() => toggleSettings(game.id)}
  className={`absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md transition-transform duration-300 transform ${
    showSettings === game.id
      ? "rotate-45 bg-red-500 hover:bg-red-400"
      : "hover:bg-blue-400 hover:scale-110"
  }`}
  aria-label="Toggle Settings"
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

{/* Rank jako obrázek vlevo od tlačítka */}
<div
  className="absolute top-4 right-16 w-10 h-10 opacity-40 rounded-full bg-cover bg-center"
  style={{
    backgroundImage: `url(${game.rankIcon})`,
    filter: "blur(2px) brightness(0.8)",
  }}
></div>

          {/* Obsah nastavení */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              showSettings === game.id ? "max-h-60 mt-4" : "max-h-0"
            }`}
          >
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500">
              <h4 className="text-sm font-bold mb-4">Settings</h4>
              <ul className="text-xs space-y-2">
                {Object.entries(game.settings).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{key}:</span> {value}
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