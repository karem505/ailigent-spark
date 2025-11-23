import { Target, Eye, Star, Sparkles, Users, Award, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="mission" 
      className={`py-24 px-4 relative overflow-hidden bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-manrope font-light tracking-tight">{t("mission.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("mission.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Mission Card */}
          <Card className="glass-card border-border/30 shadow-card animate-fade-in-up group transition-all duration-300 hover:border-border/60">
            <CardHeader className="text-center pb-4 space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Target className="w-6 h-6 text-primary/80" />
              </div>
              <div className="space-y-2">
                <p className="card-label">{t("mission.ourMission")}</p>
                <CardTitle className="text-xl font-manrope font-light tracking-tight">{t("mission.ourMission")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed text-center">
                {t("mission.missionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="glass-card border-border/30 shadow-card animate-fade-in-up group transition-all duration-300 hover:border-border/60" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="text-center pb-4 space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Eye className="w-6 h-6 text-primary/80" />
              </div>
              <div className="space-y-2">
                <p className="card-label">{t("mission.ourVision")}</p>
                <CardTitle className="text-xl font-manrope font-light tracking-tight">{t("mission.ourVision")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed text-center">
                {t("mission.visionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card className="glass-card border-border/30 shadow-card animate-fade-in-up group transition-all duration-300 hover:border-border/60" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="text-center pb-4 space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Star className="w-6 h-6 text-primary/80" />
              </div>
              <div className="space-y-2">
                <p className="card-label">{t("mission.ourValues")}</p>
                <CardTitle className="text-xl font-manrope font-light tracking-tight">{t("mission.ourValues")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {[
                  { icon: Sparkles, text: t("mission.values.innovation") },
                  { icon: Award, text: t("mission.values.integrity") },
                  { icon: Heart, text: t("mission.values.clientCentric") },
                  { icon: Users, text: t("mission.values.collaboration") },
                  { icon: TrendingUp, text: t("mission.values.excellence") },
                  { icon: Target, text: t("mission.values.responsibleAI") },
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-muted-foreground">
                    <value.icon className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" />
                    <span className="text-xs">{value.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
