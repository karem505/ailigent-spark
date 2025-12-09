import { useEffect, useRef, useState, useCallback } from "react";

export type RevealDirection = "up" | "left" | "right" | "scale" | "rotate" | "blur";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  direction?: RevealDirection;
  delay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = "0px 0px -50px 0px",
    direction = "up",
    delay = 0 
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, isVisible, delay]);

  const getClassName = useCallback(() => {
    const directionClass = {
      up: "scroll-reveal",
      left: "scroll-reveal-left",
      right: "scroll-reveal-right",
      scale: "scroll-reveal-scale",
      rotate: "scroll-reveal-rotate",
      blur: "scroll-reveal-blur",
    }[direction];

    return `${directionClass} ${isVisible ? "visible" : ""}`;
  }, [direction, isVisible]);

  return { ref, isVisible, className: getClassName() };
};

// Hook for multiple children with staggered animation
export const useStaggeredReveal = (itemCount: number, options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;
  const containerRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the visibility of each item
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          });
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, itemCount]);

  return { containerRef, visibleItems };
};
