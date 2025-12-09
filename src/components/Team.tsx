import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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

  const allMembers = [
    {
      name: t("team.members.gm.name"),
      role: t("team.roles.ceo"),
      linkedin: "https://www.linkedin.com/in/alsenosy/",
      image: teamAhmed,
      initials: "Dr. A",
    },
    {
      name: t("team.members.ceo.name"),
      role: t("team.roles.pmo"),
      linkedin: "https://www.linkedin.com/in/abo-el-makarem-shohoud-745367244/",
      image: teamKarem,
      initials: "Dr. K",
    },
    {
      name: t("team.members.cmo.name"),
      role: t("team.roles.cmo"),
      linkedin: "https://www.linkedin.com/in/sohaila-abuelliel-350672274/",
      image: teamSohaila,
      initials: "Dr. S",
    },
    {
      name: t("team.members.mohamed.name"),
      role: t("team.roles.marketing"),
      linkedin: "https://www.linkedin.com/in/mohammed-abd-elsattar-8ba612121/",
      image: teamMohamed,
      initials: "Moham",
    },
    {
      name: t("team.members.anna.name"),
      role: t("team.roles.analytics"),
      linkedin: "https://www.linkedin.com/in/anna-chyzhova-23b8121ab/",
      image: teamAnna,
      initials: "Anna",
    },
    {
      name: t("team.members.abdelaziz.name"),
      role: t("team.roles.projectManager"),
      linkedin: "https://www.linkedin.com/in/abdulazeezaletiby/",
      image: teamAbdelaziz,
      initials: "Abdel",
    },
    {
      name: t("team.members.oleksii.name"),
      role: t("team.roles.technology"),
      linkedin: "https://www.linkedin.com/in/oleksii-samoilenko-5802a5147/",
      image: teamOleksii,
      initials: "Oleks",
    },
    {
      name: t("team.members.hady.name"),
      role: t("team.roles.developer"),
      linkedin: "https://www.linkedin.com/in/hady-abouelliel-74516b226/",
      image: teamHady,
      initials: "Hady",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="team"
      className={`py-20 bg-background/50 scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-12 reveal active">
          {t("team.title")}
        </h2>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {allMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative w-48 text-center reveal active delay-${((index % 8) + 1) * 100}`}
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-muted to-card border-2 border-border overflow-hidden mb-4 group-hover:border-primary transition-colors">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">{member.initials}</span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-foreground font-bold">{member.name}</h3>
              <p className="text-primary text-sm">{member.role}</p>

              {/* LinkedIn on hover */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`${member.name} LinkedIn`}
              >
                <div className="p-2 bg-primary rounded-full">
                  <Linkedin className="w-4 h-4 text-primary-foreground" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
