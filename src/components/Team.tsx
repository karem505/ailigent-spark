import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import teamAhmed from "@/assets/team-ahmed.png";
import teamKarem from "@/assets/team-karem.jpg";
import teamSohaila from "@/assets/team-sohaila.jpg";
import teamMohamed from "@/assets/team-mohamed.jpg";
import teamAnna from "@/assets/team-anna.jpg";
import teamAbdelaziz from "@/assets/team-abdelaziz.jpg";
import teamOleksii from "@/assets/team-oleksii.jpg";
import teamHady from "@/assets/team-hady.png";

export const Team = () => {
  const { t } = useTranslation();

  const executives = [
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

  const teamMembers = [
    {
      name: t("team.members.mohamed.name"),
      position: t("team.positions.marketing"),
      role: t("team.roles.marketing"),
      linkedin: "https://www.linkedin.com/in/mohammed-abd-elsattar-8ba612121/",
      image: teamMohamed,
    },
    {
      name: t("team.members.anna.name"),
      position: t("team.positions.analytics"),
      role: t("team.roles.analytics"),
      linkedin: "https://www.linkedin.com/in/anna-chyzhova-23b8121ab/",
      image: teamAnna,
    },
    {
      name: t("team.members.abdelaziz.name"),
      position: t("team.positions.projectManager"),
      role: t("team.roles.projectManager"),
      linkedin: "https://www.linkedin.com/in/abdulazeezaletiby/",
      image: teamAbdelaziz,
    },
    {
      name: t("team.members.oleksii.name"),
      position: t("team.positions.technology"),
      role: t("team.roles.technology"),
      linkedin: "https://www.linkedin.com/in/oleksii-samoilenko-5802a5147/",
      image: teamOleksii,
    },
    {
      name: t("team.members.hady.name"),
      position: t("team.positions.developer"),
      role: t("team.roles.developer"),
      linkedin: "https://www.linkedin.com/in/hady-abouelliel-74516b226/",
      image: teamHady,
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

        {/* Executive Team Grid - Top 3 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {executives.map((member, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-primary/20 animate-fade-in-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Profile Image - Larger for executives */}
                <div className="mx-auto w-40 h-40 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-card">
                  <img 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
                  <p className="text-base font-semibold text-secondary">{member.role}</p>
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

        {/* Rest of Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-primary/20 animate-fade-in-up group text-center"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <CardHeader className="space-y-3">
                {/* Profile Image */}
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-card">
                  <img 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                  <p className="text-xs font-semibold text-secondary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.position}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:text-primary text-xs"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4 mr-1" />
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
