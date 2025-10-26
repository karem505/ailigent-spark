import logoLight from "@/assets/logo-dark-blue.png";
import logoDark from "@/assets/logo-light-blue.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const PreFooter = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const columns = {
    solutions: [
      { name: t("preFooter.solutions.aiAutomation"), href: "#solutions" },
      { name: t("preFooter.solutions.customSoftware"), href: "#solutions" },
      { name: t("preFooter.solutions.processOptimization"), href: "#solutions" },
      { name: t("preFooter.solutions.integrationServices"), href: "#solutions" },
    ],
    company: [
      { name: t("preFooter.company.aboutUs"), href: "#mission" },
      { name: t("preFooter.company.caseStudies"), href: "#projects" },
      { name: t("preFooter.company.team"), href: "#team" },
      { name: t("preFooter.company.contact"), href: "#consultation" },
    ],
    contact: [
      { label: t("preFooter.contact.email"), value: t("preFooter.contact.emailValue"), href: "mailto:info@ailigent.ai" },
      { label: t("preFooter.contact.phone"), value: t("preFooter.contact.phoneValue"), href: "#consultation" },
      { label: t("preFooter.contact.location"), value: t("preFooter.contact.locationValue"), href: "#" },
    ],
  };

  return (
    <section className="py-16 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={isDark ? logoDark : logoLight} alt="AILIGENT" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("preFooter.tagline")}
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">{t("preFooter.solutions.title")}</h4>
            <ul className="space-y-2">
              {columns.solutions.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">{t("preFooter.company.title")}</h4>
            <ul className="space-y-2">
              {columns.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">{t("preFooter.contact.title")}</h4>
            <ul className="space-y-3">
              {columns.contact.map((item, index) => (
                <li key={index} className="text-sm">
                  <span className="text-muted-foreground">{item.label}:</span>{" "}
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
