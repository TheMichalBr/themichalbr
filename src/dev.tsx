home verze


{/*

import { RevealOnScroll } from "../RevealOnScroll";
import HomeBackGround from "./HomeBackGround";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <HomeBackGround
        speed={4.5}
        scale={0.925}
        color="#071936"
        noiseIntensity={1.5}
        rotation={4.55}
      />
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="relative mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight tracking-tight">
              <span className="bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-700 bg-clip-text text-transparent select-none">
                Hi, I'm MichalBr
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/30 hover:scale-105 select-none">
                🎥 Content Creator
              </span>
              <span className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 select-none">
                🎮 Gamer
              </span>
              <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/30 hover:scale-105 select-none">
                💻 Developer
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-10 select-none">
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Creating{" "}
              <span className="text-cyan-400 font-medium bg-cyan-400/10 px-1 py-0.5 rounded mx-0.5">
                entertaining content,
              </span>{" "}
              playing{" "}
              <span className="text-blue-400 font-medium bg-blue-400/10 px-1 py-0.5 rounded mx-0.5">
                games to dominate the battleground,
              </span>{" "}
              and building{" "}
              <span className="text-purple-400 font-medium bg-purple-400/10 px-1 py-0.5 rounded mx-0.5">
                clean and responsive apps and great games.
              </span>
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From chicken dinners to clean code – creativity meets precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-12">
            <a
              href="#aboutme"
              className="group relative bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform active:scale-95 w-full sm:w-auto min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 select-none cursor-pointer"
              aria-label="Learn more about me"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                More About me
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#footer"
              className="group relative border-2 border-indigo-600/50 text-blue-500 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:border-blue-400 hover:text-blue-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 backdrop-blur-sm transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 select-none cursor-pointer"
              aria-label="Get in touch with me"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm animate-pulse">
                Contact me
                <svg
                  className="w-3 h-3 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

















          <div className="flex justify-center pt-20">
            <div className="flex flex-col items-center gap-3 group cursor-pointer">
              <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">Scroll down</span>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center group-hover:border-gray-400 transition-colors">
                <div className="w-1 h-2 bg-gray-500 rounded-full mt-2 animate-bounce group-hover:bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );



    return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0"
    >
      <HomeBackGround
        speed={4.5}
        scale={0.925}
        color="#071936"
        noiseIntensity={1.5}
        rotation={4.55}
      />

  
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            
         
            <div className="flex-1 space-y-8">
              
            
              <div className="space-y-6">
                
                <div className="space-y-3">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                    <span className="block text-white">MichalBr</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-300 font-light">
                    Creative Developer & Content Creator
                  </p>
                </div>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                  Building beautiful digital experiences with clean code and creative vision. I blend entertainment, gaming passion, and professional development into every project I touch.
                </p>
              </div>

             
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#aboutme"
                  className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 text-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#footer"
                  className="group relative px-8 py-4 border-2 border-gray-400 text-gray-300 font-bold rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Me
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </a>
              </div>

              
              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm italic">
                  "From chicken dinners to clean code – creativity meets precision."
                </p>
              </div>
            </div>























































			nova verze



			import React, { useEffect, useState, useCallback, useMemo } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import HomeBackGround from "./HomeBackGround";

const Icon = React.memo(({ name, className = "w-6 h-6" }) => {
	switch (name) {
		case "camera":
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
					<rect x="3" y="7" width="18" height="13" rx="2" ry="2"></rect>
					<path d="M16 3h-8l-1.5 4H3"></path>
					<circle cx="12" cy="13.5" r="3"></circle>
				</svg>
			);
		case "gamepad":
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="7" width="20" height="10" rx="3"></rect>
					<path d="M8 12h.01M11 10v4M14 12h.01M17 11v2" />
				</svg>
			);
		case "code":
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
			);
		case "palette":
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 3C7 3 3 6 3 10.5S7 18 12 18c.9 0 1.7-.1 2.5-.4.7-.3 1.8.1 2.4.7.8.8 2.1.8 2.9 0 .8-.8.8-2.1 0-2.9-.6-.6-1-1.6-.7-2.4C20 11.7 20 10.9 20 10.5 20 6 16 3 12 3z"/>
					<circle cx="9" cy="9" r="0.8" />
					<circle cx="14" cy="8" r="0.8" />
					<circle cx="16" cy="13" r="0.8" />
				</svg>
			);
		case "crosshair":
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="12" cy="12" r="7"></circle>
					<path d="M12 5v2M12 17v2M5 12h2M17 12h2M19 5l-2 2M7 17l-2 2M19 19l-2-2M7 7L5 5" />
				</svg>
			);
		default:
			return <span className={className} aria-hidden="true">?</span>;
	}
});
Icon.displayName = "Icon";

const InterestCard = React.memo(({ interest, idx, reducedMotion, handleCardKeyDown, smoothScrollTo }) => (
	<div
		role="button"
		tabIndex={0}
		aria-label={`${interest.title} — ${interest.desc}`}
		onClick={() => smoothScrollTo("#aboutme")}
		onKeyDown={(e) => handleCardKeyDown(e, () => smoothScrollTo("#aboutme"))}
		className={`group relative rounded-lg cursor-pointer will-change-transform ${
			reducedMotion ? "" : "animate-fade-in"
		}`}
		style={!reducedMotion ? { animationDelay: `${idx * 80}ms` } : {}}
		data-reveal
	>
		<div
			className={`relative p-5 sm:p-6 rounded-lg bg-gradient-to-br from-slate-800/40 via-slate-800/40 to-slate-900/40 border border-white/10 backdrop-blur-sm transition-all ${
				reducedMotion ? "duration-150" : "duration-300"
			} hover:border-white/30 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 group-hover:shadow-xl group-hover:shadow-cyan-500/10`}
		>
			<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

			<div className="relative z-10 space-y-3">
				<div className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-white/10 group-hover:border-white/30 group-hover:bg-gradient-to-br group-hover:from-slate-700/80 group-hover:to-slate-800/80 transition-all ${
					reducedMotion ? "" : "duration-300 group-hover:scale-110 group-hover:-rotate-3"
				} text-white`} aria-hidden="true">
					<Icon name={interest.icon} className="w-7 h-7" />
				</div>

				<div className="space-y-2">
					<h3 className="text-sm sm:text-base font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300">{interest.title}</h3>
					<p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-300">{interest.desc}</p>
				</div>
			</div>
		</div>
	</div>
));
InterestCard.displayName = "InterestCard";

export const Home = () => {
	const interests = useMemo(() => [
		{ title: "Content Creator", desc: "Entertaining & Engaging", icon: "camera", color: "from-cyan-500 to-blue-500" },
		{ title: "Developer", desc: "Clean & Responsive Code", icon: "code", color: "from-purple-500 to-pink-500" },
		{ title: "Gamer", desc: "Competitive & Creative", icon: "crosshair", color: "from-blue-500 to-purple-500" },
		{ title: "Creator", desc: "Visuals & Streams", icon: "palette", color: "from-pink-500 to-cyan-500" }
	], []);

	const [reducedMotion, setReducedMotion] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReducedMotion(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);

	const roles = useMemo(() => ["Content Creator.", "Developer.", "Gamer."], []);
	const [text, setText] = useState(roles[0]);
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);

	useEffect(() => {
		if (reducedMotion) {
			setText(roles[0]);
			return;
		}
		const fullText = roles[loopNum % roles.length];
		let timeout = null;
		const typingSpeed = isDeleting ? 50 : 120;

		if (!isDeleting && text === fullText) {
			timeout = setTimeout(() => setIsDeleting(true), 1200);
		} else if (isDeleting && text === "") {
			setIsDeleting(false);
			setLoopNum((n) => (n + 1) % roles.length);
		} else {
			timeout = setTimeout(() => {
				const nextText = isDeleting
					? fullText.substring(0, text.length - 1)
					: fullText.substring(0, text.length + 1);
				setText(nextText);
			}, typingSpeed);
		}
		return () => clearTimeout(timeout);
	}, [text, isDeleting, loopNum, reducedMotion, roles]);

	const smoothScrollTo = useCallback((selector) => {
		const el = document.querySelector(selector);
		if (!el) return;
		el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
	}, [reducedMotion]);

	const handleCardKeyDown = useCallback((e, onClick) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick();
		}
	}, []);

	return (
		<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0">
			<HomeBackGround speed={4.5} scale={0.925} color="#071936" noiseIntensity={1.5} rotation={4.55} />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
			</div>
			
			<RevealOnScroll distance={40} stagger={80}>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-28">
						
						<div className="flex-1 space-y-8 max-w-2xl mx-auto lg:mx-0" data-reveal>
							<div className="space-y-6">
								<div className="space-y-3">
									<h1
										className={`text-6xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight will-change-transform ${
											reducedMotion ? "transition-none" : "transition-all duration-1000"
										}`}
										aria-label="Name"
									>
										<span className="block text-white">MichalBr</span>
									</h1>

									<div className="flex items-baseline justify-center lg:justify-start gap-3 flex-wrap">
										<span className="text-lg sm:text-2xl text-gray-300 font-light leading-none">Hello, I am</span>

										<span className="relative inline-flex items-baseline h-[32px] sm:h-[40px] overflow-visible" aria-live="polite" aria-atomic="true">
											<span className="inline-block text-lg sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 leading-none">
												{text}
											</span>
											<span className="inline-block ml-2 text-lg sm:text-2xl font-semibold text-cyan-400" style={{lineHeight:1, willChange: "opacity"}}>
												<span style={{display:"inline-block", animation:"blink 1.2s steps(2,start) infinite"}}>|</span>
											</span>
										</span>
									</div>

								</div>

								<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
									Creating entertaining content, playing games to dominate the battleground, and building clean and responsive apps and great games.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 pt-2">
								<a
									href="#aboutme"
									onClick={(e) => { e.preventDefault(); smoothScrollTo("#aboutme"); }}
									className="group relative px-7 py-3.5 bg-white text-gray-900 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30 overflow-hidden will-change-transform"
									aria-label="Go to about section"
								>
									<span className="relative z-10 flex items-center justify-center gap-2">
										More About me
										<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
										</svg>
									</span>
									<div className="absolute inset-0 bg-gray-100 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
								</a>

								<a
									href="#footer"
									onClick={(e) => { e.preventDefault(); smoothScrollTo("#footer"); }}
									className="group relative px-7 py-3.5 border-2 border-gray-500 text-gray-300 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30 will-change-transform"
									aria-label="Contact me"
								>
									<span className="flex items-center justify-center gap-2">
										Contact me
										<svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</span>
								</a>
							</div>

							<div className="pt-6 border-t border-gray-700/50">
								<p className="text-gray-400 text-xs sm:text-sm italic leading-relaxed">
									"From chicken dinners to clean code – creativity meets precision."
								</p>
							</div>
						</div>

						<div className="flex-1 mt-16 lg:mt-0 max-w-2xl mx-auto lg:mx-0 w-full">
							<div className="grid grid-cols-2 gap-4 sm:gap-5">
								{interests.map((interest, idx) => (
									<InterestCard
										key={interest.title}
										interest={interest}
										idx={idx}
										reducedMotion={reducedMotion}
										handleCardKeyDown={handleCardKeyDown}
										smoothScrollTo={smoothScrollTo}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="flex justify-center pt-20 lg:pt-24">
						<button
							onClick={() => smoothScrollTo("#equipment")}
							className="group flex flex-col items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30 rounded-lg p-2"
							aria-label="Scroll to next section"
						>
							<span className="text-xs sm:text-sm font-medium group-hover:text-gray-200 transition-colors">Scroll down</span>
							<svg className="w-6 h-6 animate-bounce group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</button>
					</div>
				</div>
			</RevealOnScroll>

			<style>{`@keyframes blink{50%{opacity:0}}`}</style>
		</section>
	);
};
*/
}



































































