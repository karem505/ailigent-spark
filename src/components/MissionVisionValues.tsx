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
      className={`py-24 px-4 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}
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
          <Card className="glass-card hover-lift border-neutral-800 animate-fade-in-up group border-beam transition-all duration-200 hover:border-neutral-700">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-manrope font-light">{t("mission.ourMission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {t("mission.missionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="glass-card hover-lift border-neutral-800 animate-fade-in-up group hover-scale-effect border-beam transition-all duration-200 hover:border-neutral-700" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-manrope font-light">{t("mission.ourVision")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {t("mission.visionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card className="glass-card hover-lift border-neutral-800 animate-fade-in-up group hover-scale-effect border-beam transition-all duration-200 hover:border-neutral-700" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-manrope font-light">{t("mission.ourValues")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { icon: Sparkles, text: t("mission.values.innovation") },
                  { icon: Award, text: t("mission.values.integrity") },
                  { icon: Heart, text: t("mission.values.clientCentric") },
                  { icon: Users, text: t("mission.values.collaboration") },
                  { icon: TrendingUp, text: t("mission.values.excellence") },
                  { icon: Target, text: t("mission.values.responsibleAI") },
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <value.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{value.text}</span>
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
