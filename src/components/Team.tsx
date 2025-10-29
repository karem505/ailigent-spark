import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import teamAhmed from "@/assets/team-ahmed.png";
import teamKarem from "@/assets/team-karem.jpg";
import teamSohaila from "@/assets/team-sohaila.jpg";

export const Team = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: t("team.members.gm.name"),
      position: t("team.positions.ceo"),
      role: t("team.roles.ceo"),
      linkedin: "https://www.linkedin.com/in/alsenosy/",
      image: teamAhmed,
    },
    {
      name: t("team.members.ceo.name"),
      position: t("team.positions.pmo"),
      role: t("team.roles.pmo"),
      linkedin: "https://www.linkedin.com/in/abo-el-makarem-shohoud-745367244/",
      image: teamKarem,
    },
    {
      name: t("team.members.cmo.name"),
      position: t("team.positions.cmo"),
      role: t("team.roles.cmo"),
      linkedin: "https://www.linkedin.com/in/sohaila-abuelliel-350672274/",
      image: teamSohaila,
    },
  ];

  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-30 animate-float" 
          style={{ background: 'radial-gradient(circle, hsl(270 70% 60% / 0.5) 0%, transparent 70%)', animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-30 animate-float" 
          style={{ background: 'radial-gradient(circle, hsl(190 100% 50% / 0.5) 0%, transparent 70%)', animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("team.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="glass-morphism hover-lift glass-overlay animate-fade-in-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Profile Image */}
                <div className="mx-auto w-36 h-36 rounded-2xl overflow-hidden group-hover:scale-105 transition-smooth shadow-glow border-2 border-secondary/30">
                  <img 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <p className="text-sm font-semibold gradient-primary bg-clip-text text-transparent">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="glass-card hover:border-secondary/50 transition-smooth"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-5 h-5 mr-2 text-secondary" />
                    {t("team.linkedin")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
