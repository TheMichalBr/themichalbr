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