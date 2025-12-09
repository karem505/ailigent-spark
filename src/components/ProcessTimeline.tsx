import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

export const ProcessTimeline = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const phases = [
    {
      phase: "01",
      title: t("process.phases.discovery.title", "Discovery & Analysis"),
      description: t("process.phases.discovery.description", "We assess your current processes, identify opportunities, and define the optimal technical approach aligned with your business objectives."),
    },
    {
      phase: "02",
      title: t("process.phases.design.title", "Solution Design"),
      description: t("process.phases.design.description", "We architect tailored AI solutions — from agentic workflows to conversational interfaces — designed to integrate seamlessly with your infrastructure."),
    },
    {
      phase: "03",
      title: t("process.phases.development.title", "Development & Integration"),
      description: t("process.phases.development.description", "We build, test, and deploy your AI systems with precision. Our team ensures smooth integration and delivers comprehensive training for your staff."),
    },
    {
      phase: "04",
      title: t("process.phases.optimization.title", "Optimization & Scale"),
      description: t("process.phases.optimization.description", "We continuously monitor and refine your AI systems for peak performance, scaling solutions as your business grows."),
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="process"
      className={`py-32 px-6 bg-background relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <BackgroundAnimation />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
            {t("process.subtitle", "Our Process")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t("process.title", "How We Work")}
          </h3>
        </div>

        <div className="relative border-l border-border/50 ml-6 md:ml-12 space-y-20">
          {phases.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-24 group process-step"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-muted-foreground rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300" />

              {/* Content */}
              <span className="text-xs font-mono text-primary mb-2 block font-bold">
                {t("process.phase", "PHASE")} {item.phase}
              </span>
              <h4 className="text-2xl text-foreground font-bold mb-4">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed max-w-xl font-bold">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
