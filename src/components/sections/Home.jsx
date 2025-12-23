import React, { useEffect, useState, useCallback, useMemo } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import HomeBackGround from "./HomeBackGround";

const ROLES = ["Content Creator.", "Developer.", "Gamer."];
const TYPING_SPEED = { typing: 120, deleting: 50 };
const PAUSE_DURATION = 1200;

const useTypingEffect = (roles, reducedMotion) => {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (reducedMotion) return;
		const startTimeout = setTimeout(() => setHasStarted(true), 1000);
		return () => clearTimeout(startTimeout);
	}, [reducedMotion]);

	useEffect(() => {
		if (reducedMotion || !hasStarted) {
			return;
		}

		const fullText = roles[loopNum % roles.length];
		let timeout = null;

		if (!isDeleting && text === fullText) {
			timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
		} else if (isDeleting && text === "") {
			setIsDeleting(false);
			setLoopNum((n) => (n + 1) % roles.length);
		} else {
			const speed = isDeleting ? TYPING_SPEED.deleting : TYPING_SPEED.typing;
			timeout = setTimeout(() => {
				const nextText = isDeleting
					? fullText.substring(0, text.length - 1)
					: fullText.substring(0, text.length + 1);
				setText(nextText);
			}, speed);
		}

		return () => clearTimeout(timeout);
	}, [text, isDeleting, loopNum, reducedMotion, roles, hasStarted]);

	return text;
};

export const Home = React.memo(() => {
	const [reducedMotion, setReducedMotion] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReducedMotion(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);

	const text = useTypingEffect(ROLES, reducedMotion);

	const smoothScrollTo = useCallback((selector) => {
		const el = document.querySelector(selector);
		if (!el) return;
		el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
	}, [reducedMotion]);

	const blinkStyle = useMemo(() => (
		<style>{`@keyframes blink{50%{opacity:0}}`}</style>
	), []);

	return (
		<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-0">
			{blinkStyle}
			<HomeBackGround speed={4.5} scale={0.925} color="#071936" noiseIntensity={1.5} rotation={4.55} />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
			</div>
			
			<RevealOnScroll>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-28">
						
						<div className="flex-1 space-y-8 max-w-2xl mx-auto lg:mx-0">
							<div className="space-y-4">
								<div className="space-y-3">
									<h1
										className={`text-6xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight will-change-transform ${
											reducedMotion ? "transition-none" : "transition-all duration-1000"
										}`}
										aria-label="Name"
									>
										<span className="block text-white select-none">MichalBr</span>
									</h1>

									<div className="flex items-baseline justify-left lg:justify-start gap-2">
										<span className="text-lg sm:text-2xl text-gray-300 font-light leading-none select-none">Hello, I am</span>

										<span
											className="relative inline-flex items-baseline h-8 sm:h-10 overflow-visible"
											aria-live="polite"
											aria-atomic="true"
											aria-describedby="typing-description"
										>
											<span className="inline-block text-lg sm:text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-blue-300 leading-none select-none">
												{text}
											</span>
											<span
												className="inline-block ml-2 text-lg sm:text-2xl font-semibold text-cyan-300 select-none"
												style={{ lineHeight: 1, willChange: "opacity" }}
												aria-hidden="true"
											>
												<span style={{ display: "inline-block", animation: "blink 1.2s steps(2,start) infinite" }}>|</span>
											</span>
										</span>
										<span id="typing-description" className="sr-only">
											Typing animation showing different roles: Content Creator, Developer, Gamer
										</span>
									</div>

								</div>

								<p className="text-gray-400 text-lg base:text-base leading-relaxed font-light select-none">
									Creating entertaining content, playing games to dominate the battleground, and building clean and responsive apps and great games.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-3 pt-4 pb-4">
								<a
									href="#aboutme"
									onClick={(e) => { e.preventDefault(); smoothScrollTo("#aboutme"); }}
									className="group relative px-7 py-3.5 bg-white text-gray-900 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30 overflow-hidden will-change-transform"
									aria-label="Go to about section"
								>
									<span className="relative z-10 flex items-center justify-center gap-2 select-none">
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
									className="group relative px-7 py-3.5 border-2 border-gray-400 text-gray-300 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/20 will-change-transform"
									aria-label="Contact me"
								>
									<span className="flex items-center justify-center gap-2 select-none">
										Contact me
										<svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</span>
								</a>
							</div>
						</div>

					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
});

Home.displayName = "Home";