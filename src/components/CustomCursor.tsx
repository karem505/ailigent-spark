import { useEffect, useRef } from "react";

const SEGMENTS = 12;

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRef<HTMLDivElement[]>([]);
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const segmentPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: SEGMENTS }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
  );
  const rafId = useRef<number>();
  const sizeBoost = useRef(0);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    const segments = segmentRefs.current;

    if (!cursorDot || !cursorRing) return;

    const updateSegmentSizes = () => {
      segments.forEach((seg, i) => {
        if (seg) {
          const base = Math.max(4, 10 - i * 0.5);
          const size = base + sizeBoost.current;
          seg.style.width = `${size}px`;
          seg.style.height = `${size}px`;
        }
      });
    };

    const animate = () => {
      // Ring follows smoothly
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.22;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.22;
      cursorRing.style.left = `${currentPos.current.x}px`;
      cursorRing.style.top = `${currentPos.current.y}px`;

      // Dot snaps to target
      cursorDot.style.left = `${targetPos.current.x}px`;
      cursorDot.style.top = `${targetPos.current.y}px`;

      // Snake trail: head follows target, rest follow previous segment
      segmentPositions.current[0].x += (targetPos.current.x - segmentPositions.current[0].x) * 0.28;
      segmentPositions.current[0].y += (targetPos.current.y - segmentPositions.current[0].y) * 0.28;

      for (let i = 1; i < SEGMENTS; i++) {
        segmentPositions.current[i].x += (segmentPositions.current[i - 1].x - segmentPositions.current[i].x) * 0.28;
        segmentPositions.current[i].y += (segmentPositions.current[i - 1].y - segmentPositions.current[i].y) * 0.28;
      }

      segments.forEach((seg, i) => {
        if (seg) {
          seg.style.left = `${segmentPositions.current[i].x}px`;
          seg.style.top = `${segmentPositions.current[i].y}px`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const handleMouseEnterInteractive = () => {
      cursorRing.style.width = "44px";
      cursorRing.style.height = "44px";
      cursorRing.style.borderColor = "hsl(var(--highlight))";
      cursorRing.style.boxShadow = "0 0 0 3px hsl(var(--highlight) / 0.15), 0 0 60px hsl(var(--primary) / 0.35)";
      sizeBoost.current = 2;
      updateSegmentSizes();
    };

    const handleMouseLeaveInteractive = () => {
      cursorRing.style.width = "28px";
      cursorRing.style.height = "28px";
      cursorRing.style.borderColor = "hsl(var(--primary) / 0.85)";
      cursorRing.style.boxShadow = "0 0 0 2px hsl(var(--primary) / 0.15), 0 0 30px hsl(var(--primary) / 0.25)";
      sizeBoost.current = 0;
      updateSegmentSizes();
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
        if (seg) {
          const opacity = Math.max(0.15, 0.9 - i * 0.06);
          seg.style.opacity = String(opacity);
        }
      });
    };

    const handleMouseDown = () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(0.88)";
    };

    const handleMouseUp = () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
    };

    // Initialize
    show();
    updateSegmentSizes();
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], .cursor-glow, .button-shine, .tag-hover, .glow-border, .hover-lift, .interactive-text, .service-card, .glass-card, input, textarea"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

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
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Ambient lighting effects */}
      <div className="ambient-light" />
      <div className="ambient-light-2" />

      {/* Snake trail segments */}
      {Array.from({ length: SEGMENTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) segmentRefs.current[i] = el;
          }}
          className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${Math.max(4, 10 - i * 0.5)}px`,
            height: `${Math.max(4, 10 - i * 0.5)}px`,
            background: `hsl(var(--highlight) / ${Math.min(0.95, 0.65 + 0.02 * (SEGMENTS - i))})`,
            boxShadow: "0 0 0 2px hsl(var(--primary) / 0.08), 0 0 18px hsl(var(--primary) / 0.25), inset 0 0 6px hsl(var(--foreground) / 0.06)",
            opacity: Math.max(0.15, 0.9 - i * 0.06),
            transition: "opacity 0.2s",
            willChange: "left, top",
          }}
        />
      ))}

      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "28px",
          height: "28px",
          border: "1.5px solid hsl(var(--primary) / 0.85)",
          boxShadow: "0 0 0 2px hsl(var(--primary) / 0.15), 0 0 30px hsl(var(--primary) / 0.25)",
          backdropFilter: "blur(1px)",
          opacity: 0.9,
          transition: "width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.06s, opacity 0.2s",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "6px",
          height: "6px",
          background: "hsl(var(--highlight) / 0.95)",
          boxShadow: "0 0 10px hsl(var(--highlight) / 0.6)",
          opacity: 0.9,
          transition: "transform 0.06s, opacity 0.2s",
        }}
      />
    </>
  );
};
