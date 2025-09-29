{/* # Thanks to Pedro Tech for amazing tutorial.

# DEV
        - Upravit texty a obsah (home,about,projects,games,equipment,loading screen) - games pro firefox?, new games?, new equipment? loading? home? about?
        - obcasne mizeni elementu pri resiznuti
        - loading
        - pro celou stranku plati aby jsme ji vic ujednotili designem animacema stylem a barvou pouzitou

------------------------------------------------------CS2 Config(autoexec.cfg)------------------------------------------------------

Crosshair CSGO - bimys - eFkyb - icw9q - Sfrmo - XKH8D
Viewmodel viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z - 2; cl_righthand 1;
viewmodel_presetpos 0;
Mouse sens. 1.82

https://csstats.gg/player/76561198115132041

https://faceit.com/en/players/michalbr-

// CROSSHAIR
CSGO - bimys - eFkyb - icw9q - Sfrmo - XKH8D

// VIEWMODEL AND BOB
viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z - 2;
cl_righthand 1; viewmodel_presetpos 0; cl_viewmodel_shift_left_amt 0.5;
cl_viewmodel_shift_right_amt 0.25; viewmodel_recoil 0;
cl_bob_lower_amt 5; cl_bobamt_lat 0.1; cl_bobamt_vert 0.1;

// RADAR
cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1;
cl_radar_icon_scale_min 0.4; cl_radar_square_with_scoreboard 1; cl_radar_icon_scale_min 0.25;

// BINDS (Using - MOUSE4 for pings, MOUSE5 for microphone)
bind "alt" "toggle cl_righthand 0 1"; bind = "holdpos"; bind v "use weapon_smokegrenade";
bind "c" "sv_rethrow_last_grenade"; bind "x" "noclip";

// HUD
hud_scaling 0.896259; cl_hud_color 12; cl_hud_playercount_showcount 0;
cl_hud_playercount_pos 0; cl_showloadout 0; cl_hud_healthammo_style 0;
cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1;
safezonex 0.993978; safezoney 0.993978;

// SETTINGS
fps_max 400; fps_max_ui 70; fps_max_tools 60; cl_showfps 0; cq_netgraph 1; cl_cmdrate 128; rate 786432;

// (SLO = -high -threads 8 -refresh 270 -console +exec autoexec.cfg /-language bananagaming // 2560:1440 270Hz High
125 %, 45 % /35%, 400DPI 1000Hz 6/11 2.4 / 1)

// PRACTICE COMMANDS AND BINDS (Exec in offline game to load practice)
sv_cheats 1; mp_warmup_end 1; mp_startmoney 16000; mp_freezetime 0; mp_limitteams 0;
mp_autoteambalance 0; mp_roundtime_defuse 60; mp_roundtime_hostage 60; mp_limitteams 0;
mp_autoteambalance 0; bot_stop 1; mp_solid_teammates 1; mp_maxmoney 99999; god;
mp_startmoney 99999; ammo_grenade_limit_total 6; sv_grenade_trajectory_thickness 1;
sv_showimpacts 1; mp_buy_anywhere 1; mp_roundtime 60; sv_grenade_trajectory_time 10;
sv_showbullethits 1; sv_infinite_ammo 1; mp_restartgame 1; mp_humanteam any;
bot_kick; sv_grenade_trajectory 1; sv_showimpacts_time 10;
bot_mimic_yaw_offset 0; mp_buytime 1337;

clear;

echo #### MichalBr's CS2 config loaded! ####;

"use client";

import React, { CSSProperties, forwardRef, useEffect, useRef, useState } from "react";
import { SpacingToken } from "../types";
import { Flex } from "./Flex";
import { DisplayProps } from "../interfaces";
import styles from "./Background.module.scss";
import classNames from "classnames";

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && "current" in ref) {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
}

interface MaskProps {
  cursor?: boolean;
  x?: number;
  y?: number;
  radius?: number;
}

interface GradientProps {
  display?: boolean;
  opacity?: DisplayProps["opacity"];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  tilt?: number;
  colorStart?: string;
  colorEnd?: string;
}

interface DotsProps {
  display?: boolean;
  opacity?: DisplayProps["opacity"];
  color?: string;
  size?: SpacingToken;
}

interface GridProps {
  display?: boolean;
  opacity?: DisplayProps["opacity"];
  color?: string;
  width?: string;
  height?: string;
}

interface LinesProps {
  display?: boolean;
  opacity?: DisplayProps["opacity"];
  size?: SpacingToken;
}

interface BackgroundProps extends React.ComponentProps<typeof Flex> {
  position?: CSSProperties["position"];
  gradient?: GradientProps;
  dots?: DotsProps;
  grid?: GridProps;
  lines?: LinesProps;
  mask?: MaskProps;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  (
    {
      position = "fixed",
      gradient = {},
      dots = {},
      grid = {},
      lines = {},
      mask = {},
      children,
      className,
      style,
      ...rest
    },
    forwardedRef,
  ) => {
    const dotsColor = dots.color ?? "brand-on-background-weak";
    const dotsSize = "var(--static-space-" + (dots.size ?? "24") + ")";

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setRef(forwardedRef, backgroundRef.current);
    }, [forwardedRef]);

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect();
          setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          });
        }
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    useEffect(() => {
      let animationFrameId: number;

      const updateSmoothPosition = () => {
        setSmoothPosition((prev) => {
          const dx = cursorPosition.x - prev.x;
          const dy = cursorPosition.y - prev.y;
          const easingFactor = 0.05;

          return {
            x: Math.round(prev.x + dx * easingFactor),
            y: Math.round(prev.y + dy * easingFactor),
          };
        });
        animationFrameId = requestAnimationFrame(updateSmoothPosition);
      };

      if (mask.cursor) {
        animationFrameId = requestAnimationFrame(updateSmoothPosition);
      }

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [cursorPosition, mask]);

    const maskStyle = (): CSSProperties => {
      if (!mask) return {};

      if (mask.cursor) {
        return {
          "--mask-position-x": `${smoothPosition.x}px`,
          "--mask-position-y": `${smoothPosition.y}px`,
          "--mask-radius": `${mask.radius || 50}vh`,
        } as CSSProperties;
      }

      if (mask.x != null && mask.y != null) {
        return {
          "--mask-position-x": `${mask.x}%`,
          "--mask-position-y": `${mask.y}%`,
          "--mask-radius": `${mask.radius || 50}vh`,
        } as CSSProperties;
      }

      return {};
    };

    const remap = (
      value: number,
      inputMin: number,
      inputMax: number,
      outputMin: number,
      outputMax: number,
    ) => {
      return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
    };

    const adjustedX = gradient.x != null ? remap(gradient.x, 0, 100, 37.5, 62.5) : 50;
    const adjustedY = gradient.y != null ? remap(gradient.y, 0, 100, 37.5, 62.5) : 50;

    return (
      <Flex
        ref={backgroundRef}
        fill
        position={position}
        className={classNames(mask && styles.mask, className)}
        top="0"
        left="0"
        zIndex={0}
        overflow="hidden"
        style={{
          ...maskStyle(),
          ...style,
        }}
        {...rest}
      >
        {gradient.display && (
          <Flex
            position="absolute"
            className={styles.gradient}
            opacity={gradient.opacity}
            pointerEvents="none"
            style={{
              ["--gradient-position-x" as string]: `${adjustedX}%`,
              ["--gradient-position-y" as string]: `${adjustedY}%`,
              ["--gradient-width" as string]:
                gradient.width != null ? `${gradient.width / 4}%` : "25%",
              ["--gradient-height" as string]:
                gradient.height != null ? `${gradient.height / 4}%` : "25%",
              ["--gradient-tilt" as string]: gradient.tilt != null ? `${gradient.tilt}deg` : "0deg",
              ["--gradient-color-start" as string]: gradient.colorStart
                ? `var(--${gradient.colorStart})`
                : "var(--brand-solid-strong)",
              ["--gradient-color-end" as string]: gradient.colorEnd
                ? `var(--${gradient.colorEnd})`
                : "var(--brand-solid-weak)",
            }}
          />
        )}
        {dots.display && (
          <Flex
            position="absolute"
            top="0"
            left="0"
            fill
            pointerEvents="none"
            className={styles.dots}
            opacity={dots.opacity}
            style={
              {
                "--dots-color": `var(--${dotsColor})`,
                "--dots-size": dotsSize,
              } as React.CSSProperties
            }
          />
        )}
        {lines.display && (
          <Flex
            position="absolute"
            top="0"
            left="0"
            fill
            pointerEvents="none"
            className={styles.lines}
            opacity={lines.opacity}
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, var(--brand-on-background-weak) 0, var(--brand-on-background-weak) 0.5px, var(--static-transparent) 0.5px, var(--static-transparent) ${dots.size})`,
            }}
          />
        )}
        {grid.display && (
          <Flex
            position="absolute"
            top="0"
            left="0"
            fill
            pointerEvents="none"
            className={styles.grid}
            opacity={grid.opacity}
            style={{
              backgroundSize: `
                ${grid.width || "var(--static-space-32)"}
                ${grid.height || "var(--static-space-32)"}`,
              backgroundPosition: "0 0",
              backgroundImage: `
                linear-gradient(
                  90deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.width || "var(--static-space-32)"}
                ),
                linear-gradient(
                  0deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.height || "var(--static-space-32)"}
                )
              `,
            }}
          />
        )}
        {children}
      </Flex>
    );
  },
);

Background.displayName = "Background";

export { Background };



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
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
                      rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10" />

      <div className="relative z-10">
        
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
            
            
            <div className={`absolute -inset-1 rounded-2xl blur transition-opacity duration-300 -z-10
              ${isExpanded ? "bg-red-500/40 opacity-60" : "bg-cyan-500/30 opacity-0 group-hover:opacity-50"}`} />
          </button>
        </div>

        
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
      
      
      <div
        className="absolute inset-0 rounded-3xl transition-transform duration-700 ease-out
                   group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10
                     opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      
      
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
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent)] 
                     animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,19,0.1),transparent)] 
                     animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-20">
        <RevealOnScroll>
          
          <div>
            
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

          
          <div>
            
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



import { useState, useEffect, useMemo, useCallback } from "react";
import { getAllMovies } from "../data/WatchedList";

export default function MoviesTable() {
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("desc");
    const [selectedGenre, setSelectedGenre] = useState("all");

    const moviesPerPage = 10;

    const filteredAndSortedMovies = useMemo(() => {
        let movies = [...allMovies];

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            movies = movies.filter(
                (movie) =>
                    movie.title.toLowerCase().includes(term) ||
                    movie.genre.toLowerCase().includes(term) ||
                    movie.notes.toLowerCase().includes(term)
            );
        }

        if (selectedGenre !== "all") {
            movies = movies.filter(
                (movie) => movie.genre.toLowerCase() === selectedGenre.toLowerCase()
            );
        }

        movies.sort((a, b) => {
            let aVal = a[sortBy];
            let bVal = b[sortBy];

            if (sortBy === "rating") {
                aVal = parseFloat(aVal) || 0;
                bVal = parseFloat(bVal) || 0;
            } else if (sortBy === "year") {
                aVal = parseInt(aVal) || 0;
                bVal = parseInt(bVal) || 0;
            } else if (typeof aVal === "string") {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (sortOrder === "asc") {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        return movies;
    }, [allMovies, searchTerm, selectedGenre, sortBy, sortOrder]);

    const genres = useMemo(() => {
        const uniqueGenres = [...new Set(allMovies.map((movie) => movie.genre))];
        return uniqueGenres.sort();
    }, [allMovies]);

    const stats = useMemo(() => {
        if (allMovies.length === 0) return null;
        
        const ratings = allMovies.map(m => parseFloat(m.rating) || 0);
        const avgRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
        const topRated = allMovies.filter(m => parseFloat(m.rating) >= 9).length;
        
        return { avgRating, topRated };
    }, [allMovies]);

    useEffect(() => {
        const movies = getAllMovies();
        setAllMovies(movies);
        setLoading(false);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        setDisplayedMovies(filteredAndSortedMovies.slice(0, moviesPerPage));
    }, [filteredAndSortedMovies, moviesPerPage]);

    useEffect(() => {
        const handleScroll = (e) => {
            const element = e.target;
            const bottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
            
            if (bottom && hasMoreMovies && !loading) {
                loadMoreMovies();
            }
        };

        const scrollContainer = document.querySelector('.scrollable-table');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, [displayedMovies.length, filteredAndSortedMovies.length, loading]);

    const loadMoreMovies = useCallback(() => {
        if (loading) return;
        
        setLoading(true);
        setTimeout(() => {
            const startIndex = currentPage * moviesPerPage;
            const endIndex = startIndex + moviesPerPage;
            const newMovies = filteredAndSortedMovies.slice(startIndex, endIndex);

            setDisplayedMovies((prev) => [...prev, ...newMovies]);
            setCurrentPage((prev) => prev + 1);
            setLoading(false);
        }, 300);
    }, [currentPage, moviesPerPage, filteredAndSortedMovies, loading]);

    const handleSort = useCallback(
        (field) => {
            if (sortBy === field) {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
            } else {
                setSortBy(field);
                setSortOrder("desc");
            }
        },
        [sortBy]
    );

    const clearFilters = useCallback(() => {
        setSearchTerm("");
        setSelectedGenre("all");
        setSortBy("id");
        setSortOrder("desc");
    }, []);

    const hasMoreMovies = displayedMovies.length < filteredAndSortedMovies.length;

    const SortButton = ({ field, children }) => (
        <button
            onClick={() => handleSort(field)}
            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 group"
        >
            <span>{children}</span>
            {sortBy === field && (
                <span className="text-blue-300">{sortOrder === "asc" ? "↑" : "↓"}</span>
            )}
        </button>
    );

    if (loading && allMovies.length === 0) {
        return (
            <div className="flex justify-center items-center p-8 min-h-96">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-white/80 text-center">Načítám databázi...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-start p-8">
            <div className="w-full max-w-6xl">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="backdrop-blur-md bg-gradient-to-r from-black/30 to-blue-900/30 border-b border-white/10 px-8 py-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                                    Moje Databáze
                                </h1>
                                <div className="flex items-center space-x-6 text-sm">
                                    <span className="text-blue-200/90 font-medium">
                                        {displayedMovies.length} z {filteredAndSortedMovies.length}{" "}
                                        položek
                                        {searchTerm || selectedGenre !== "all"
                                            ? ` (filtrováno z ${allMovies.length} celkem)`
                                            : ""}
                                    </span>
                                    {hasMoreMovies && (
                                        <span className="text-white/60">• Scrolluj pro načtení dalších</span>
                                    )}
                                </div>
                            </div>
                            
                            {stats && (
                                <div className="flex gap-3">
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                                        <div className="text-xs text-white/70 uppercase tracking-wider">Průměr</div>
                                        <div className="text-lg font-bold text-yellow-300">{stats.avgRating} ★</div>
                                    </div>
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                                        <div className="text-xs text-white/70 uppercase tracking-wider">Top rated</div>
                                        <div className="text-lg font-bold text-green-300">{stats.topRated}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-4 items-center">
                            <div className="flex-1 min-w-64">
                                <input
                                    type="text"
                                    placeholder="🔍 Hledat podle názvu, žánru nebo poznámek..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                                >
                                    <option value="all" className="bg-gray-800">
                                        Všechny žánry
                                    </option>
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre} className="bg-gray-800">
                                            {genre}
                                        </option>
                                    ))}
                                </select>
                                {(searchTerm || selectedGenre !== "all") && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-3 py-2 backdrop-blur-md bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-200 rounded-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        Vymazat
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className="scrollable-table max-h-96 overflow-y-auto backdrop-blur-sm bg-black/10"
                        style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "rgba(59, 130, 246, 0.5) rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <style jsx>{`
                .scrollable-table::-webkit-scrollbar {
                    width: 8px;
                }
                .scrollable-table::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                }
                .scrollable-table::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.5);
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .scrollable-table::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.7);
                }
            `}</style>
                        <table className="w-full">
                            <thead className="backdrop-blur-md bg-black/40 sticky top-0 z-10 border-b border-white/10">
                                <tr>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Obal
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="title">Název</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="year">Rok</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="genre">Žánr</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="rating">Hodnocení</SortButton>
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Poznámky
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedMovies.map((movie, index) => (
                                    <tr
                                        key={`${movie.id}-${index}`}
                                        className="backdrop-blur-sm border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                                    >
                                        <td className="px-4 py-4">
                                            <div className="w-10 h-15 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg overflow-hidden flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                                                <img
                                                    src={movie.coverUrl}
                                                    alt={`${movie.title} cover`}
                                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = `https://via.placeholder.com/40x60/374151/white?text=${movie.title.charAt(0)}`;
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-semibold text-white/95 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                                                {movie.title}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm bg-blue-500/20 border border-blue-400/20 text-blue-200 shadow-lg">
                                                {movie.year}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white/90 shadow-lg">
                                                {movie.genre}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center space-x-1">
                                                <div className="flex items-center backdrop-blur-sm bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-2 py-1 shadow-lg">
                                                    <span className="text-sm font-bold text-yellow-300 drop-shadow-sm">
                                                        {movie.rating} ★
                                                    </span>
                                                    <span className="text-xs text-yellow-200/70 ml-1">
                                                        /10
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs text-white/80 max-w-xs line-clamp-2 leading-relaxed drop-shadow-sm group-hover:text-white/90 transition-colors duration-300">
                                                {movie.notes}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {loading && displayedMovies.length > 0 && (
                            <div className="backdrop-blur-md bg-black/20 border-t border-white/10 px-8 py-4 text-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400 mx-auto"></div>
                            </div>
                        )}

                        {!hasMoreMovies && displayedMovies.length > 0 && (
                            <div className="backdrop-blur-md bg-black/20 border-t border-white/10 px-8 py-4 text-center">
                                <span className="text-sm text-white/60 font-medium drop-shadow-sm">
                                    {searchTerm || selectedGenre !== "all"
                                        ? `✓ Zobrazeno všech ${displayedMovies.length} filtrovaných výsledků`
                                        : `✓ Načteno všech ${displayedMovies.length} položek`}
                                </span>
                            </div>
                        )}
                    </div>

                    {displayedMovies.length === 0 && !loading && (
                        <div className="text-center py-16 backdrop-blur-sm">
                            <div className="text-5xl mb-4">🎬</div>
                            <p className="text-lg text-white/60 font-medium drop-shadow-sm mb-4">
                                {searchTerm || selectedGenre !== "all"
                                    ? "Žádné filmy neodpovídají vašim filtrům"
                                    : "Databáze je prázdná"}
                            </p>
                            {(searchTerm || selectedGenre !== "all") && (
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 backdrop-blur-md bg-blue-600/30 hover:bg-blue-500/40 border border-blue-400/30 text-white rounded-lg transition-all duration-300 font-medium"
                                >
                                    Vymazat filtry
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
*/}