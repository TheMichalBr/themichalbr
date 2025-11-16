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

{/*
import { useEffect, useRef } from "react";

export const RevealOnScroll = ({
  children,
  once = true,
  offset = "0px",
  duration = 600,
  delay = 0,
  distance = 30,
  scale = 0.985,
  stagger = 50,
  reset = false,
}) => {
  const ref = useRef(null);
  const prefersReduced = useRef(false);
  const resizeTimer = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      prefersReduced.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const nodeList = el.querySelectorAll("[data-reveal]");
    const nodes = nodeList.length ? Array.from(nodeList) : [el];

    const applyInitial = () => {
      if (prefersReduced.current) {
        nodes.forEach((n) => {
          n.style.opacity = "1";
          n.style.transform = "none";
        });
        return;
      }
      nodes.forEach((n) => {
        n.style.opacity = "0";
        n.style.transform = `translateY(${distance}px) scale(${scale})`;
        n.style.willChange = "opacity, transform";
      });
    };

    const revealNode = (node, idx) => {
      if (prefersReduced.current) {
        node.style.opacity = "1";
        node.style.transform = "none";
        return;
      }
      const itemDelay = delay + idx * stagger;
      node.style.transition = `opacity ${duration}ms cubic-bezier(.2,.9,.2,1) ${itemDelay}ms, transform ${duration}ms cubic-bezier(.2,.9,.2,1) ${itemDelay}ms`;
      requestAnimationFrame(() => {
        node.style.opacity = "1";
        node.style.transform = "translateY(0) scale(1)";
      });
    };

    const hideNode = (node) => {
      if (prefersReduced.current) return;
      node.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
      node.style.opacity = "0";
      node.style.transform = `translateY(${distance}px) scale(${scale})`;
    };

    applyInitial();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target;
          const idx = nodes.indexOf(node);
          if (entry.isIntersecting) {
            revealNode(node, idx >= 0 ? idx : 0);
            if (once) observer.unobserve(node);
          } else if (reset) {
            hideNode(node);
          }
        });
      },
      {
        root: null,
        rootMargin: offset,
        threshold: 0.08,
      }
    );

    nodes.forEach((n) => observer.observe(n));

    const onResize = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
          prefersReduced.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
        }
        applyInitial();
      }, 150);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      nodes.forEach((n) => {
        n.style.willChange = "";
        n.style.transition = "";
        n.style.opacity = "";
        n.style.transform = "";
      });
    };
  }, [once, offset, duration, delay, distance, scale, stagger, reset]);

  return <div ref={ref}>{children}</div>;
};
*/}