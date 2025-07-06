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

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between group navbar-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] 
                ${menuOpen ? "top-2.5 rotate-45 shadow-lg" : "top-0 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 2px 12px 0 rgba(6,182,212,0.18)"
                  : undefined,
              }}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] 
                ${menuOpen ? "opacity-0 left-3 scale-x-50" : "top-2 scale-x-100"}`}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] 
                ${menuOpen ? "top-2.5 -rotate-45 shadow-lg" : "top-4 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 2px 12px 0 rgba(6,182,212,0.18)"
                  : undefined,
              }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#aboutme" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${activeSection === "aboutme" ? "font-bold" : ""}`}>About me</a>
            <a href="#equipment" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${activeSection === "equipment" ? "font-bold" : ""}`}>Equipment</a>
            <a href="#games" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${activeSection === "games" ? "font-bold" : ""}`}>Games</a>
            <a href="#projects" className={`text-gray-300 hover:text-white transition-colors hover:scale-102 ${activeSection === "projects" ? "font-bold" : ""}`}>Projects</a>
          </div>
        </div>
      </div>
      <style>
        {`
          .navbar-hamburger.group:hover span {
            background: #38bdf8;
          }
        `}
      </style>
    </nav>
  );
};

{/* 

import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
      
      // Detekce scrollování pro změnu stylu navbaru
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { href: "#aboutme", label: "About me", id: "aboutme" },
    { href: "#equipment", label: "Equipment", id: "equipment" },
    { href: "#games", label: "Games", id: "games" },
    { href: "#projects", label: "Projects", id: "projects" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 px-3.5 py-0.5 ${
      scrolled || menuOpen 
        ? "bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-xl border-b border-white/20 shadow-2xl" 
        : "bg-[rgba(10, 10, 10, 0.7)] backdrop-blur-md border-b border-white/5 shadow-lg"
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <a 
            href="#home" 
            className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] relative group" 
            style={{ fontFamily: 'Bellibish' }}
          >
            M
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300" />
          </a>

          
          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between group navbar-hamburger transition-transform duration-300 ${
              menuOpen ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] group-hover:bg-cyan-400
                ${menuOpen ? "top-2.5 rotate-45 shadow-lg bg-cyan-400" : "top-0 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 2px 12px 0 rgba(6,182,212,0.4)"
                  : undefined,
              }}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] group-hover:bg-cyan-400
                ${menuOpen ? "opacity-0 left-3 scale-x-50" : "top-2 scale-x-100"}`}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-400 ease-[cubic-bezier(.77,0,.18,1)] group-hover:bg-cyan-400
                ${menuOpen ? "top-2.5 -rotate-45 shadow-lg bg-cyan-400" : "top-4 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 2px 12px 0 rgba(6,182,212,0.4)"
                  : undefined,
              }}
            />
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group ${
                  activeSection === link.id 
                    ? "text-white font-semibold" 
                    : ""
                }`}
              >
                {link.label}
                
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  activeSection === link.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} />
                
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-500/50 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100" />
                
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className={`md:hidden fixed top-16 left-0 w-full bg-[rgba(10, 10, 10, 0.98)] backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)] ${
        menuOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="px-8 py-6 space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={`block text-xl text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:scale-105 relative group ${
                activeSection === link.id 
                  ? "text-white font-semibold translate-x-2" 
                  : ""
              }`}
              style={{ 
                transitionDelay: menuOpen ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              
              <span className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${
                activeSection === link.id ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`} />
              
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

*/}


{/*
import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

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
      
      // Detekce scrollování pro dynamické pozadí
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Detekce směru scrollování
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, lastScrollY]);

  // Dynamické pozadí podle scroll pozice
  const getNavbarStyles = () => {
    if (menuOpen) {
      return "bg-[rgba(8, 8, 8, 0.98)] backdrop-blur-2xl border-b border-white/25 shadow-2xl";
    } else if (scrolled) {
      return "bg-[rgba(12, 12, 12, 0.95)] backdrop-blur-xl border-b border-white/20 shadow-xl";
    } else {
      return "bg-[rgba(10, 10, 10, 0.6)] backdrop-blur-md border-b border-white/5 shadow-lg";
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 px-3.5 py-0.5 transition-all duration-500 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] ${getNavbarStyles()}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="font-mono text-4xl text-white hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]" 
            style={{ fontFamily: 'Bellibish' }}
          >
            M
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between group navbar-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] 
                ${menuOpen ? "top-2.5 rotate-45 shadow-lg" : "top-0 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 4px 20px 0 rgba(6,182,212,0.3)"
                  : undefined,
              }}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] 
                ${menuOpen ? "opacity-0 left-3 scale-x-50" : "top-2 scale-x-100"}`}
            />
            <span
              className={`block absolute left-0 h-1 w-7 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] 
                ${menuOpen ? "top-2.5 -rotate-45 shadow-lg" : "top-4 rotate-0"}`}
              style={{
                boxShadow: menuOpen
                  ? "0 4px 20px 0 rgba(6,182,212,0.3)"
                  : undefined,
              }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#aboutme" 
              className={`text-gray-300 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] hover:scale-105 ${
                activeSection === "aboutme" ? "font-bold" : ""
              }`}
            >
              About me
            </a>
            <a 
              href="#equipment" 
              className={`text-gray-300 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] hover:scale-105 ${
                activeSection === "equipment" ? "font-bold" : ""
              }`}
            >
              Equipment
            </a>
            <a 
              href="#games" 
              className={`text-gray-300 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] hover:scale-105 ${
                activeSection === "games" ? "font-bold" : ""
              }`}
            >
              Games
            </a>
            <a 
              href="#projects" 
              className={`text-gray-300 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] hover:scale-105 ${
                activeSection === "projects" ? "font-bold" : ""
              }`}
            >
              Projects
            </a>
          </div>
        </div>
      </div>

      
      <div className={`absolute inset-0 -z-10 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] ${
        scrolled ? "backdrop-blur-2xl" : "backdrop-blur-md"
      }`} />
      
      
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] ${
        scrolled 
          ? "from-black/40 via-black/30 to-transparent" 
          : "from-black/20 via-black/10 to-transparent"
      }`} />

      <style>
        {`
          .navbar-hamburger.group:hover span {
            background: #38bdf8;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          
          @supports (backdrop-filter: blur(0)) {
            nav {
              backdrop-filter: blur(20px);
            }
          }
          
          
          @supports not (backdrop-filter: blur(0)) {
            nav {
              background: rgba(10, 10, 10, 0.9) !important;
            }
          }
        `}
      </style>
    </nav>
  );
};*/}