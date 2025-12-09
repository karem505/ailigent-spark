import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import peLogo from "@/assets/pe-logo.webp";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const focusItems = [
    t("projects.pe.focus.0"),
    t("projects.pe.focus.1"),
    t("projects.pe.focus.2"),
    t("projects.pe.focus.3"),
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal active">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            {t("projects.badge", "Client Impact")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            {t("projects.title")}
          </h2>
        </div>

        {/* Success Story Card */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 border border-highlight/30 grid lg:grid-cols-3 gap-8 items-center reveal active delay-100">
          {/* Left Column - Client Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="text-highlight text-lg font-semibold mb-2">
              {t("projects.pe.badge")}
            </div>
            <div className="mb-4">
              <img src={peLogo} alt="Professional Engineers Logo" className="h-16 w-auto object-contain mx-auto lg:mx-0" />
            </div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              {t("projects.pe.client")}
            </h3>
            <p className="text-muted-foreground">{t("projects.pe.description")}</p>
          </div>

          {/* Right Column - Deliverables */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xl font-bold text-foreground border-b border-border pb-2 mb-4">
              {t("projects.projectFocus")}
            </h4>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              {focusItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start text-muted-foreground reveal-right active delay-${(index + 2) * 100}`}
                >
                  <CheckCircle2 className="text-highlight mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
