import { 
  Cpu, 
  Layers, 
  Zap, 
  BarChart3, 
  Settings, 
  Users, 
  Brain, 
  Bot,
  Database,
  Network
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const TechMarquee = () => {
  const { t } = useTranslation();

  const techItems = [
    { icon: Cpu, label: t("marquee.machineLearning", "MACHINE LEARNING") },
    { icon: Layers, label: t("marquee.deepLearning", "DEEP LEARNING") },
    { icon: Zap, label: t("marquee.agenticAI", "AGENTIC AI") },
    { icon: BarChart3, label: t("marquee.dataAnalytics", "DATA ANALYTICS") },
    { icon: Settings, label: t("marquee.processAutomation", "PROCESS AUTOMATION") },
    { icon: Brain, label: t("marquee.neuralNetworks", "NEURAL NETWORKS") },
    { icon: Bot, label: t("marquee.robotics", "AI ROBOTICS") },
    { icon: Database, label: t("marquee.bigData", "BIG DATA") },
    { icon: Network, label: t("marquee.cloudAI", "CLOUD AI") },
    { icon: Users, label: t("marquee.aiAgents", "AI AGENTS") },
  ];

  // Duplicate for seamless loop
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <section className="relative py-6 bg-card/50 border-y border-border/30 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex animate-marquee">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
          >
            <item.icon className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Cyan/Teal bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight to-transparent" />
    </section>
  );
};
