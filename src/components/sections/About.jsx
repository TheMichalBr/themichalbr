import { RevealOnScroll } from "../RevealOnScroll";
import Video from "./Video.jsx";

export const About = () => {
  const Hob = ["Games", "Programing", "Content creation", "Editing", "Development", "Music", "Films", "Chess", "Collecting", "Exploring", "Technology", "Memes"];
  const Prog = ["C#", "C++", "HTML", "CSS", "JavaScript", "React", "Node.js", "Java", "Python", "SQL", "Godot", "Unity", "Source", "Unreal", "Adobe Photshop / Premiere"];

  return (
    <section id="aboutme" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            My name is Michal, I am 23 years old and I come from the Czech Republic and I currently live in Brno. I can speak Czech, English and slightly German and Spanish. Of course there are some pretty similar languages that I understand, but that's not the point.
            I am passionate gamer, content creator and also a programmer and developer with some experience in various programming languages and technologies. I have a passion for creating creative and innovative solutions and building modern, slick and cool applications or games. I am always eager to learn and grow, and I am excited to take on new challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {Hob.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Experience in</h3>
                <div className="flex flex-wrap gap-2">
                  {Prog.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all mt-8 py-8">
            <div className="max-w-6xl mx-auto px-4">
              <Video videoUrl="https://www.youtube.com/watch?v=VgQDsqOi2wo" />
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Information Technologies </strong> - at the PEF Faculty of Mendel University
                  (2024-Present)
                </li>
                <li>
                  I successfully finished studying Information technology in High school and English language school.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    EXAMPLE (EXAMPLE)
                  </h4>
                  <p>
                    EXAMPLEEXAMPLEEXAMPLEEXAMPLE
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    EXAMPLE (EXAMPLE)
                  </h4>
                  <p>
                    EXAMPLEEXAMPLEEXAMPLEEXAMPLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};