import { useState, useEffect, useMemo, useCallback } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import caseI from "/equipment/E_1_CASE.webp";
import psuI from "/equipment/E_2_PSU.webp";
import mbI from "/equipment/E_3_MB.webp";
import cpuI from "/equipment/E_4_CPU.webp";
import cpucoolerI from "/equipment/E_5_CPUCOOLER.webp";
import gpuI from "/equipment/E_6_GPU.webp";
import ramI from "/equipment/E_7_RAM.webp";
import hddI from "/equipment/E_8_HDD.webp";
import ssdI from "/equipment/E_9_SSD.webp";
import osI from "/equipment/E_10_OS.webp";
import mmonitorI from "/equipment/E_11_MMONITOR.webp";
import smonitor1I from "/equipment/E_12_SMONITOR.webp";
import smonitor2I from "/equipment/E_13_SMONITOR.webp";
import keyboardI from "/equipment/E_14_KEYBOARD.webp";
import mouseI from "/equipment/E_15_MOUSE.webp";
import mousepadI from "/equipment/E_16_MOUSEPAD.webp";
import headsetI from "/equipment/E_17_HEADSET.webp";
import microphoneI from "/equipment/E_18_MICROPHONE.webp";
import mobileI from "/equipment/E_19_MOBILE.webp";
import consoleI from "/equipment/E_20_CONSOLE.webp";

