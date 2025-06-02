import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
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
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black transition-opacity duration-500
          ${menuOpen ? "opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding menu */}
      <nav
        className={`
          fixed top-0 left-0 w-full max-w-full z-50
          bg-black
          shadow-2xl border-b border-cyan-400/10
          transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          minHeight: "100vh",
          paddingTop: "4.5rem",
        }}
        aria-modal={menuOpen}
        tabIndex={-1}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 z-50 p-0 m-0 border-none bg-transparent cursor-pointer focus:outline-none group"
          aria-label="Close Menu"
          style={{
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={e => {
            e.currentTarget.firstChild.style.stroke = "#38bdf8";
            e.currentTarget.firstChild.style.transform = "scale(1.18) rotate(90deg)";
            e.currentTarget.firstChild.style.transition = "all 0.22s cubic-bezier(.4,0,.2,1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.firstChild.style.stroke = "#fff";
            e.currentTarget.firstChild.style.transform = "scale(1) rotate(0deg)";
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              stroke: "#fff",
              transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <line x1="7" y1="7" x2="17" y2="17" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="17" y1="7" x2="7" y2="17" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 mt-16">
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
                  transition-all duration-400
                  hover:bg-cyan-500/20 hover:text-cyan-300 focus:bg-cyan-500/30 focus:text-cyan-200
                  border border-cyan-400/10
                  scale-95 hover:scale-100
                `}
                style={{
                  transitionDelay: menuOpen ? `${i * 70 + 100}ms` : "0ms",
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