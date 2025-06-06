import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, once = true, visibleClass = "visible" }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(visibleClass);
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove(visibleClass);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, visibleClass]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};