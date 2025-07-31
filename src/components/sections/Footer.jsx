import { RevealOnScroll } from "../RevealOnScroll";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@material-tailwind/react";
import Zoom from "@mui/material/Zoom";

import Youtube from "/socials/S_1_YOUTUBE.svg";
import Instagram from "/socials/S_2_INSTAGRAM.svg";
import X from "/socials/S_3_X.svg";
import Steam from "/socials/S_4_STEAM.svg";
import GitHub from "/socials/S_5_GITHUB.svg";
import Gmail from "/socials/S_6_GMAIL.svg";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative w-full pb-9" id="footer">
            <div className="mx-auto w-full max-w-7xl px-8">
                <RevealOnScroll>
                    <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between border-white/10">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-gray-300 md:mb-0"
                        >
                            &copy; {currentYear}{" "}
                            <Tooltip
                                title="Created in React with ❤️ by MichalBr."
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                MichalBr
                            </Tooltip>
                            . All Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                            <Tooltip
                                title="Youtube"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="https://www.youtube.com/@MichalBr"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={Youtube}
                                        alt="Youtube"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip
                                title="Instagram"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="https://www.instagram.com/brmihal/"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={Instagram}
                                        alt="Instagram"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip
                                title="X"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="https://x.com/TheMichalBr"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={X}
                                        alt="X"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(29,161,242,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip
                                title="Steam"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="https://steamcommunity.com/id/misakbr2/"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={Steam}
                                        alt="Steam"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip
                                title="GitHub"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="https://github.com/TheMichalBr"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={GitHub}
                                        alt="GitHub"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip
                                title="Gmail (Email)"
                                slots={{ transition: Zoom }}
                                className="transition-all duration-200"
                            >
                                <Typography
                                    as="a"
                                    href="mailto:biz.michalbr@gmail.com"
                                    className="opacity-80 transition-opacity hover:opacity-100"
                                >
                                    <img
                                        src={Gmail}
                                        alt="Gmail"
                                        className="h-6 w-6 filter invert group-hover:invert-0 group-hover:brightness-150 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(115,30,240,0.8)]"
                                    />
                                </Typography>
                            </Tooltip>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </footer>
    );
}

export default Footer;