const equipmentData = [
	{
		category: "COMPUTER CASE",
		name: "Fractal Design Define 7",
		image: caseI,
		specs: {
			color: "Black",
			glass: "TG Dark Tint",
			size: "Midi Tower",
		},
	},
	{
		category: "POWER SUPPLY",
		name: "Corsair HX1000",
		image: psuI,
		specs: {
			power: "1000 W",
			efficiency: "80 PLUS Platinum",
			modularity: "Fully",
		},
	},
	{
		category: "MOTHERBOARD",
		name: "MSI MPG X870E CARBON WIFI",
		image: mbI,
		specs: {
			biosVersion: "7E49v1A70",
			formFactor: "ATX",
			socket: "AM5",
			chipset: "X870E",
		},
	},
	{
		category: "PROCESSOR",
		name: "AMD Ryzen 9 9900X",
		image: cpuI,
		specs: {
			cores: "12 cores / 24 threads",
			baseClock: "4.4 GHz",
			boostClock: "5.6 GHz",
			socket: "AM5",
			architecture: "Zen 5 - Granite Ridge",
		},
	},
	{
		category: "PROCESSOR COOLER",
		name: "Noctua NH-U9S",
		image: cpucoolerI,
		specs: {
			version: "chromax.black",
			type: "PWM - Air Cooler",
			height: "125 mm",
		},
	},
	{
		category: "GRAPHICS CARD",
		name: "NVIDIA MSI GeForce RTX 2070",
		image: gpuI,
		specs: {
			version: "GAMING Z",
			memory: "8 GB GDDR6",
			baseClock: "1410 MHz",
			boostClock: "1620 MHz",
			architecture: "TU104 - Turing",
		},
	},
	{
		category: "COMPUTER MEMORY",
		name: "Kingston Fury Beast",
		image: ramI,
		specs: {
			type: "DDR5",
			capacity: "32 GB (2x16 GB)",
			speed: "6000 MHz",
			latency: "CL30",
		},
	},
	{
		category: "HARD DISK DRIVE",
		name: "WD Ultrastar DC HC320",
		image: hddI,
		specs: {
			capacity: "8 TB",
			interface: "SATA III",
			rpm: "7200 RPM",
			cache: "256 MB",
		},
	},
	{
		category: "SOLID STATE DRIVE",
		name: "Samsung SSD 990 PRO",
		image: ssdI,
		specs: {
			capacity: "1 TB",
			interface: "NVMe - PCIe 4.0",
		},
	},
	{
		category: "OPERATING SYSTEM",
		name: "Windows 11",
		image: osI,
		specs: {
			version: "Professional (Pro)",
			build: "25H2",
		},
	},
	{
		category: "MAIN MONITOR",
		name: "Acer Predator XB273UNX",
		image: mmonitorI,
		specs: {
			size: "27 inches",
			panel: "IPS",
			resolution: "2560x1440 (2K)",
			refreshRate: "270 Hz",
		},
	},
	{
		category: "SIDE MONITOR",
		name: "Zowie by BenQ XL2720",
		image: smonitor1I,
		specs: {
			size: "27 inches",
			panel: "TN",
			resolution: "1920x1080 (FullHD)",
			refreshRate: "144 Hz",
		},
	},
	{
		category: "SIDE MONITOR",
		name: "Iiyama PLE2209HDS",
		image: smonitor2I,
		specs: {
			size: "22 inches",
			panel: "TN",
			resolution: "1920x1080 (FullHD)",
			refreshRate: "60 Hz",
		},
	},
	{
		category: "KEYBOARD",
		name: "Logitech G915 LIGHTSPEED TKL",
		image: keyboardI,
		specs: {
			switches: "GL Linear - Red",
			layout: "TKL",
			connectivity: "Wireless",
		},
	},
	{
		category: "MOUSE",
		name: "Logitech G Pro X Superlight 2",
		image: mouseI,
		specs: {
			dpi: "400 DPI",
			pollingRate: "8000 Hz",
			weight: "60 g",
			sensor: "HERO 25K",
			connectivity: "Wireless",
		},
	},
	{
		category: "MOUSEPAD",
		name: "Logitech G640 Large Cloth",
		image: mousepadI,
		specs: {
			size: "Large",
			surface: "Cloth",
			thickness: "3 mm",
			base: "Rubber",
		},
	},
	{
		category: "HEADSET",
		name: "Logitech G Pro X 2 LIGHTSPEED",
		image: headsetI,
		specs: {
			connectivity: "Wireless",
			microphone: "Blue VO!CE",
			battery: "50+ hours",
		},
	},
	{
		category: "MICROPHONE",
		name: "HyperX Quadcast",
		image: microphoneI,
		specs: {
			connection: "USB",
			type: "Condenser",
		},
	},
	{
		category: "MOBILE",
		name: "iPhone 17",
		image: mobileI,
		specs: {
			memory: "8 GB",
			storage: "256 GB",
			processor: "Apple A19",
		},
	},
	{
		category: "CONSOLE",
		name: "Xbox 360",
		image: consoleI,
		specs: {
			storage: "250 GB",
			other: "Samsung Gear VR",
			table: "Electric Table",
		},
	},
];

