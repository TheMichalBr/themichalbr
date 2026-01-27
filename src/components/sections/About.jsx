import { RevealOnScroll } from "../RevealOnScroll";
import Video from "./Video";

export const About = () => {
  const hobbies = [
    "Gaming",
    "Movies",
    "Music",
    "Memes",
    "Art",
    "Creativity",
    "Content creation",
    "Editing",
    "Development",
    "Technology",
    "Travel",
    "Sports",
    "Collecting",
  ];

  const experience = [
    "C++",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "SQL",
    "Godot",
    "Source 2",
    "Unreal",
    "Adobe apps",
    "Git",
    "Krita",
    "Blender",
  ];

  const languages = [
    { name: "Czech", level: "Native" },
    { name: "Slovak", level: "Advanced" },
    { name: "English", level: "Advanced" },
    { name: "German", level: "Intermediate" },
    { name: "Spanish", level: "Beginner" },
  ];

  const cardClasses =
    "rounded-xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-[#1e20243a] to-[#2a2d353a] backdrop-blur-sm shadow-xl hover:shadow-2xl";
  const sectionClasses =
    "bg-white/5 rounded-xl p-5 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"; {/* bg-white/5 , dobré i bez*/}
  const tagClasses =
    "py-2 px-3 rounded-full text-sm transition-all duration-200 transform cursor-default flex-shrink-0 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]";

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center py-20 overflow-hidden"
      aria-label="About me - Section"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-br from-[#0845d1] to-[#015ea1] bg-clip-text text-transparent text-center drop-shadow-lg select-none">
            About me
          </h2>

          {/* About */}
          <div className={`${cardClasses} mb-8`}>
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed text-lg select-none">
                My name is Michal. I am 23 years old boy, from the Czech
                Republic, and currently living in Brno. I am a passionate gamer
                and content creator, as well as a developer with some knowledge
                of various programming languages and technologies. I am a chill
                guy with a questionable sense of humour. I am passionate about
                creating creative solutions, as well as building modern, clean,
                and responsive applications, websites and good games or
                modifications. I am eager to learn and grow, and I am excited by
                new challenges.
              </p>
            </div>

            {/* Education */}
            <div className={`${sectionClasses} mb-8`}>
              <div className="space-y-5 text-gray-300 leading-relaxed select-none">
                <div className="flex items-start">
                  <div
                    className="w-2 h-2 bg-blue-500/60 rounded-full mt-2 mr-4 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <strong className="text-blue-500">
                      Information Technologies
                    </strong>{" "}
                    - Mendel University
                    <span className="block text-sm text-gray-400">
                      2024 - Present
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-2 h-2 bg-blue-500/60 rounded-full mt-2 mr-4 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <strong className="text-blue-500">
                      English Language
                    </strong>{" "}
                    - AMIGAS Language School
                    <span className="block text-sm text-gray-400">
                      2022 - 2023 <span className="text-gray-500 text-xs">(Completed)</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-2 h-2 bg-blue-500/60 rounded-full mt-2 mr-4 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <strong className="text-blue-500">
                      Mobile Applications
                    </strong>{" "}
                    - High School of Information Technology, Postal Services, and Finance
                    <span className="block text-sm text-gray-400">
                      2018 - 2022 <span className="text-gray-500 text-xs">(Completed)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className={`${sectionClasses} mb-8`}>
              <h3 className="text-xl font-semibold mb-5 text-blue-500 flex items-center select-none">
                <svg
                  className="w-6 h-6 mr-2 inline-block text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
                  />
                </svg>
                Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-blue-500/15 border border-blue-500/30 rounded-lg p-3 text-center hover:bg-blue-500/25 hover:border-blue-500/50 transition-colors duration-300 transform select-none hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    <span className="font-medium text-blue-300">
                      {lang.name}
                    </span>
                    <div className="text-sm text-gray-400">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className={`${sectionClasses} min-w-0`}>
                <h3 className="text-xl font-semibold mb-5 text-blue-500 flex items-center select-none">
                  <svg
                    className="w-6 h-6 mr-2 inline-block text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <polygon
                      points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Hobbies
                </h3>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className={`${tagClasses} bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:border-blue-500/50 select-none`}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className={`${sectionClasses} min-w-0`}>
                <h3 className="text-xl font-semibold mb-5 text-blue-500 flex items-center select-none">
                  <svg
                    className="w-6 h-6 mr-2 inline-block text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 20h8M12 18v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Experience
                </h3>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {experience.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tagClasses} bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:border-blue-500/50 select-none`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Let's Connect */}
            <div className="rounded-xl p-5 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 min-w-0">
              <h3 className="text-xl font-semibold mb-3 text-gray-300 flex items-center select-none">
                <svg
                  className="w-6 h-6 mr-2 inline-block text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed select-none">
                Interested in collaboration or have questions, since I don't
                have everything written here? I'd love to hear from you! Feel
                free to email me or message on Discord.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 min-w-0 flex-1 sm:flex-initial">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 select-none">
                      Discord:
                    </span>
                    <span className="ml-2 text-gray-300 font-medium break-all select-auto">
                      @MichalBr
                    </span>
                  </div>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 min-w-0 flex-1 sm:flex-initial">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 select-none">
                      Email:
                    </span>
                    <span className="ml-2 text-gray-300 font-medium break-all select-auto">
                      biz.michalbr@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className={`${cardClasses} mb-8`}>
            <div className="max-w-4xl mx-auto">
              <Video videoUrl="https://www.youtube.com/watch?v=VgQDsqOi2wo" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};