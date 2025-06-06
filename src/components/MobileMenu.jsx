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
  }, [menuOpen, setMenuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen, setMenuOpen]);

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
        `}
        style={{
          top: "4rem",
          minHeight: "calc(100vh - 4rem)",
          paddingTop: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(.77,0,.18,1)",
          pointerEvents: menuOpen ? "auto" : "none",
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
                transition-all duration-500
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
              `}
              style={{
                transitionDelay: menuOpen ? `${i * 80 + 120}ms` : "0ms",
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
                  transition-all duration-225
                  hover:bg-cyan-500/20 hover:text-cyan-300
                  focus:bg-cyan-500/30 focus:text-cyan-200
                  border border-cyan-400/10
                  scale-95 hover:scale-100 active:scale-97
                  cursor-pointer outline-none ring-0
                  focus:ring-2 focus:ring-cyan-400
                `}
                style={{
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