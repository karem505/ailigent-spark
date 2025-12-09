import { Facebook, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoLight from "@/assets/logo-dark-blue.png";
import logoDark from "@/assets/logo-light-blue.png";
import { useEffect, useState } from "react";

export const Footer = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/109390621/admin/" },
    { icon: Instagram, href: "https://instagram.com/ailigent" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582507262883" },
  ];

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <img src={isDark ? logoDark : logoLight} alt="AILIGENT" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-xs">{t("preFooter.tagline")}</p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">{t("preFooter.solutions.title")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solutions" className="hover:text-primary">{t("preFooter.solutions.aiAutomation")}</a></li>
              <li><a href="#solutions" className="hover:text-primary">{t("preFooter.solutions.customSoftware")}</a></li>
              <li><a href="#solutions" className="hover:text-primary">{t("preFooter.solutions.processOptimization")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">{t("preFooter.company.title")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#mission" className="hover:text-primary">{t("preFooter.company.aboutUs")}</a></li>
              <li><a href="#projects" className="hover:text-primary">{t("preFooter.company.caseStudies")}</a></li>
              <li><a href="#team" className="hover:text-primary">{t("preFooter.company.team")}</a></li>
              <li><a href="#consultation" className="hover:text-primary">{t("preFooter.company.contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">{t("preFooter.contact.title")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><i className="fas fa-envelope mr-2" />info@ailigent.ai</li>
              <li><i className="fas fa-map-marker-alt mr-2" />{t("preFooter.contact.locationValue")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{t("footer.copyright", "© 2025 AILIGENT. All Rights Reserved.")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-muted-foreground/80">{t("footer.bottom.privacy", "Privacy Policy")}</a>
            <a href="#" className="hover:text-muted-foreground/80">{t("footer.bottom.terms", "Terms of Service")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
