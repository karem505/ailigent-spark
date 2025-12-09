import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export const useCountUp = (options: UseCountUpOptions) => {
  const {
    end,
    start = 0,
    duration = 2000,
    decimals = 0,
    suffix = "",
    prefix = "",
    delay = 0,
  } = options;

  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const timeout = setTimeout(() => {
      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = startValue + (endValue - startValue) * easeOutExpo;

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, hasAnimated, start, end, duration, delay]);

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, count, formattedCount, isVisible };
};

// Component version for easier use
export const useCountUpMultiple = (items: UseCountUpOptions[]) => {
  return items.map((item, index) => ({
    ...useCountUp({ ...item, delay: (item.delay || 0) + index * 200 }),
  }));
};
