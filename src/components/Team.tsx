import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: t("team.nameTBA"),
      position: t("team.positions.ceo"),
      role: t("team.roles.ceo"),
      linkedin: "#",
    },
    {
      name: t("team.nameTBA"),
      position: t("team.positions.pmo"),
      role: t("team.roles.pmo"),
      linkedin: "#",
    },
    {
      name: t("team.nameTBA"),
      position: t("team.positions.cmo"),
      role: t("team.roles.cmo"),
      linkedin: "#",
    },
  ];

  return (
    <section id="team" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
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
              className="glass-card hover-lift border-primary/20 animate-fade-in-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Profile Image Placeholder */}
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-card">
                  <User className="w-16 h-16 text-primary/60" />
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
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
