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
	>
		<div
			className={`relative p-5 sm:p-6 rounded-lg bg-gray-900/40 border border-gray-800/50 backdrop-blur-sm transition-all ${
				reducedMotion ? "duration-150" : "duration-300"
			} hover:border-gray-700/80 hover:bg-gray-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 group-hover:shadow-lg group-hover:shadow-gray-900/30`}
		>
			<div className="absolute inset-0 rounded-lg bg-linear-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

			<div className="relative z-10 space-y-3">
				<div className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gray-800/50 group-hover:bg-gray-800/80 transition-all ${reducedMotion ? "" : "duration-300 group-hover:scale-105 group-hover:-rotate-3"} text-white`} aria-hidden="true">
					<Icon name={interest.icon} className="w-7 h-7" />
				</div>

				<div className="space-y-1">
					<h3 className="text-sm sm:text-base font-bold text-white leading-tight">{interest.title}</h3>
					<p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">{interest.desc}</p>
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

	// eslint-disable-next-line no-unused-vars
	const blinkStyle = useMemo(() => (
		<style>{`@keyframes blink{50%{opacity:0}}`}</style>
	), []);

	return (
		<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-0">
			<HomeBackGround speed={4.5} scale={0.925} color="#071936" noiseIntensity={1.5} rotation={4.55} />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
			</div>
			
			<RevealOnScroll>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-28">
						
						<div className="flex-1 space-y-8 max-w-2xl mx-auto lg:mx-0">
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

									<div className="flex items-baseline justify-center lg:justify-start gap-2">
										<span className="text-lg sm:text-2xl text-gray-300 font-light leading-none">Hello, I am</span>

										<span className="relative inline-flex items-baseline h-8 sm:h-10 overflow-visible" aria-live="polite" aria-atomic="true">
											<span className="inline-block text-lg sm:text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-blue-300 leading-none">
												{text}
											</span>
											<span className="inline-block ml-2 text-lg sm:text-2xl font-semibold text-cyan-300" style={{lineHeight:1, willChange: "opacity"}}>
												<span style={{display:"inline-block", animation:"blink 1.2s steps(2,start) infinite"}}>|</span>
											</span>
										</span>
									</div>

								</div>

								<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
									Creating entertaining content, playing games to dominate the battleground, and building clean and responsive apps and great games.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-3 pt-4">
								<a
									href="#aboutme"
									onClick={(e) => { e.preventDefault(); smoothScrollTo("#aboutme"); }}
									className="group relative px-7 py-3.5 bg-white text-gray-900 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30 overflow-hidden will-change-transform"
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
									className="group relative px-7 py-3.5 border-2 border-gray-400 text-gray-300 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/20 will-change-transform"
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
							<div className="grid grid-cols-2 gap-3 sm:gap-4">
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
				</div>
			</RevealOnScroll>
		</section>
	);
};















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
*/}