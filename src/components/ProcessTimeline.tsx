import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

export const ProcessTimeline = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const phases = [
    {
      phase: "PHASE 01",
      title: "Discovery & Analysis",
      description:
        "We analyze your current processes and requirements. Whether it's a new AI implementation or automation optimization, we identify the best technical approach and strategy for your business goals.",
    },
    {
      phase: "PHASE 02",
      title: "Solution Design",
      description:
        "We architect custom AI solutions tailored to your needs. From agentic AI workflows to conversational interfaces, we design systems that integrate seamlessly with your existing infrastructure.",
    },
    {
      phase: "PHASE 03",
      title: "Development & Integration",
      description:
        "We build and deploy your AI solutions with rigorous testing. Our team ensures smooth integration with your systems and provides comprehensive training for your team.",
    },
    {
      phase: "PHASE 04",
      title: "Optimization & Scale",
      description:
        "We continuously monitor and optimize your AI systems for maximum performance. As your business grows, we scale the solutions to meet increasing demands.",
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
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Development Methodology
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
                {item.phase}
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
