import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoLight from "@/assets/logo-light-blue.png";

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const footerLinks = {
    solutions: [
      { label: t("footer.solutions.aiAutomation", "AI Automation"), href: "#products" },
      { label: t("footer.solutions.customSoftware", "Custom Software"), href: "#products" },
      { label: t("footer.solutions.processOptimization", "Process Optimization"), href: "#products" },
      { label: t("footer.solutions.integration", "Integration Services"), href: "#products" },
    ],
    company: [
      { label: t("footer.company.about", "About Us"), href: "#mission" },
      { label: t("footer.company.caseStudies", "Case Studies"), href: "#projects" },
      { label: t("footer.company.team", "Team"), href: "#team" },
      { label: t("footer.company.contact", "Contact"), href: "#consultation" },
    ],
  };

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 px-4 bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo and Tagline - Left Side */}
          <div className="md:col-span-4 space-y-4">
            <img 
              src={logoLight} 
              alt="AILIGENT Logo" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t("footer.tagline", "Empowering Fortune 500 companies with autonomous AI systems and custom enterprise software solutions.")}
            </p>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.solutions.title", "SOLUTIONS")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.company.title", "COMPANY")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Right Side */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.contact.title", "CONTACT")}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="text-muted-foreground">{t("footer.contact.email", "Email:")} </span>
                <a 
                  href="mailto:info@ailigent.ai" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  info@ailigent.ai
                </a>
              </li>
              <li className="text-sm">
                <span className="text-muted-foreground">{t("footer.contact.phone", "Phone:")} </span>
                <a 
                  href="#consultation" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("footer.contact.contactUs", "Contact us")}
                </a>
              </li>
              <li className="text-sm">
                <span className="text-muted-foreground">{t("footer.contact.location", "Location:")} </span>
                <span className="text-foreground">
                  {t("footer.contact.locationValue", "Saudi Arabia")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
