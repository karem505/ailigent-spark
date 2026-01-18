import { useEffect, useRef } from "react";

const SEGMENTS = 4;

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRef<HTMLDivElement[]>([]);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const segmentPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: SEGMENTS }, () => ({ x: 0, y: 0 }))
  );
  const rafId = useRef<number>();
  const isHovering = useRef(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    const segments = segmentRefs.current;

    if (!cursorDot || !cursorRing) return;

    // Initialize positions to center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    targetPos.current = { x: centerX, y: centerY };
    currentPos.current = { x: centerX, y: centerY };
    segmentPositions.current = Array.from({ length: SEGMENTS }, () => ({ x: centerX, y: centerY }));

    const animate = () => {
      // Ring follows smoothly
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;
      
      cursorRing.style.transform = `translate(${currentPos.current.x - 14}px, ${currentPos.current.y - 14}px)`;
      cursorDot.style.transform = `translate(${targetPos.current.x - 3}px, ${targetPos.current.y - 3}px)`;

      // Snake trail
      segmentPositions.current[0].x += (targetPos.current.x - segmentPositions.current[0].x) * 0.2;
      segmentPositions.current[0].y += (targetPos.current.y - segmentPositions.current[0].y) * 0.2;

      for (let i = 1; i < SEGMENTS; i++) {
        segmentPositions.current[i].x += (segmentPositions.current[i - 1].x - segmentPositions.current[i].x) * 0.2;
        segmentPositions.current[i].y += (segmentPositions.current[i - 1].y - segmentPositions.current[i].y) * 0.2;
      }

      segments.forEach((seg, i) => {
        if (seg) {
          const size = 8 - i * 1.5;
          seg.style.transform = `translate(${segmentPositions.current[i].x - size / 2}px, ${segmentPositions.current[i].y - size / 2}px)`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const handleMouseEnterInteractive = () => {
      if (isHovering.current) return;
      isHovering.current = true;
      cursorRing.style.width = "40px";
      cursorRing.style.height = "40px";
      cursorRing.style.borderColor = "hsl(var(--highlight))";
    };

    const handleMouseLeaveInteractive = () => {
      isHovering.current = false;
      cursorRing.style.width = "28px";
      cursorRing.style.height = "28px";
      cursorRing.style.borderColor = "hsl(var(--primary) / 0.85)";
    };

    const hide = () => {
      cursorRing.style.opacity = "0";
      cursorDot.style.opacity = "0";
      segments.forEach((seg) => {
        if (seg) seg.style.opacity = "0";
      });
    };

    const show = () => {
      cursorRing.style.opacity = "0.9";
      cursorDot.style.opacity = "0.9";
      segments.forEach((seg, i) => {
        if (seg) seg.style.opacity = String(0.7 - i * 0.15);
      });
    };

    // Initialize
    show();
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    // Simplified hover detection - only check on mouseenter of document
    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterInteractive);
        el.addEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };

    // Delay to let DOM settle
    setTimeout(addHoverListeners, 100);

    // Visibility change handler
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId.current) cancelAnimationFrame(rafId.current);
      } else {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Snake trail segments */}
      {Array.from({ length: SEGMENTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) segmentRefs.current[i] = el;
          }}
          className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block rounded-full"
          style={{
            width: `${8 - i * 1.5}px`,
            height: `${8 - i * 1.5}px`,
            background: `hsl(var(--highlight) / ${0.8 - i * 0.15})`,
            opacity: 0.7 - i * 0.15,
            willChange: "transform",
          }}
        />
      ))}

      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block rounded-full"
        style={{
          width: "28px",
          height: "28px",
          border: "1.5px solid hsl(var(--primary) / 0.85)",
          opacity: 0.9,
          transition: "width 0.15s, height 0.15s, border-color 0.15s, opacity 0.15s",
          willChange: "transform",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block rounded-full"
        style={{
          width: "6px",
          height: "6px",
          background: "hsl(var(--highlight) / 0.95)",
          opacity: 0.9,
          willChange: "transform",
        }}
      />
    </>
  );
};
