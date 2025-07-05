import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * Optimized Intersection Observer hook with advanced performance features
 * @param {Object} options - Intersection Observer options
 * @param {boolean} triggerOnce - Whether to trigger animation only once
 * @param {boolean} preload - Whether to preload animations for smoother experience
 * @returns {Array} [ref, isIntersecting, hasBeenVisible, isInitialized]
 */
const useIntersectionObserver = (options = {}, triggerOnce = true, preload = true) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    const isVisible = entry.isIntersecting;
    
    // Use requestAnimationFrame for smoother state updates
    requestAnimationFrame(() => {
      setIsIntersecting(isVisible);
      
      if (isVisible && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    });
  }, [hasBeenVisible]);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    // Create observer with optimized settings
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for smoother detection
      rootMargin: preload ? '100px 0px 100px 0px' : '50px 0px 50px 0px', // Preload animations
      ...options
    });

    observerRef.current.observe(currentRef);

    // Initialize with RAF for smoother startup
    const initTimer = requestAnimationFrame(() => {
      setIsInitialized(true);
    });

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
      cancelAnimationFrame(initTimer);
    };
  }, [handleIntersection, options, preload]);

  return [ref, triggerOnce ? hasBeenVisible : isIntersecting, hasBeenVisible, isInitialized];
};

/**
 * Ultra-smooth RevealOnScroll component with advanced optimizations
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.animation - Animation type
 * @param {number} props.delay - Animation delay in ms
 * @param {number} props.duration - Animation duration in ms
 * @param {string} props.easing - CSS easing function
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {boolean} props.triggerOnce - Whether to trigger animation only once
 * @param {boolean} props.preload - Whether to preload animations
 * @param {boolean} props.reduceMotion - Respect user's motion preferences
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {function} props.onVisible - Callback when element becomes visible
 * @param {function} props.onHidden - Callback when element becomes hidden
 * @returns {React.Component} Ultra-smooth RevealOnScroll component
 */
const RevealOnScroll = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1200,
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  threshold = 0.1,
  triggerOnce = true,
  preload = true,
  reduceMotion = true,
  className = '',
  style = {},
  onVisible,
  onHidden,
  ...props
}) => {
  const [ref, isVisible, hasBeenVisible, isInitialized] = useIntersectionObserver(
    { threshold },
    triggerOnce,
    preload
  );

  // Detect user's motion preference
  const prefersReducedMotion = useMemo(() => {
    if (!reduceMotion || typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, [reduceMotion]);

  // Trigger callbacks with RAF for smoother execution
  useEffect(() => {
    if (isVisible && onVisible) {
      requestAnimationFrame(() => onVisible());
    } else if (!isVisible && hasBeenVisible && onHidden) {
      requestAnimationFrame(() => onHidden());
    }
  }, [isVisible, hasBeenVisible, onVisible, onHidden]);

  // Ultra-smooth animation presets with GPU acceleration
  const animations = useMemo(() => ({
    fadeUp: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(0, 20px, 0)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    fadeDown: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(0, -20px, 0)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    fadeLeft: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(-20px, 0, 0)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    fadeRight: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(20px, 0, 0)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    fadeIn: {
      hidden: { 
        opacity: 0,
        filter: 'blur(1px)'
      },
      visible: { 
        opacity: 1,
        filter: 'blur(0px)'
      }
    },
    scale: {
      hidden: { 
        opacity: 0, 
        transform: 'scale3d(0.98, 0.98, 1)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'scale3d(1, 1, 1)',
        filter: 'blur(0px)'
      }
    },
    scaleUp: {
      hidden: { 
        opacity: 0, 
        transform: 'scale3d(0.95, 0.95, 1) translate3d(0, 15px, 0)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    rotate: {
      hidden: { 
        opacity: 0, 
        transform: 'rotate3d(0, 0, 1, -2deg) scale3d(0.98, 0.98, 1)',
        filter: 'blur(0.5px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1)',
        filter: 'blur(0px)'
      }
    },
    slideUp: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(0, 25px, 0)',
        clipPath: 'inset(5% 0 0 0)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        clipPath: 'inset(0% 0 0 0)'
      }
    },
    elastic: {
      hidden: { 
        opacity: 0, 
        transform: 'scale3d(0.9, 0.9, 1) translate3d(0, 20px, 0)',
        filter: 'blur(1px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    },
    // New ultra-smooth animations
    floatUp: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(0, 30px, 0) rotateX(10deg)',
        filter: 'blur(1px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0) rotateX(0deg)',
        filter: 'blur(0px)'
      }
    },
    morphIn: {
      hidden: { 
        opacity: 0, 
        transform: 'scale3d(0.8, 1.1, 1) translate3d(0, 10px, 0)',
        filter: 'blur(1px)'
      },
      visible: { 
        opacity: 1, 
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
        filter: 'blur(0px)'
      }
    }
  }), []);

  const currentAnimation = animations[animation] || animations.fadeUp;
  
  // Apply reduced motion if user prefers it
  const finalAnimation = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  } : currentAnimation;

  // Determine animation state with smooth transitions
  const animationState = !isInitialized ? 'visible' : (isVisible ? 'visible' : 'hidden');
  
  // Optimized styles with GPU acceleration
  const transformStyles = useMemo(() => {
    if (!isInitialized) return { opacity: 1 };
    return finalAnimation[animationState];
  }, [isInitialized, finalAnimation, animationState]);

  // Adaptive duration based on user preferences
  const adaptiveDuration = prefersReducedMotion ? Math.min(duration, 300) : duration;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...transformStyles,
        transition: isInitialized 
          ? `all ${adaptiveDuration}ms ${easing} ${delay}ms`
          : 'none',
        willChange: isInitialized ? 'transform, opacity, filter' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        contain: 'layout style paint',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Ultra-smooth batch reveal with optimized staggering
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} props.staggerDelay - Delay between each child animation
 * @param {number} props.maxStagger - Maximum stagger delay to prevent long waits
 * @param {Object} props.revealProps - Props to pass to each RevealOnScroll component
 * @returns {React.Component} Optimized BatchReveal component
 */
