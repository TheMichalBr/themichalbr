import { useEffect, useRef } from "react";

export const RevealOnScroll = ({
  children,
  once = true,
  offset = "0px",
  duration = 600,
  delay = 0,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;
    el.style.willChange = "opacity, transform";

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(reveal);
          if (once) observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: offset,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, offset, duration, delay]);

  return <div ref={ref}>{children}</div>;
};