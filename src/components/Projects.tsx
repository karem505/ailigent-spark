import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Play } from "lucide-react";
import peLogo from "@/assets/pe-logo.webp";
import tornixLogo from "@/assets/tornix-logo.png";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

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
        t("projects.pe.focus.4"),
      ],
      videoUrl: "https://www.youtube.com/embed/4T1_Spk9dss",
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
        t("projects.tornix.focus.4"),
      ],
      videoUrl: "https://www.youtube.com/embed/jbuQf16vO-4",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="projects" 
      className={`py-24 px-4 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-manrope font-light tracking-tight">{t("projects.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-neutral-800 animate-fade-in-up overflow-hidden hover-scale-effect border-beam transition-all duration-200 hover:border-neutral-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Content Side */}
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.logo}
                      alt={`${project.client} logo`}
                      className="h-16 w-auto object-contain"
                    />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-manrope font-light">{project.client}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="pt-4 space-y-3">
                    <h4 className="font-semibold text-lg text-foreground">{t("projects.projectFocus")}</h4>
                    <ul className="space-y-2">
                      {project.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>

                {/* Video Side */}
                <CardContent className="p-0 lg:p-6 flex items-center">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden group shadow-card">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.client} Project Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