const BatchReveal = ({ 
  children, 
  staggerDelay = 80, 
  maxStagger = 500,
  revealProps = {} 
}) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <>
      {childrenArray.map((child, index) => {
        const calculatedDelay = Math.min(index * staggerDelay, maxStagger);
        return (
          <RevealOnScroll
            key={index}
            delay={calculatedDelay}
            {...revealProps}
          >
            {child}
          </RevealOnScroll>
        );
      })}
    </>
  );
};

/**
 * Advanced animation presets with optimized timing
 */
const AnimationPresets = {
  instant: {
    duration: 200,
    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
    delay: 0
  },
  gentle: {
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 100
  },
  snappy: {
    duration: 500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    delay: 50
  },
  smooth: {
    duration: 800,
    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
    delay: 80
  },
  elastic: {
    duration: 1200,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    delay: 0
  },
  butter: {
    duration: 600,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 60
  },
  silk: {
    duration: 900,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    delay: 120
  }
};

/**
 * Enhanced utility function with performance optimizations
 * @param {string} preset - Animation preset name
 * @param {Object} overrides - Properties to override
 * @returns {Object} Optimized animation configuration
 */
const createRevealConfig = (preset = 'smooth', overrides = {}) => {
  const baseConfig = AnimationPresets[preset] || AnimationPresets.smooth;
  return {
    ...baseConfig,
    ...overrides,
    // Ensure minimum performance standards
    duration: Math.max(overrides.duration || baseConfig.duration, 100),
    delay: Math.max(overrides.delay || baseConfig.delay, 0)
  };
};

/**
 * Performance monitoring hook for debugging
 * @param {string} componentName - Name of the component to monitor
 * @returns {Object} Performance metrics
 */
const usePerformanceMonitor = (componentName = 'RevealOnScroll') => {
  const [metrics, setMetrics] = useState({});
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        setMetrics(prev => ({
          ...prev,
          [componentName]: entries
        }));
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
      
      return () => observer.disconnect();
    }
  }, [componentName]);
  
  return metrics;
};

// Export all components and utilities
export {
  RevealOnScroll,
  BatchReveal,
  useIntersectionObserver,
  usePerformanceMonitor,
  AnimationPresets,
  createRevealConfig
};

// Default export
export default RevealOnScroll;

/*
USAGE EXAMPLES:

// Ultra-smooth basic usage
<RevealOnScroll animation="fadeUp" {...createRevealConfig('butter')}>
  <div>Buttery smooth content</div>
</RevealOnScroll>

// New advanced animations
<RevealOnScroll animation="floatUp" duration={800}>
  <div>Floating animation</div>
</RevealOnScroll>

<RevealOnScroll animation="morphIn" {...createRevealConfig('silk')}>
  <div>Morphing animation</div>
</RevealOnScroll>

// Performance-optimized batch
<BatchReveal 
  staggerDelay={60}
  maxStagger={400}
  revealProps={{ animation: 'fadeUp', ...createRevealConfig('butter') }}
>
  <div>Ultra-smooth item 1</div>
  <div>Ultra-smooth item 2</div>
  <div>Ultra-smooth item 3</div>
</BatchReveal>

// With accessibility and performance monitoring
<RevealOnScroll
  animation="scaleUp"
  reduceMotion={true}
  preload={true}
  {...createRevealConfig('smooth')}
  onVisible={() => console.log('Visible with optimal performance!')}
>
  <div>Accessible and smooth content</div>
</RevealOnScroll>
*/










{/* OLD REVEAL ON SCROLL COMPONENT

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

*/}