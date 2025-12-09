import { useEffect, useRef } from "react";
import { 
  Brain, 
  Cpu, 
  Network, 
  Bot, 
  Zap, 
  Database, 
  Sparkles, 
  Cog, 
  Binary,
  CircuitBoard,
  Layers,
  GitBranch,
  Code,
  Activity,
  Atom
} from "lucide-react";

const icons = [
  Brain, Cpu, Network, Bot, Zap, Database, Sparkles, Cog, Binary,
  CircuitBoard, Layers, GitBranch, Code, Activity, Atom
];

interface FloatingIcon {
  id: number;
  Icon: typeof Brain;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

const colors = [
  "hsl(var(--primary))",
  "hsl(var(--highlight))",
  "hsl(var(--accent))",
];

export const FloatingAIIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize floating icons
    const iconCount = 40;
    iconsRef.current = Array.from({ length: iconCount }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30,
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.02,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      opacity: 0.05 + Math.random() * 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      iconsRef.current.forEach((icon) => {
        // Update position
        icon.x += icon.speedX;
        icon.y += icon.speedY;
        icon.rotation += icon.rotationSpeed;

        // Bounce off edges
        if (icon.x <= 0 || icon.x >= 100) {
          icon.speedX *= -1;
          icon.x = Math.max(0, Math.min(100, icon.x));
        }
        if (icon.y <= 0 || icon.y >= 100) {
          icon.speedY *= -1;
          icon.y = Math.max(0, Math.min(100, icon.y));
        }

        // Update DOM element
        const element = container.querySelector(`[data-icon-id="${icon.id}"]`) as HTMLElement;
        if (element) {
          element.style.left = `${icon.x}%`;
          element.style.top = `${icon.y}%`;
          element.style.transform = `translate(-50%, -50%) rotate(${icon.rotation}deg)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Mouse interaction - icons move away from cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      iconsRef.current.forEach((icon) => {
        const dx = icon.x - mouseX;
        const dy = icon.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          const force = (15 - distance) / 15;
          icon.speedX += (dx / distance) * force * 0.01;
          icon.speedY += (dy / distance) * force * 0.01;
          
          // Limit speed
          const maxSpeed = 0.08;
          icon.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, icon.speedX));
          icon.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, icon.speedY));
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      
      {/* Floating icons */}
      {iconsRef.current.length === 0 && 
        Array.from({ length: 40 }, (_, i) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          const size = 20 + Math.random() * 30;
          const opacity = 0.05 + Math.random() * 0.1;
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={i}
              data-icon-id={i}
              className="absolute transition-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
              }}
            >
              <Icon
                style={{
                  width: size,
                  height: size,
                  color: color,
                  opacity: opacity,
                  filter: `blur(${Math.random() * 1}px)`,
                }}
              />
            </div>
          );
        })
      }
      
      {/* Render actual icons after initialization */}
      {Array.from({ length: 40 }, (_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={i}
            data-icon-id={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: "left, top, transform",
            }}
          >
            <Icon
              className="text-primary"
              style={{
                width: 20 + (i % 3) * 10,
                height: 20 + (i % 3) * 10,
                color: colors[i % colors.length],
                opacity: 0.06 + (i % 5) * 0.02,
                filter: `blur(${(i % 3) * 0.3}px) drop-shadow(0 0 ${10 + i * 2}px ${colors[i % colors.length]})`,
              }}
            />
          </div>
        );
      })}

      {/* Floating orbs */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ left: "10%", top: "20%", animationDelay: "0s", animationDuration: "20s" }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full bg-highlight/5 blur-3xl animate-float"
        style={{ left: "70%", top: "60%", animationDelay: "5s", animationDuration: "25s" }}
      />
      <div 
        className="absolute w-56 h-56 rounded-full bg-accent/5 blur-3xl animate-float"
        style={{ left: "50%", top: "30%", animationDelay: "10s", animationDuration: "30s" }}
      />
      <div 
        className="absolute w-40 h-40 rounded-full bg-highlight/5 blur-3xl animate-float"
        style={{ left: "20%", top: "70%", animationDelay: "7s", animationDuration: "22s" }}
      />
      <div 
        className="absolute w-52 h-52 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ left: "80%", top: "15%", animationDelay: "3s", animationDuration: "28s" }}
      />
    </div>
  );
};
