import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (menuOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      window.scrollTo(0, scrollPosition.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

    if (!menuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint v Tailwindu
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, setMenuOpen]);

  const links = [
    { href: "#aboutme", label: "About me" },
    { href: "#equipment", label: "Equipment" },
    { href: "#games", label: "Games" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-30 bg-black transition-opacity duration-300
          ${menuOpen ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding menu under navbar */}
      <nav
        className={`
          fixed left-0 w-full z-30
          bg-black/95
          shadow-2xl border-b border-cyan-400/10
          transition-transform duration-400 ease-[cubic-bezier(.77,0,.18,1)]
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          top: "4rem", // výška navbaru (případně uprav dle skutečné výšky)
          minHeight: "calc(100vh - 4rem)",
          paddingTop: "2.5rem",
        }}
        aria-modal={menuOpen}
        tabIndex={-1}
      >
        <ul className="flex flex-col items-center gap-7 mt-10">
          {links.map((link, i) => (
            <li key={link.href} className="w-full flex justify-center">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
          text-3xl md:text-4xl font-extrabold tracking-tight
          text-white px-10 py-4 rounded-xl w-full max-w-xs text-center
          bg-gradient-to-r from-cyan-700/10 to-blue-900/10
          shadow-xl shadow-cyan-900/10
          transition-all duration-250 
          hover:bg-cyan-500/20 hover:text-cyan-300 focus:bg-cyan-500/30 focus:text-cyan-200
          border border-cyan-400/10
          scale-95 hover:scale-100 active:scale-97 cursor-pointer outline-none ring-0 focus:ring-2 focus:ring-cyan-400
                `}
                style={{
                  transitionDelay: menuOpen ? `${i * 40 + 60}ms` : "0ms",
                  transitionProperty: "background, color, transform, box-shadow",
                }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

{/*
import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (menuOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      window.scrollTo(0, scrollPosition.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "#aboutme", label: "About me" },
    { href: "#equipment", label: "Equipment" },
    { href: "#games", label: "Games" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <>
      
      <div
        className={`
          fixed inset-0 z-30 bg-black transition-opacity duration-500
          ${menuOpen ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      
      <nav
        className={`
          fixed left-0 w-full z-30
          bg-black/95
          shadow-2xl border-b border-cyan-400/10
          transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]
          ${menuOpen ? "translate-y-0" : "-translate-y-8 opacity-0 pointer-events-none"}
        `}
        style={{
          top: "4rem",
          minHeight: "calc(100vh - 4rem)",
          paddingTop: "2.5rem",
        }}
        aria-modal={menuOpen}
        tabIndex={-1}
      >
        <ul className="flex flex-col items-center gap-7 mt-10">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`
                w-full flex justify-center
                transition-opacity duration-500
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms",
              }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-3xl md:text-4xl font-extrabold tracking-tight
                  text-white px-10 py-4 rounded-xl w-full max-w-xs text-center
                  bg-gradient-to-r from-cyan-700/10 to-blue-900/10
                  shadow-xl shadow-cyan-900/10
                  transition-all duration-200
                  hover:bg-cyan-500/20 hover:text-cyan-300 focus:bg-cyan-500/30 focus:text-cyan-200
                  border border-cyan-400/10
                  scale-95 hover:scale-100 active:scale-97 cursor-pointer outline-none ring-0 focus:ring-2 focus:ring-cyan-400
                `}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};





import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.82)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#aboutme"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        About me
      </a>
      <a
        href="#equipment"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Equipment
      </a>
      <a
        href="#games"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Games
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
    </div>
  );
};
*/}