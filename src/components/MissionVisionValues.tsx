import { Target, Eye, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    {
      icon: Target,
      title: t("mission.ourMission"),
      description: t("mission.missionText"),
      color: "primary",
    },
    {
      icon: Eye,
      title: t("mission.ourVision"),
      description: t("mission.visionText"),
      color: "highlight",
    },
    {
      icon: Handshake,
      title: t("mission.ourValues"),
      description: t("mission.valuesText", "Integrity & Transparency • Sustainable Innovation • Client-Centric Approach"),
      color: "accent",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="mission"
      className={`py-20 bg-card/30 border-y border-border relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal active">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("mission.subtitle", "Our Foundation")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            {t("mission.title")}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const iconColorClass =
              card.color === "primary"
                ? "text-primary"
                : card.color === "highlight"
                ? "text-highlight"
                : "text-accent";

            return (
              <div
                key={index}
                className={`glass-panel p-8 rounded-2xl reveal active delay-${(index + 1) * 100}`}
              >
                <card.icon className={`text-4xl ${iconColorClass} mb-4 w-10 h-10`} />
                <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
