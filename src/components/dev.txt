import { useState, useCallback, useMemo } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Game images
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

const GameCard = ({ game, isExpanded, onToggle }) => {
  return (
    <div
      className={`
        group relative p-6 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 
        backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50
        transition-all duration-700 ease-out
        hover:shadow-cyan-500/20 hover:shadow-2xl
        hover:border-cyan-500/30 hover:scale-[1.02]
        focus-within:ring-2 focus-within:ring-cyan-400/50
        overflow-hidden
        ${isExpanded ? "ring-2 ring-blue-400/60 shadow-blue-500/20" : ""}
      `}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%), url(${game.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
                      rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <img
                src={game.image}
                alt={game.name}
                className="w-20 h-20 rounded-2xl border-2 border-gray-600/50 shadow-lg 
                          transition-all duration-500 group-hover:border-cyan-400/50 
                          group-hover:shadow-cyan-500/25 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 
                              rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 
                            transition-colors duration-300 truncate">
                {game.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 
                           transition-colors duration-300 truncate">
                {game.platform}
              </p>
              
              {/* Rank */}
              <div className="flex items-center gap-2 mt-2">
                <div className="relative">
                  <img
                    src={game.rankIcon}
                    alt={`${game.rank} rank`}
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur 
                                  opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                </div>
                <span className="text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 
                               transition-colors duration-300">
                  {game.rank}
                </span>
              </div>
            </div>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => onToggle(game.id)}
            className={`
              relative p-3 rounded-2xl shadow-lg transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-400/50
              ${isExpanded
                ? "bg-red-500/90 hover:bg-red-400 text-white scale-110"
                : "bg-gray-700/80 hover:bg-cyan-500/80 text-gray-300 hover:text-white hover:scale-110"
              }
            `}
            aria-label={isExpanded ? "Hide settings" : "Show settings"}
          >
            <div className="relative w-6 h-6">
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-out
                  ${isExpanded ? "rotate-180 opacity-100" : "rotate-0 opacity-100"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </div>
            
            {/* Button glow effect */}
            <div className={`absolute -inset-1 rounded-2xl blur transition-opacity duration-300 -z-10
              ${isExpanded ? "bg-red-500/40 opacity-60" : "bg-cyan-500/30 opacity-0 group-hover:opacity-50"}`} />
          </button>
        </div>

        {/* Expandable settings */}
        <div className={`
          overflow-hidden transition-all duration-700 ease-out
          ${isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
        `}>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30
                         hover:border-cyan-400/40 transition-colors duration-300">
            <h4 className="text-lg font-semibold mb-4 text-cyan-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Settings & Information
            </h4>
            
            <div className="grid gap-3 text-sm">
              {Object.entries(game.settings).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 
                                        p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 
                                        transition-colors duration-200 border border-gray-700/30">
                  <span className="font-medium text-cyan-300 min-w-0 sm:min-w-[120px]">
                    {key}:
                  </span>
                  <span className="text-gray-300 break-all flex-1 leading-relaxed">
                    {typeof value === 'string' && value.startsWith('http') ? (
                      <a 
                        href={value} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ title, platform, difficulty, rating, reviewUrl, image, isComingSoon = false }) => {
  return (
    <div className="group relative p-8 min-h-[350px] bg-black/60 backdrop-blur-xl rounded-3xl 
                   shadow-2xl border border-gray-700/50 transition-all duration-700 ease-out
                   hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-500/40 
                   hover:scale-[1.02] focus-within:ring-2 focus-within:ring-cyan-400/50 overflow-hidden">
      
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 rounded-3xl transition-transform duration-700 ease-out
                   group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10
                     opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 
                        transition-colors duration-300">
            {title}
          </h3>
          
          <div className="space-y-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 
                         group-hover:opacity-100 transition-all duration-500 delay-100">
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
              Platform: {platform}
            </p>
            {difficulty && (
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {difficulty}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-end justify-between mt-6">
          <span className="text-xl font-bold text-yellow-400 flex items-center gap-2
                          transform group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </span>
          
          {!isComingSoon && reviewUrl && (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-xl border border-cyan-500/30
                        hover:bg-cyan-500/30 hover:text-white hover:border-cyan-400
                        transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0
                        translate-x-4 transition-all duration-500 delay-200
                        focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              Read Review →
            </a>
          )}
          
          {isComingSoon && (
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-xl border border-orange-500/30
                           transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Games = () => {
  const [expandedGame, setExpandedGame] = useState(null);

  const toggleSettings = useCallback((gameId) => {
    setExpandedGame(prev => prev === gameId ? null : gameId);
  }, []);

  const games = useMemo(() => [
    {
      id: "cs2",
      name: "Counter Strike 2",
      platform: "Steam (MichalBr)",
      rank: "Level 9",
      rankIcon: GR1,
      image: G1,
      settings: {
        "FACEIT": "Level 9",
        "Premier": "21 000+ ELO (MM p. Global Elite)",
        "Crosshair": "CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D",
        "Viewmodel": "viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2",
        "Sensitivity": "2.52",
        "Resolution": "1280x960, Almost everything on low quality",
        "Config": "Soon..."
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
        "Crosshair": "2560x1440",
        "Sensitivity": "4.0",
        "Resolution": "2560x1440, LOW quality",
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
        "Crosshair": "1920x1080",
        "Sensitivity": "2.0",
        "Resolution": "2560x1440, LOW quality",
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
        "Statistics": "https://fortnite.gg/stats?player=MichalBr",
        "Sensitivity": "5.0",
        "Resolution": "2560x1440, Almost everything on low quality, View Distance HIGH",
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
        "Sensitivity": "0.82 / 1 / 1",
        "Graphics": "Low and only Bloom, MT, NVRB are ON",
        "Crosshair": "Cyan / Static",
        "Info": "FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)",
        "Resolution": "2560x1440, Almost everything on low quality",
      },
    },
    {
      id: "rainbowsixsiegex",
      name: "Rainbow Six Siege X",
      platform: "Ubisoft (TheMichalBr)",
      rank: "Platinum III",
      rankIcon: GR6,
      image: G6,
      settings: {
        "Sensitivity": "2.0",
        "Resolution": "2560x1440, Almost everything on low quality",
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
        "Chessboard": "Dark Blue",
        "Figurines": "Space",
      },
    },
  ], []);

  return (
    <section id="games" className="min-h-screen text-white py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent)] 
                     animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,19,0.1),transparent)] 
                     animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-20">
        <RevealOnScroll>
          {/* Games Section */}
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
                            bg-clip-text text-transparent">
                Gaming Portfolio
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore my gaming achievements, ranks, and detailed settings across multiple competitive platforms
              </p>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  isExpanded={expandedGame === game.id}
                  onToggle={toggleSettings}
                />
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
                            bg-clip-text text-transparent">
                Game Reviews
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6 rounded-full" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My honest thoughts and detailed reviews of recently completed games
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ReviewCard
                title="Doom Eternal"
                platform="PC (Steam)"
                difficulty="Nightmare (100%)"
                rating="★★★★★ 9.2/10"
                reviewUrl="https://steamcommunity.com/id/misakbr2/recommended/782330/"
                image={R1}
              />
              
              <ReviewCard
                title="Cyberpunk 2077"
                platform="PC (Steam)"
                difficulty="Including DLC: Phantom Liberty"
                rating="★★★★★ 10/10"
                reviewUrl="#"
                image={R2}
                isComingSoon={true}
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};