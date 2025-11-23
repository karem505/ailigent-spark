import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoLight from "@/assets/logo-dark-blue.png";
import logoDark from "@/assets/logo-light-blue.png";
import { useEffect, useState } from "react";

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();
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

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/ailigent",
      ariaLabel: "Instagram",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/109390621/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BmXEBiUOGT12d9b%2BCaVphDA%3D%3D",
      ariaLabel: "LinkedIn",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61582507262883",
      ariaLabel: "Facebook",
    },
  ];

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

  const bottomLinks = [
    { label: t("footer.bottom.terms", "Terms"), href: "#" },
    { label: t("footer.bottom.privacy", "Privacy"), href: "#" },
    { label: t("footer.bottom.cookies", "Cookie policy"), href: "#" },
    { label: t("footer.bottom.status", "System status"), href: "#" },
  ];

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 px-4 bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="backdrop-blur-lg bg-card/50 border border-border rounded-3xl p-8 md:p-12">
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-1 pb-12 mb-12 border-b border-border">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="h-12 w-24 rounded-none border-r border-border last:border-r-0 hover:bg-primary/5 hover:text-primary transition-all"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex items-center gap-2"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="text-sm">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="space-y-4">
              <img src={isDark ? logoDark : logoLight} alt="AILIGENT" className="h-12 w-auto" />
              <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                {t("preFooter.tagline")}
              </p>
            </div>

            {/* Solutions Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t("preFooter.solutions.title")}
              </h3>
              <ul className="space-y-3">
                {columns.solutions.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm text-foreground hover:text-primary transition-colors font-bold"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t("preFooter.company.title")}
              </h3>
              <ul className="space-y-3">
                {columns.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm text-foreground hover:text-primary transition-colors font-bold"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t("preFooter.contact.title")}
              </h3>
              <ul className="space-y-3">
                {columns.contact.map((item, index) => (
                  <li key={index} className="text-sm">
                    <span className="text-muted-foreground font-bold">{item.label}:</span>{" "}
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-bold"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-bold">
              {t("footer.copyright", "© 2025 AILIGENT. All rights reserved.")}
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-bold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
