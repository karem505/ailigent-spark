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

const colors = [
  "hsl(var(--primary))",
  "hsl(var(--highlight))",
  "hsl(var(--accent))",
];

// Pre-computed static positions for 15 icons
const iconConfigs = [
  { x: 8, y: 12, size: 24, duration: 25, delay: 0 },
  { x: 85, y: 8, size: 28, duration: 30, delay: 2 },
  { x: 45, y: 22, size: 22, duration: 28, delay: 4 },
  { x: 15, y: 55, size: 30, duration: 32, delay: 1 },
  { x: 72, y: 35, size: 26, duration: 27, delay: 3 },
  { x: 30, y: 75, size: 24, duration: 29, delay: 5 },
  { x: 88, y: 60, size: 28, duration: 31, delay: 2 },
  { x: 55, y: 85, size: 22, duration: 26, delay: 4 },
  { x: 12, y: 88, size: 26, duration: 33, delay: 1 },
  { x: 65, y: 15, size: 24, duration: 28, delay: 3 },
  { x: 38, y: 45, size: 30, duration: 30, delay: 0 },
  { x: 78, y: 78, size: 22, duration: 27, delay: 5 },
  { x: 22, y: 32, size: 28, duration: 29, delay: 2 },
  { x: 92, y: 42, size: 24, duration: 31, delay: 4 },
  { x: 50, y: 62, size: 26, duration: 25, delay: 1 },
];

export const FloatingAIIcons = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      
      {/* Floating icons - CSS animated for performance */}
      {iconConfigs.map((config, i) => {
        const Icon = icons[i % icons.length];
        const color = colors[i % colors.length];
        
        return (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${config.x}%`,
              top: `${config.y}%`,
              animationDuration: `${config.duration}s`,
              animationDelay: `${config.delay}s`,
              willChange: "transform",
            }}
          >
            <Icon
              style={{
                width: config.size,
                height: config.size,
                color: color,
                opacity: 0.08 + (i % 4) * 0.02,
                filter: `blur(${(i % 3) * 0.3}px)`,
              }}
            />
          </div>
        );
      })}

      {/* Floating orbs - reduced to 3 */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ left: "10%", top: "20%", animationDuration: "20s" }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full bg-highlight/5 blur-3xl animate-float"
        style={{ left: "70%", top: "60%", animationDelay: "5s", animationDuration: "25s" }}
      />
      <div 
        className="absolute w-56 h-56 rounded-full bg-accent/5 blur-3xl animate-float"
        style={{ left: "50%", top: "75%", animationDelay: "10s", animationDuration: "30s" }}
      />
    </div>
  );
};
