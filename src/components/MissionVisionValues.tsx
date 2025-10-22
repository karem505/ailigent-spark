import { Target, Eye, Star, Sparkles, Users, Award, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  return (
    <section id="mission" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("mission.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("mission.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Mission Card */}
          <Card className="glass-card hover-lift border-primary/20 animate-fade-in-up group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("mission.ourMission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/80 leading-relaxed">
                {t("mission.missionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="glass-card hover-lift border-primary/20 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("mission.ourVision")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/80 leading-relaxed">
                {t("mission.visionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card className="glass-card hover-lift border-primary/20 animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("mission.ourValues")}</CardTitle>
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
                  <li key={index} className="flex items-center gap-3 text-foreground/80">
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