const categoryFilters = [
	"ALL",
	"COMPUTER",
	"PERIPHERALS",
	"MONITORS",
	"AUDIO",
	"MOBILE & CONSOLES",
	"OTHER",
];

const categoryMap = {
	"COMPUTER CASE": "COMPUTER",
	"POWER SUPPLY": "COMPUTER",
	MOTHERBOARD: "COMPUTER",
	PROCESSOR: "COMPUTER",
	"PROCESSOR COOLER": "COMPUTER",
	"GRAPHICS CARD": "COMPUTER",
	"COMPUTER MEMORY": "COMPUTER",
	"HARD DISK DRIVE": "COMPUTER",
	"SOLID STATE DRIVE": "COMPUTER",
	"OPERATING SYSTEM": "COMPUTER",
	KEYBOARD: "PERIPHERALS",
	MOUSE: "PERIPHERALS",
	MOUSEPAD: "PERIPHERALS",
	"MAIN MONITOR": "MONITORS",
	"SIDE MONITOR": "MONITORS",
	HEADSET: "AUDIO",
	MICROPHONE: "AUDIO",
	MOBILE: "MOBILE & CONSOLES",
	CONSOLE: "MOBILE & CONSOLES",
};

const getCategoryGroup = (category) => categoryMap[category] || "OTHER";

