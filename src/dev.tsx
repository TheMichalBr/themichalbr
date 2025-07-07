{/* # Thanks to Pedro Tech for amazing tutorial.

# DEV
        - Upravit texty a obsah (home,about,projects,games,equipment,loading screen)
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

export { Background };*/}