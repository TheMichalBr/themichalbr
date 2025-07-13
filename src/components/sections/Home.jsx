import { HomeBackGround } from "./HomeBackGround";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <HomeBackGround />
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="relative mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="relative inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MichalBr
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/30 hover:scale-105">
                🎮 God Gamer
              </span>
              <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/30 hover:scale-105">
                🎥 Content Creator
              </span>
              <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/30 hover:scale-105">
                💻 Developer
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Creating{" "}
              <span className="text-cyan-400 font-medium bg-cyan-400/10 px-1 py-0.5 rounded mx-0.5">
                entertaining content
              </span>
              ,{" "}
              <span className="text-blue-400 font-medium bg-blue-400/10 px-1 py-0.5 rounded mx-0.5">
                clicking heads and dominating in games
              </span>
              , and building{" "}
              <span className="text-purple-300 font-medium bg-purple-400/10 px-1 py-0.5 rounded mx-0.5">
                clean and responsive apps and great games
              </span>
              .
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From chicken dinners to clean code – creativity meets precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-12">
            <a
              href="#aboutme"
              className="group relative bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform active:scale-95 w-full sm:w-auto min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
              className="group relative border-2 border-blue-500/50 text-blue-400 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:border-blue-400 hover:text-blue-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 backdrop-blur-sm transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};