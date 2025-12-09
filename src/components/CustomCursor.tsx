import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Animate outline with slight delay
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 150, fill: "forwards" }
      );
    };

    const handleMouseEnterInteractive = () => {
      cursorOutline.style.width = "60px";
      cursorOutline.style.height = "60px";
    };

    const handleMouseLeaveInteractive = () => {
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .service-card, .glass-card, input, textarea"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={cursorOutlineRef}
        className="cursor-outline fixed top-0 left-0 w-10 h-10 border border-foreground/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 hidden md:block"
      />
    </>
  );
};
