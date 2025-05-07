import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg px-3.5 py-0.5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-4xl text-white hover:scale-106 transition-colors" style={{ fontFamily: 'Bellibish' }}>M</a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#aboutme" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${
                activeSection === "aboutme" ? "font-bold" : ""}`}>About me</a>
            <a href="#equipment" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${
                activeSection === "equipment" ? "font-bold" : ""}`}>Equipment</a>
            <a href="#games" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${
                activeSection === "games" ? "font-bold" : ""}`}>Games</a>
            <a href="#projects" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${
                activeSection === "projects" ? "font-bold" : ""}`}>Projects</a>
          </div>
        </div>
      </div>
    </nav>
  );
};