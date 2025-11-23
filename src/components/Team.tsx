import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
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
  const { ref, isVisible } = useScrollReveal();

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

  const allMembers = [...executives, ...teamMembers];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="team" 
      className={`py-24 px-4 relative overflow-hidden bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <BackgroundAnimation />
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-primary font-medium text-xs uppercase tracking-widest mb-3">
            {t("team.subtitle")}
          </h2>
          <h1 className="text-4xl lg:text-5xl font-manrope font-medium text-foreground tracking-tight mb-6">
            {t("team.title")}
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {t("team.description", "We are a distributed team of AI specialists, engineers, and innovators building the future of intelligent automation.")}
          </p>
        </div>

        {/* Team Grid - All Members in 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {allMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-card border border-border relative mb-4">
                <img 
                  src={member.image} 
                  alt={`${member.name} profile`}
                  className="object-cover object-top w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social icon on hover */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-foreground/10 backdrop-blur hover:bg-foreground text-foreground hover:text-background rounded-full transition-colors flex items-center justify-center"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-foreground font-medium text-base tracking-tight">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-0.5">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
