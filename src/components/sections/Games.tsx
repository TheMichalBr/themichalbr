import { ReactNode, useCallback, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { reviews, type Review } from "../../data/GamesData";

import G1 from "/games/G_CS2.webp";
import G2 from "/games/G_OW.webp";
import G3 from "/games/G_APEX.webp";
import G4 from "/games/G_FORTNITE.webp";
import G5 from "/games/G_VALORANT.webp";
import G6 from "/games/G_R6X.webp";
import G7 from "/games/G_CHESS.webp";

import GR1a from "/games/G_CS2_FACEIT.webp";
import GR1b from "/games/G_CS2_PREMIER.svg";
import GR1c from "/games/G_CS2_MM.webp";
import GR2 from "/games/G_OW_R.webp";
import GR3 from "/games/G_APEX_R.webp";
import GR4 from "/games/G_FORTNITE_R.webp";
import GR5 from "/games/G_VALORANT_R.webp";
import GR6 from "/games/G_R6X_R.webp";
import GR7a from "/games/G_CHESS_BLITZ.svg";
import GR7b from "/games/G_CHESS_BULLET.svg";

type GameSettings = Record<string, string>;

interface GameRank {
  label: string;
  icon: string;
}

interface Game {
  id: string;
  name: string;
  platform: string;
  ranks: GameRank[];
  image: string;
  settings: GameSettings;
}

interface TagInfo {
  icon: ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  text: string;
}

export const Games = () => {
  const [showSettings, setShowSettings] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);
  const drawerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleSettings = (gameId: string): void => {
    setExpandAll(false);
    setShowSettings((prev) => (prev === gameId ? null : gameId));
  };

  const toggleExpandAll = useCallback((): void => {
    setShowSettings(null);
    setExpandAll((p) => !p);
  }, []);

  const handleCopy = (text: string, id: string): void => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isLongSetting = (_key: string, value: string): boolean => {
    return value.length > 28;
  };

  const games: Game[] = [
    {
      id: "cs2",
      name: "Counter Strike 2",
      platform: "Steam | MichalBr",
      ranks: [
        { label: "2,047", icon: GR1a },
        { label: "22,987", icon: GR1b },
        { label: "Global Elite", icon: GR1c },
      ],
      image: G1,
      settings: {
        Crosshair: "CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D",
        Viewmodel:
          "viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2",
        Sensitivity: "2.52 | 0.95",
        Resolution: "1280x960 Stretched | Low quality",
      },
    },
    {
      id: "overwatch",
      name: "Overwatch",
      platform: "Battle.net | MichalBr#2144",
      ranks: [{ label: "Platinum III", icon: GR2 }],
      image: G2,
      settings: {},
    },
    {
      id: "apex",
      name: "Apex Legends",
      platform: "EA | TheMichalBr",
      ranks: [{ label: "Platinum IV", icon: GR3 }],
      image: G3,
      settings: {},
    },
    {
      id: "fortnite",
      name: "Fortnite",
      platform: "Epic Games | MichalBr",
      ranks: [{ label: "Unreal", icon: GR4 }],
      image: G4,
      settings: {
        Sensitivity: "5.0",
        Resolution: "2560x1440 | Low quality, High Distance",
      },
    },
    {
      id: "valorant",
      name: "Valorant",
      platform: "Riot Games | MichalBr#UwU",
      ranks: [{ label: "Platinum II", icon: GR5 }],
      image: G5,
      settings: {
        Sensitivity: "0.82 | 1 | 1",
        Graphics: "Low and only Bloom, MT, NVRB are ON",
        Crosshair: "Cyan Static",
        Info: "FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)",
        Resolution: "2560x1440 | Low quality, On bloom",
      },
    },
    {
      id: "rainbowsixsiegex",
      name: "Rainbow Six Siege X",
      platform: "Ubisoft Connect | TheMichalBr",
      ranks: [{ label: "Emerald IV", icon: GR6 }],
      image: G6,
      settings: {
        Sensitivity: "16 | 16",
        Resolution: "2560x1440 | Medium quality",
      },
    },
    {
      id: "chess",
      name: "Chess",
      platform: "Chess.com | Michalbr13",
      ranks: [
        { label: "500+", icon: GR7a },
        { label: "700+", icon: GR7b },
      ],
      image: G7,
      settings: {},
    },
  ];

  return (
    <section
      id="games"
      className="min-h-screen text-white py-20 justify-center flex items-center font-poppins"
    >
      <style>{`
        .rank-tip { position: relative; }
        .rank-tip::after {
          content: attr(data-tip);
          position: absolute;
          bottom: calc(100% + 7px);
          left: 50%;
          transform: translateX(-50%);
          background: #18181b;
          color: #d1d5db;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
          padding: 3px 9px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.08);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s;
          z-index: 50;
        }
        .rank-tip:hover::after { opacity: 1; }
      `}</style>
      {/*  bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400  */}
      <div className="w-full max-w-6xl mx-auto space-y-16 px-4">
        <RevealOnScroll>
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-[#0845d1] to-[#015ea1] bg-clip-text text-transparent drop-shadow-lg select-none">
                Games
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto select-none leading-relaxed">
                Here you can find few information about my competitive games, my highest ranks or in-game settings in these games, and my newest reviews.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-10 select-none">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">
                Latest reviews
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="w-full flex justify-center">
              <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-stretch">
                {reviews.slice(0, 2).map((review, index) => {
                  const cardContent = (
                    <>
                      {/* Background image with smooth transition */}
                      <img
                        src={review.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06] pointer-events-none select-none"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-black/65 pointer-events-none" />

                      {/* Main Content */}
                      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                        <div>
                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-bold text-gray-300 tracking-tight drop-shadow-lg mb-2 transition-colors duration-300 ease-out group-hover:text-blue-400">
                            {review.title}
                          </h3>

                          {/* Tag */}
                          {review.tag && (
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                              <span className="text-xs text-gray-300 flex items-center gap-1.5">
                                <span className="transition-transform duration-300 ease-out group-hover:scale-110">
                                  {getTagInfo(review.tag).icon}
                                </span>
                                <span className="font-semibold tracking-wider uppercase text-[10px] text-blue-400">
                                  {getTagInfo(review.tag).text}
                                </span>
                              </span>
                            </div>
                          )}

                          {/* Info section */}
                          <div className="relative mt-4">
                            <div className="transition-all duration-700 ease-in-out transform opacity-0 max-h-0 translate-y-1 overflow-hidden group-hover:opacity-100 group-hover:max-h-125 group-hover:translate-y-0 delay-75">
                              <div className="space-y-1.5 pt-3 pb-2 mt-1">
                                {Object.entries(review.info).map(([key, value], idx) => (
                                  <div key={idx} className="flex gap-2 text-xs text-gray-300 leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                                    <span className="text-gray-400 min-w-17.5 font-semibold uppercase tracking-wider text-[10px]">
                                      {key}:
                                    </span>
                                    <span className="text-gray-300 break-all flex-1 font-medium">
                                      {value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom row: Rating & button */}
                        <div className="relative flex items-center w-full h-10 mt-auto overflow-hidden">
                          {/* Rating display */}
                          <div className={`absolute top-1/2 -translate-y-1/2 right-0 w-40 flex items-center gap-2.5 transition-transform duration-500 ease-out transform ${
                            review.review 
                              ? "group-hover:-translate-x-37.5" 
                              : ""
                          }`}>
                            {/* Stars */}
                            <div className="relative flex items-center">
                              <span className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={`bg-${star}`} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/10">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                ))}
                              </span>
                              <span className="absolute top-0 left-0 flex gap-1 overflow-hidden" style={{ width: `${(parseFloat(review.rating) / 2 / 5) * 100}%` }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={`fg-${star}`} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-500" style={{ filter: "drop-shadow(0 0 4px rgba(234, 179, 8, 0.5))" }}>
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                ))}
                              </span>
                            </div>

                            <span className="w-px h-3 bg-white/10 rounded-full" />

                            <div className="flex items-baseline gap-0.5">
                              <span className="text-base font-extrabold tabular-nums text-yellow-500 group-hover:text-yellow-400 transition-colors duration-500 [text-shadow:0_0_8px_rgba(234,179,8,0.3)]">
                                {review.rating}
                              </span>
                              <span className="text-xs text-gray-500 font-bold">/10</span>
                            </div>
                          </div>

                          {/* Read review action */}
                          {review.review && (
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-1 text-blue-400 group-hover:text-blue-300 text-xs font-semibold bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/30 shadow-md transition-all duration-500 ease-out transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                              <span>Read review</span>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );

                  const cardClass = "group relative p-6 bg-[#0a0a0c]/85 backdrop-blur-xl border border-white/4 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] select-none hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#0f0f12]/90 focus:outline-none focus:ring-2 focus:ring-blue-500/40 flex flex-col justify-between flex-1 w-full md:w-[calc(50%-16px)] min-w-0";

                  return review.review ? (
                    <a
                      key={index}
                      href={review.review}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className={cardClass}
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-16"></div>

            {/* ── Ranks header with game count badge + Expand All ── */}
            <div className="flex items-center gap-3 mb-5 select-none">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Ranks &amp; Settings</span>
              <span className="text-[9px] font-bold text-gray-700 bg-white/4 border border-white/6 rounded-full px-2 py-0.5">
                {games.length}
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <button
                onClick={toggleExpandAll}
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/6 bg-white/3 text-gray-500 hover:text-gray-300 hover:border-white/10 transition-colors duration-150 cursor-pointer"
              >
                {expandAll ? "Collapse All" : "Expand All"}
                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${expandAll ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Ranks & Settings — full-width dashboard panel */}
            <div className="rounded-2xl border border-white/6 bg-[#0a0a0c] overflow-hidden shadow-xl">
              {games.map((game, idx, arr) => {
                const hasSettings = game.settings && Object.keys(game.settings).length > 0;
                const isOpen = expandAll ? hasSettings : showSettings === game.id;
                const isLast = idx === arr.length - 1;
                const settingEntries = Object.entries(game.settings);
                return (
                  <div key={game.id} className={`isolate${!isLast ? " border-b border-white/4" : ""}`}>

                    {/* ── Main row ── */}
                    <div
                      tabIndex={hasSettings ? 0 : -1}
                      role={hasSettings ? "button" : undefined}
                      onClick={hasSettings ? () => toggleSettings(game.id) : undefined}
                      onKeyDown={hasSettings ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSettings(game.id); } } : undefined}
                      className={[
                        "group relative flex items-center gap-5 px-6 py-5 overflow-hidden",
                        "transition-colors duration-150 select-none",
                        "focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-cyan-500/40",
                        hasSettings ? "cursor-pointer hover:bg-white/[0.018] active:bg-white/2.5" : "cursor-default",
                        isOpen ? "bg-white/2.5" : "",
                      ].join(" ")}
                    >
                      {/* Subtle game art background — GPU composited, no repaint */}
                      <img
                        src={game.image}
                        alt=""
                        aria-hidden
                        width={800} height={200}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.08] pointer-events-none select-none"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Dark gradient overlay so text stays readable */}
                      <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c]/95 via-[#0a0a0c]/80 to-[#0a0a0c]/60 pointer-events-none" />

                      {/* Thumbnail with hover zoom on inner img only */}
                      <div className="relative shrink-0 w-13 h-13 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <img
                          src={game.image}
                          alt={game.name}
                          width={52} height={52}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          style={{ willChange: "transform" }}
                        />
                      </div>

                      {/* Name + platform */}
                      <div className="relative flex-1 min-w-0">
                        <p className="text-[15px] font-semibold text-gray-300 group-hover:text-gray-200 transition-colors duration-150 truncate leading-snug">
                          {game.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate mt-0.5 leading-snug">
                          {game.platform}
                        </p>
                      </div>

                      {/* Rank badges — all equal blue-400 style, with CSS tooltip */}
                      <div className="relative shrink-0 hidden sm:flex items-center gap-2 flex-wrap justify-end">
                        {game.ranks.map((r, ri) => (
                          <div
                            key={ri}
                            className="rank-tip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 transition-colors duration-150 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.07]"
                            data-tip={r.label}
                          >
                            <img
                              src={r.icon}
                              alt={r.label}
                              width={18} height={18}
                              className="w-4.5 h-4.5 object-contain"
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                            />
                            <span className="text-xs font-bold text-blue-400 whitespace-nowrap">
                              {r.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Chevron */}
                      {hasSettings ? (
                        <div className={[
                          "relative shrink-0 w-7 h-7 flex items-center justify-center rounded-lg border transition-colors duration-150",
                          isOpen
                            ? "bg-red-500/8 border-red-500/20 text-red-400"
                            : "bg-white/3 border-white/6 text-gray-600 group-hover:text-cyan-400 group-hover:border-cyan-500/20",
                        ].join(" ")}>
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="shrink-0 w-7 h-7" />
                      )}
                    </div>

                    {/* ── Drawer: CSS grid-rows trick — no max-h jank ── */}
                    {hasSettings && (
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <div
                            ref={(el) => { drawerRefs.current[game.id] = el; }}
                            className="border-t border-white/4 bg-black/25 px-6 pt-4 pb-3"
                          >
                            {/* Scroll wrapper with fade indicator */}
                            <div className="relative">
                              <div
                                className="max-h-60 overflow-y-auto"
                                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
                              >
                                <div className="space-y-1.5 pb-4">
                                  {settingEntries.map(([key, value]) => {
                                    const isLong = isLongSetting(key, value);
                                    const uniqueId = `${game.id}-${key}`;
                                    const isCopied = copiedId === uniqueId;

                                    if (isLong) {
                                      return (
                                        <div
                                          key={key}
                                          className="group/s rounded-lg border border-white/5 bg-white/2 hover:border-cyan-500/12 transition-colors duration-150 overflow-hidden"
                                        >
                                          <div className="flex items-center justify-between px-3 py-2 border-b border-white/4">
                                            <span className="text-[9px] uppercase font-bold tracking-[0.14em] text-gray-600">{key}</span>
                                            <button
                                              onClick={(e) => { e.stopPropagation(); handleCopy(value, uniqueId); }}
                                              className={[
                                                "p-0.5 rounded transition-all duration-150 cursor-pointer",
                                                isCopied
                                                  ? "text-emerald-400"
                                                  : "text-gray-600 hover:text-cyan-400 opacity-0 group-hover/s:opacity-100 focus:opacity-100",
                                              ].join(" ")}
                                              title={`Copy ${key}`} aria-label={`Copy ${key}`}
                                            >
                                              {isCopied
                                                ? <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                                                : <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                              }
                                            </button>
                                          </div>
                                          <p className={`px-3 py-2 font-mono text-[10px] leading-relaxed break-all select-text ${isCopied ? "text-emerald-400" : "text-gray-400"}`}>
                                            {isCopied ? "Copied!" : value}
                                          </p>
                                        </div>
                                      );
                                    }

                                    // Inline row — CountUp for numeric values
                                    return (
                                      <div
                                        key={key}
                                        className="group/s flex items-center justify-between gap-3 px-3 py-2 rounded-lg hover:bg-white/2 transition-colors duration-150"
                                      >
                                        <span className="text-[10px] uppercase font-semibold tracking-[0.12em] text-gray-600 shrink-0">{key}</span>
                                        <div className="flex items-center gap-2 min-w-0">
                                          <span className={`text-xs font-medium truncate ${isCopied ? "text-emerald-400" : "text-gray-300"}`}>
                                            {isCopied ? "Copied!" : value}
                                          </span>
                                          <button
                                            onClick={(e) => { e.stopPropagation(); handleCopy(value, uniqueId); }}
                                            className={[
                                              "shrink-0 p-0.5 rounded transition-all duration-150 cursor-pointer",
                                              isCopied
                                                ? "text-emerald-400 opacity-100"
                                                : "text-gray-600 hover:text-cyan-400 opacity-0 group-hover/s:opacity-100 focus:opacity-100",
                                            ].join(" ")}
                                            title={`Copy ${key}`} aria-label={`Copy ${key}`}
                                          >
                                            {isCopied
                                              ? <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                                              : <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            }
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              {/* Scroll fade indicator */}
                              <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const getTagInfo = (tag: Review["tag"]): TagInfo => {
  switch (tag) {
    case "game":
      return {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
          >
            <path d="M12 3 Q12 1 14 1" />
            <path d="M8 9C8 6 9.5 4.5 12 4.5C14.5 4.5 16 6 16 9V15C16 17.8 14.2 19.5 12 19.5C9.8 19.5 8 17.8 8 15V9Z" />
            <line x1="12" y1="4.5" x2="12" y2="11" />
            <line x1="8" y1="11" x2="16" y2="11" />
            <rect
              x="11"
              y="7"
              width="2"
              height="3"
              rx="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        ),
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-cyan-500/20 backdrop-blur-sm",
        text: "Game",
      };
    case "film":
      return {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </svg>
        ),
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-purple-500/20 backdrop-blur-sm",
        text: "Film",
      };
    case "series":
      return {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
          >
            <rect x="2" y="7" width="20" height="15" rx="2" />
            <polyline points="17 2 12 7 7 2" />
          </svg>
        ),
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-orange-500/20 backdrop-blur-sm",
        text: "Series",
      };
    default:
      return {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        ),
        color: "text-white/90",
        bgColor: "bg-white/10",
        borderColor: "border-white/20 backdrop-blur-sm",
        text: "Unknown",
      };
  }
};