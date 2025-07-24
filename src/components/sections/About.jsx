import { RevealOnScroll } from "../RevealOnScroll";
import Video from "./Video.jsx";

export const About = () => {
  const hobbies = [
    "Games",
    "Content creation",
    "Programming",
    "Development",
    "Editing",
    "Drawing",
    "Design",
    "Music",
    "Films",
    "Chess",
    "Collecting",
    "Exploring",
    "Technology",
    "Memes",
  ];

  const technologies = [
    "C#",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "Python",
    "SQL",
    "Godot",
    "Unity",
    "Source",
    "Unreal",
    "Photoshop",
    "Premiere",
    "Git",
    "Other",
  ];

  const languages = [
    { name: "Czech", level: "Native" },
    { name: "Slovak", level: "Advanced" },
    { name: "English", level: "Advanced" },
    { name: "German", level: "Intermediate" },
    { name: "Spanish", level: "Beginner" },
  ];

  const cardClasses =
    "rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-[#1e20243a] to-[#2a2d353a] backdrop-blur-sm shadow-2xl";
  const sectionClasses = "bg-white/5 rounded-lg p-6";
  const tagClasses =
    "py-2 px-3 rounded-full text-sm transition-all duration-200 cursor-default";

  {
    /* className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]" */
  }

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400 bg-clip-text text-transparent text-center select-none">
            About me
          </h2>

          <div className={`${cardClasses} mb-8`}>
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                My name is Michal. I am 23 years old, from the Czech Republic,
                and currently living in Brno. I am a passionate gamer and
                content creator, as well as an experienced programmer and
                developer with some knowledge of various programming languages
                and technologies. I am a chill guy with a questionable sense of
                humour. I am passionate about creating innovative and creative
                solutions, as well as building modern, clean, sleek and
                responsive applications, websites and good games or
                modifications. I am eager to learn and grow, and I am excited by
                new challenges.
              </p>
            </div>

            <div className={`${sectionClasses} mb-8`}>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                  />
                </svg>{" "}
                Education & Status
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Information Technologies</strong> - Mendel
                    University
                    <span className="block text-sm text-gray-400">
                      2024 - Present
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    Completed <strong>Information Technology </strong> studies
                    in High School and also finished{" "}
                    <strong>English language</strong> school.
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    Currently a full-time student, and do not work anywhere.
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <svg
                  className="w-6 h-6 text-purple-400 mr-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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
                </svg>{" "}
                Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center hover:bg-purple-500/20 transition-colors"
                  >
                    <span className="font-medium text-purple-300">
                      {lang.name}
                    </span>
                    <div className="text-sm text-gray-400">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className={sectionClasses}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-400 mr-2 inline-block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polygon
                      points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>{" "}
                  Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className={`${tagClasses} bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:border-blue-500/50 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]`}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              <div className={sectionClasses}>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                  <svg
                    className="w-6 h-6 text-cyan-400 mr-2 inline-block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
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
                  </svg>{" "}
                  Experience
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tagClasses} bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-500/50 hover:shadow-[0_2px_12px_rgba(6,182,212,0.3)]`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                <svg
                  className="w-6 h-6 text-white mr-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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
                </svg>{" "}
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-4">
                Interested in collaboration or have questions, since I don't
                have everything written here? I'd love to hear from you! Feel
                free to email me or message on Discord.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
                  <span className="text-sm text-gray-400">Discord:</span>
                  <span className="ml-2 text-white font-medium">@MichalBr</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
                  <span className="text-sm text-gray-400">Email:</span>
                  <span className="ml-2 text-white font-medium">
                    biz.michalbr@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClasses}>
            <div className="max-w-4xl mx-auto">
              <Video videoUrl="https://www.youtube.com/watch?v=VgQDsqOi2wo" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};