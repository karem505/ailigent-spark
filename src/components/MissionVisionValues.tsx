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
          <Card className="glass-morphism hover-lift glass-overlay animate-fade-in-up group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-2xl gradient-icon flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("mission.ourMission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/90 leading-relaxed">
                {t("mission.missionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="glass-morphism hover-lift glass-overlay animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-2xl gradient-icon flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("mission.ourVision")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/90 leading-relaxed">
                {t("mission.visionText")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card className="glass-morphism hover-lift glass-overlay animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-2xl gradient-icon flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Star className="w-10 h-10 text-white" />
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
                  <li key={index} className="flex items-center gap-3 text-foreground/90">
                    <value.icon className="w-5 h-5 text-secondary flex-shrink-0" />
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
