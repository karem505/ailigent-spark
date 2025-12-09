import { CheckCircle2 } from "lucide-react";
import peLogo from "@/assets/pe-logo.webp";
import tornixLogo from "@/assets/tornix-logo.png";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, className: sectionClass } = useScrollReveal({ direction: "blur" });
  const { ref: project1Ref, className: project1Class } = useScrollReveal({ direction: "left", delay: 100 });
  const { ref: project2Ref, className: project2Class } = useScrollReveal({ direction: "right", delay: 200 });

  const projects = [
    {
      badge: t("projects.pe.badge"),
      client: t("projects.pe.client"),
      logo: peLogo,
      description: t("projects.pe.description"),
      focus: [
        t("projects.pe.focus.0"),
        t("projects.pe.focus.1"),
        t("projects.pe.focus.2"),
        t("projects.pe.focus.3"),
      ],
      videoUrl: "https://www.youtube.com/embed/4T1_Spk9dss",
      color: "highlight",
      ref: project1Ref,
      className: project1Class,
    },
    {
      badge: t("projects.tornix.badge"),
      client: t("projects.tornix.client"),
      logo: tornixLogo,
      description: t("projects.tornix.description"),
      focus: [
        t("projects.tornix.focus.0"),
        t("projects.tornix.focus.1"),
        t("projects.tornix.focus.2"),
        t("projects.tornix.focus.3"),
      ],
      videoUrl: "https://www.youtube.com/embed/jbuQf16vO-4",
      color: "accent",
      ref: project2Ref,
      className: project2Class,
    },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="projects"
      className={`py-24 relative overflow-hidden ${sectionClass}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-highlight/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            {t("projects.badge", "Client Impact")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const borderColor = project.color === "highlight" ? "border-highlight/30" : "border-accent/30";
            const textColor = project.color === "highlight" ? "text-highlight" : "text-accent";
            const checkColor = project.color === "highlight" ? "text-highlight" : "text-accent";

            return (
              <div
                key={index}
                ref={project.ref as React.RefObject<HTMLDivElement>}
                className={`glass-panel rounded-2xl p-6 md:p-10 ${borderColor} overflow-hidden ${project.className}`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <img
                        src={project.logo}
                        alt={`${project.client} logo`}
                        className="h-14 w-auto object-contain"
                      />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${textColor} bg-current/10 border border-current/30`}>
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {project.client}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-4">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                        {t("projects.projectFocus")}
                      </h4>
                      <ul className="space-y-3">
                        {project.focus.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-muted-foreground text-sm animate-fade-in"
                            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                          >
                            <CheckCircle2 className={`${checkColor} mr-3 mt-0.5 flex-shrink-0 w-5 h-5`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Video Side */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                      <iframe
                        src={project.videoUrl}
                        title={`${project.client} Project Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
