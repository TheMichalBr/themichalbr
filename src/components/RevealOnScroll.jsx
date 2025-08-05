import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({
  children,
  once = true,
  offset = "0px",
  duration = 600,
  delay = 0,
}) => {
  const ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateY = isSmallScreen ? 15 : 30;
    const threshold = isSmallScreen ? 0.05 : 0.1;

    el.style.opacity = "0";
    el.style.transform = `translateY(${translateY}px)`;
    el.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;
    el.style.willChange = "opacity, transform";

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            requestAnimationFrame(reveal);
          }, 50);

          if (once) observer.unobserve(el);
        }
      },
      {
        threshold: threshold,
        rootMargin: offset,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, offset, duration, delay, isSmallScreen]);

  return <div ref={ref}>{children}</div>;
};