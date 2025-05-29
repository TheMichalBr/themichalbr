import React from "react";
import { Typography } from "@material-tailwind/react";
import { RevealOnScroll } from "../RevealOnScroll";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import Youtube from "/socials/1_Youtube.svg";
import Instagram from "/socials/2_Instagram.svg";
import X from "/socials/3_X.svg";
import Steam from "/socials/4_Steam.svg";
import GitHub from "/socials/5_GitHub.svg";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
    <footer className="relative w-full pb-9">
        <div className="mx-auto w-full max-w-7xl px-8">
        <RevealOnScroll>
            <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between border-white/10">
            <Typography variant="small" className="mb-4 text-center font-normal text-gray-300 md:mb-0">
                &copy; {currentYear} <Tooltip title="Created in React with ❤️ by MichalBr." slots={{ transition: Zoom }} className="transition-all duration-200">MichalBr</Tooltip>. All Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                <Tooltip title="Youtube" slots={{ transition: Zoom }} className="transition-all duration-200">
                <Typography as="a" href="https://www.youtube.com/@MichalBr" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                                        src= {Youtube}
                                        alt="Youtube"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
                />
                </Typography>
                </Tooltip>
                <Tooltip title="Instagram" slots={{ transition: Zoom }} className="transition-all duration-200">
                <Typography as="a" href="https://www.instagram.com/brmichl/" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                                        src= {Instagram}
                                        alt="Instagram"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(225,48,108,0.8)]"
                />
                </Typography>
                </Tooltip>
                <Tooltip title="X" slots={{ transition: Zoom }} className="transition-all duration-200">
                <Typography as="a" href="https://x.com/TheMichalBr" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                                        src= {X}
                                        alt="X"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(29,161,242,0.8)]"
                />
                </Typography>
                </Tooltip>
                <Tooltip title="Steam" slots={{ transition: Zoom }} className="transition-all duration-200">
                <Typography as="a" href="https://steamcommunity.com/id/misakbr2/" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                                        src= {Steam}
                                        alt="Steam"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                />
                </Typography>
                </Tooltip>
                <Tooltip title="GitHub" slots={{ transition: Zoom }} className="transition-all duration-200">
                <Typography as="a" href="https://github.com/TheMichalBr" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                                        src= {GitHub}
                                        alt="GitHub"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
                </Typography>
                </Tooltip>
            </div>
            </div>
        </RevealOnScroll>
        </div>
    </footer>
    );
};

export default Footer;