import { Target, Eye, Handshake, Star, Sparkles, Users, Award, Heart, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMultiLayerParallax } from "@/hooks/useParallax";

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, className: sectionClass } = useScrollReveal({ direction: "up" });
  const { ref: missionRef, className: missionClass } = useScrollReveal({ direction: "left", delay: 100 });
  const { ref: visionRef, className: visionClass } = useScrollReveal({ direction: "scale", delay: 200 });
  const { ref: valuesRef, className: valuesClass } = useScrollReveal({ direction: "right", delay: 300 });
  const { getLayerStyle } = useMultiLayerParallax();

  const values = [
    { icon: Sparkles, text: t("mission.values.innovation") },
    { icon: Award, text: t("mission.values.integrity") },
    { icon: Heart, text: t("mission.values.clientCentric") },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="mission"
      className={`py-24 relative overflow-hidden ${sectionClass}`}
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 bg-card/30" />
      <div 
        className="absolute inset-0 bg-grid opacity-20"
        style={getLayerStyle(0.1)}
      />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"
        style={getLayerStyle(0.15)}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" 
        style={{ ...getLayerStyle(0.2), animationDelay: "2s" }}
      />

      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("mission.subtitle", "Our Foundation")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            {t("mission.title")}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div ref={missionRef as React.RefObject<HTMLDivElement>} className={`glass-panel-enhanced card-3d card-shimmer card-glow-border p-8 rounded-2xl group ${missionClass}`}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-float pulse-ring">
              <Target className="w-8 h-8 text-primary icon-glow" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{t("mission.ourMission")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("mission.missionText")}</p>
          </div>

          {/* Vision Card */}
          <div ref={visionRef as React.RefObject<HTMLDivElement>} className={`glass-panel-enhanced card-3d card-shimmer card-glow-border p-8 rounded-2xl group ${visionClass}`}>
            <div className="w-16 h-16 rounded-2xl bg-highlight/10 border border-highlight/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-float pulse-ring">
              <Eye className="w-8 h-8 text-highlight icon-glow" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-highlight transition-colors">{t("mission.ourVision")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("mission.visionText")}</p>
          </div>

          {/* Values Card */}
          <div ref={valuesRef as React.RefObject<HTMLDivElement>} className={`glass-panel-enhanced card-3d card-shimmer card-glow-border p-8 rounded-2xl group ${valuesClass}`}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-float pulse-ring">
              <Handshake className="w-8 h-8 text-accent icon-glow" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{t("mission.ourValues")}</h3>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-center text-muted-foreground text-sm group/item hover:text-foreground transition-colors">
                  <Star className="w-4 h-4 text-accent mr-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  {value.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