const formatSpecKey = (key) => {
	return key
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (str) => str.toUpperCase())
		.trim();
};

const EquipmentCard = ({ item, index, onClick }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageError, setImageError] = useState(false);

	useEffect(() => {
		const timer = setTimeout(
			() => setIsVisible(true),
			Math.min(index * 50, 1000)
		);
		return () => clearTimeout(timer);
	}, [index]);

	const handleClick = useCallback(() => {
		onClick?.(item);
	}, [item, onClick]);

	const handleImageLoad = useCallback(() => {
		setImageLoaded(true);
		setImageError(false);
	}, []);

	const handleImageError = useCallback(() => {
		setImageError(true);
		setImageLoaded(true);
	}, []);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				handleClick();
			}
		},
		[handleClick]
	);

	const displaySpecs = useMemo(
		() => Object.entries(item.specs).slice(0, 2),
		[item.specs]
	);

	return (
		<article
			className={`group relative bg-gradient-to-br from-slate-800/40 via-slate-800/40 to-slate-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400/40 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			onClick={handleClick}
			role="button"
			tabIndex={0}
			onKeyDown={handleKeyDown}
			aria-label={`View details for ${item.name}`}
			data-reveal
		>
			<div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-4">
				{!imageLoaded && (
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
					</div>
				)}

				{imageError ? (
					<div className="flex flex-col items-center justify-center text-gray-400">
						<svg
							className="w-12 h-12 mb-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span className="text-xs">Image not available</span>
					</div>
				) : (
					<img
						src={item.image}
						alt={`${item.name} - ${item.category}`}
						className={`max-w-full max-h-full object-contain transition-all duration-450 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
							}`}
						onLoad={handleImageLoad}
						onError={handleImageError}
						loading="lazy"
					/>
				)}

				<div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			<div className="p-5">
				<div className="mb-2">
					<span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
						{item.category}
					</span>
				</div>

				<h3 className="text-base font-semibold text-gray-200 leading-tight mb-4 group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
					{item.name}
				</h3>

				<dl className="text-xs text-gray-400 space-y-2">
					{displaySpecs.map(([key, value]) => (
						<div key={key} className="flex justify-between items-center gap-2">
							<dt className="capitalize font-medium text-gray-400 shrink-0">
								{formatSpecKey(key)}
							</dt>
							<dd className="text-gray-200 font-semibold text-right truncate flex-1 min-w-0">
								{value}
							</dd>
						</div>
					))}
				</dl>
			</div>

			<div className="absolute inset-0 bg-linear-to-t from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
		</article>
	);
};

const FilterButton = ({ filter, isActive, onClick }) => (
	<button
		onClick={() => onClick(filter)}
		className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${isActive
			? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
			: "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
		}`}
		aria-pressed={isActive}
	>
		{filter}
	</button>
);

