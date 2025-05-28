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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" id="contact">
              <h3 className="text-xl font-bold mb-4"> 💼 Contact me </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Get in Touch
                  </h4>
                  <p>
                    If you're interested or have any questions, since I don't have everything written here, feel free to email me or message me at @MichalBr on Discord.
                  </p>

<div className="flex flex-col md:flex-row gap-3 justify-center items-center px-8 pb-8">
        <a
          href="mailto:biz.michalbr@gmail.com"
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold transition-all duration-150"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6" />
          </svg>
          E-mail
        </a>
        <a
          href="https://discord.com/users/your-discord-id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all duration-150"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.074.074 0 0 0-.078.037c-.34.607-.719 1.396-.984 2.013a18.524 18.524 0 0 0-5.59 0 12.583 12.583 0 0 0-.997-2.013a.077.077 0 0 0-.078-.037c-1.432.327-2.814.812-4.11 1.569a.07.07 0 0 0-.032.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 0 0 .031.056c1.73 1.27 3.415 2.048 5.077 2.568a.077.077 0 0 0 .084-.027c.391-.535.739-1.1 1.037-1.693a.076.076 0 0 0-.041-.104c-.552-.21-1.077-.465-1.584-.755a.077.077 0 0 1-.008-.127c.106-.08.213-.163.316-.246a.074.074 0 0 1 .077-.01c3.33 1.522 6.94 1.522 10.227 0a.073.073 0 0 1 .078.009c.104.083.21.166.317.246a.077.077 0 0 1-.006.127c-.507.29-1.032.545-1.584.755a.076.076 0 0 0-.04.105c.3.592.647 1.158 1.036 1.692a.076.076 0 0 0 .084.028c1.663-.52 3.348-1.298 5.078-2.568a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.006 0-1.823-.92-1.823-2.051 0-1.13.807-2.05 1.823-2.05 1.025 0 1.832.92 1.823 2.05 0 1.13-.807 2.05-1.823 2.05zm7.974 0c-1.006 0-1.823-.92-1.823-2.051 0-1.13.807-2.05 1.823-2.05 1.025 0 1.832.92 1.823 2.05 0 1.13-.798 2.05-1.823 2.05z"/>
          </svg>
          Discord
        </a>
      </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};