import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Hobbies = [
    "Game",
    "Content creation",
    "Game development",
    "Games",
    "Creating content",
    "Editing",
    "Programing",
    "Music",
    "Films",
    "Collecting",
    "Exploring",
    "Technology",
    "Memes",
  ];

  const ProgLan = ["C#", "C++", "HTML", "CSS", "Java", "JavaScript", "React", "Python", "SQL", "Godot", "Unity", "Source", "Unreal",];

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            My name is Michal, 23 years old and I've come from the Czech Republic – live in Brno.

I can speak well in Czech, English and bit of German and Spanish (and other similar Slavic languages).

I successfully finished studying Information technology in High school and English language school.

Now I studying Information Technologies at the PEF Faculty of Mendel University and trying to survive it.

My hobbies are games, technology, programing, creating content, editing, music, films, collecting, chess, exploring, memes and much more.

I'm not going to write everything here, but if you have any questions, feel free to just message me @MichalBr on Discord or on my e-mail biz.michalbr@gmail.com.
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> My Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {Hobbies.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Experience in</h3>
                <div className="flex flex-wrap gap-2">
                  {ProgLan.map((tech, key) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Information Technologies </strong> - Mendel University
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
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
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