const Modal = ({ item, onClose }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);

		const scrollY = window.scrollY;
		const style = document.body.style;

		style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
		style.position = "fixed";
		style.top = `-${scrollY}px`;
		style.width = "100%";

		const handleEscape = (e) => {
			if (e.key === "Escape") {
				setIsVisible(false);

				const currentScrollY =
					parseInt(document.body.style.top || "0", 10) * -1;
				const currentStyle = document.body.style;

				currentStyle.overflow = "unset";
				document.documentElement.style.overflow = "unset";
				currentStyle.position = "unset";
				currentStyle.top = "unset";
				currentStyle.width = "unset";
				window.scrollTo(0, currentScrollY);

				setTimeout(onClose, 200);
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => {
			style.overflow = "unset";
			document.documentElement.style.overflow = "unset";
			style.position = "unset";
			style.top = "unset";
			style.width = "unset";
			window.scrollTo(0, scrollY);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [onClose]);

	const handleClose = useCallback(() => {
		setIsVisible(false);

		const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
		const style = document.body.style;

		style.overflow = "unset";
		document.documentElement.style.overflow = "unset";
		style.position = "unset";
		style.top = "unset";
		style.width = "unset";
		window.scrollTo(0, scrollY);

		setTimeout(onClose, 200);
	}, [onClose]);

	const handleBackdropClick = useCallback(
		(e) => {
			if (e.target === e.currentTarget) handleClose();
		},
		[handleClose]
	);

	if (!item) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
				}`}
			onClick={handleBackdropClick}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<div className={`bg-gradient-to-br from-slate-800/40 via-slate-800/40 to-slate-900/40 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ${isVisible ? "scale-100" : "scale-95"
				}`} onClick={(e) => e.stopPropagation()}>
				<header className="sticky top-0 bg-linear-to-r from-slate-800/40 via-slate-800/40 to-slate-900/40 p-6 border-b border-white/10 z-10 rounded-2xl">
					<div className="flex items-center justify-between">
						<h3 id="modal-title" className="text-xl font-bold text-white select-none">
							Specifications
						</h3>
						<button
							onClick={handleClose}
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-800 cursor-pointer"
							aria-label="Close modal"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</header>

				<div className="overflow-y-auto max-h-[calc(90vh-100px)]">
					<div className="p-8">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="shrink-0">
								<div className="w-48 h-48 bg-linear-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center p-4">
									<img
										src={item.image}
										alt={`${item.name} - ${item.category}`}
										className="max-w-full max-h-full object-contain"
									/>
								</div>
							</div>

							<div className="flex-1 min-w-0">
								<span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block">
									{item.category}
								</span>

								<h3
									id="modal-description"
									className="text-2xl font-bold text-white mb-6 wrap-break-word"
								>
									{item.name}
								</h3>

								<div className="space-y-4">
									<div className="border-b border-white/10 mb-4" />
									<dl className="grid grid-cols-2 gap-3">
										{Object.entries(item.specs).map(([key, value]) => (
											<div
												key={key}
												className="bg-slate-800/30 rounded-md p-3 border border-white/5 hover:border-white/10 transition-colors duration-200"
											>
												<dt className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
													{formatSpecKey(key)}
												</dt>
												<dd className="text-white text-sm font-semibold">
													{value}
												</dd>
											</div>
										))}
									</dl>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Equipment = () => {
	const [selectedFilter, setSelectedFilter] = useState("ALL");
	const [selectedItem, setSelectedItem] = useState(null);
	const [isFilterChanging, setIsFilterChanging] = useState(false);

	const handleFilterChange = useCallback(
		(filter) => {
			if (filter === selectedFilter) return;

			setIsFilterChanging(true);
			setTimeout(() => {
				setSelectedFilter(filter);
				setIsFilterChanging(false);
			}, 175);
		},
		[selectedFilter]
	);

	const handleItemSelect = useCallback((item) => setSelectedItem(item), []);
	const handleModalClose = useCallback(() => setSelectedItem(null), []);

	const filteredEquipment = useMemo(() => {
		let filtered = equipmentData;

		if (selectedFilter !== "ALL") {
			filtered = filtered.filter(
				(item) => getCategoryGroup(item.category) === selectedFilter
			);
		}

		return filtered;
	}, [selectedFilter]);

	const equipmentCount = filteredEquipment.length;


	return (
		<section id="equipment" className="relative min-h-screen py-20 overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 relative z-10">
				<RevealOnScroll distance={30} stagger={80}>
					<header className="text-center mb-12" data-reveal>
						<h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent drop-shadow-lg select-none">
							Equipment
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Complete setup overview of my gaming and development hardware
						</p>
					</header>

					<nav className="flex flex-wrap justify-center gap-3 mb-8 select-none" role="tablist" data-reveal>
						{categoryFilters.map((filter) => (
							<FilterButton
								key={filter}
								filter={filter}
								isActive={selectedFilter === filter}
								onClick={handleFilterChange}
							/>
						))}
					</nav>

					<div className="text-center mb-8">
						<p className="text-gray-400 text-sm select-none">
							{`Showing ${equipmentCount} item${equipmentCount !== 1 ? "s" : ""}${selectedFilter !== "ALL" ? ` in ${selectedFilter}` : ""}.`}
						</p>
					</div>

					<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${isFilterChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"}`} data-reveal>
						{filteredEquipment.map((item, index) => (
							<EquipmentCard
								key={`${item.name}-${selectedFilter}`}
								item={item}
								index={index}
								onClick={handleItemSelect}
							/>
						))}
					</div>

					{equipmentCount === 0 && !isFilterChanging && (
						<div className="flex flex-col items-center justify-center py-24 px-4">
							<div className="w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
								<svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<rect x="3" y="3" width="18" height="18" rx="2" />
									<path d="M9 9h6v6H9z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2 select-none">No equipment found</h3>
							<p className="text-gray-400 text-center mb-8 select-none max-w-sm">
								Try selecting a different category to view available equipment.
							</p>
							{selectedFilter !== "ALL" && (
								<button
									onClick={() => handleFilterChange("ALL")}
									className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer"
								>
									Show all categories
								</button>
							)}
						</div>
					)}
				</RevealOnScroll>
			</div>

			{selectedItem && <Modal item={selectedItem} onClose={handleModalClose} />}
		</section>
	);
};

export default Equipment;
















































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