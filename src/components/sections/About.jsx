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

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-[#1e20243a]">
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

          <div className="rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all mt-8 py-8 bg-[#1e20243a]">
            <div className="max-w-6xl mx-auto px-4">
              <Video videoUrl="https://www.youtube.com/watch?v=VgQDsqOi2wo" />
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[#1e20243a]">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education and Jobs</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Information Technologies </strong> - at the PEF Faculty of Mendel University
                  (2024-Present)
                </li>
                <li>
                  I successfully finished studying Information technology in High school and English language school.
                </li>
                <li>
                  I am currently a full-time student and do not work anywhere.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[#1e20243a]" id="contact">
              <h3 className="text-xl font-bold mb-4"> 💼 Contact me </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Get in Touch
                  </h4>
                  <p>
                    If you're interested or have any questions, since I don't have everything written here, feel free to email me or message me at @MichalBr on Discord.
                  </p>
                  <br></br>

<div
  className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 px-2 pb-4"
>
  <a
    href="mailto:biz.michalbr@gmail.com"
    className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
    <span className="truncate max-w-[7.5rem] sm:max-w-none">Email</span>
  </a>
  <a
    href="https://discord.gg/QkSbBCDyQY"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
</svg>
    <span className="truncate max-w-[7.5rem] sm:max-w-none">Discord</span>
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