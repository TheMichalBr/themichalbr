import { Typography } from "@material-tailwind/react";
import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
    <footer className="relative w-full pb-9">
        <div className="mx-auto w-full max-w-7xl px-8">
        <RevealOnScroll>
            <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
                &copy; {currentYear} MichalBr. All Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a2.99 2.99 0 00-2.106-2.106C19.845 3.5 12 3.5 12 3.5s-7.845 0-9.392.58a2.99 2.99 0 00-2.106 2.106C0 7.733 0 12 0 12s0 4.267.502 5.814a2.99 2.99 0 002.106 2.106C4.155 20.5 12 20.5 12 20.5s7.845 0 9.392-.58a2.99 2.99 0 002.106-2.106C24 16.267 24 12 24 12s0-4.267-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.62-5.478 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z"></path>
                </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.693 4.693 0 002.048-2.59 9.36 9.36 0 01-2.965 1.13 4.678 4.678 0 00-7.965 4.265A13.267 13.267 0 011.671 3.15a4.678 4.678 0 001.447 6.24 4.65 4.65 0 01-2.12-.586v.06a4.678 4.678 0 003.752 4.584 4.693 4.693 0 01-2.114.08 4.678 4.678 0 004.367 3.245A9.38 9.38 0 010 20.408a13.233 13.233 0 007.18 2.105c8.616 0 13.324-7.142 13.324-13.324 0-.203-.005-.406-.014-.608a9.525 9.525 0 002.353-2.434z"></path>
                </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.62-5.478 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z"></path>
                </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.62-5.478 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z"></path>
                </svg>
                </Typography>
            </div>
            </div>
        </RevealOnScroll>
        </div>
    </footer>
    );
};

export default Footer;