import { Brain, Cpu, Layers, Zap, BarChart3, Cog, Network, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TechMarquee = () => {
  const { t } = useTranslation();
  
  const technologies = [
    { icon: Brain, label: "AI AUTOMATION" },
    { icon: Cpu, label: "MACHINE LEARNING" },
    { icon: Layers, label: "DEEP LEARNING" },
    { icon: Zap, label: "AGENTIC AI" },
    { icon: BarChart3, label: "DATA ANALYTICS" },
    { icon: Cog, label: "PROCESS AUTOMATION" },
    { icon: Network, label: "NEURAL NETWORKS" },
    { icon: Shield, label: "ENTERPRISE AI" },
  ];

  const MarqueeContent = () => (
    <>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="text-xl font-bold text-muted-foreground/60 flex items-center gap-3 whitespace-nowrap"
        >
          <tech.icon className="w-5 h-5" />
          {tech.label}
        </span>
      ))}
    </>
  );

  return (
    <section className="py-12 border-y border-border/50 bg-card/5 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 pr-20">
          <MarqueeContent />
          <MarqueeContent />
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-20 pr-20">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};
