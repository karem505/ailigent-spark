import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const socialLinks = [
    {
      name: "X",
      icon: Mail,
      href: "https://twitter.com/ailigent",
      ariaLabel: "X (Twitter)",
    },
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

  const footerLinks = {
    company: [
      { label: t("footer.company.productOverview", "Product overview"), href: "#products" },
      { label: t("footer.company.pricing", "Pricing & plans"), href: "#consultation" },
      { label: t("footer.company.customerStories", "Customer stories"), href: "#projects" },
      { label: t("footer.company.team", "Team"), href: "#team" },
    ],
    support: [
      { label: t("footer.support.knowledgeBase", "Knowledge base"), href: "#" },
      { label: t("footer.support.implementation", "Implementation desk"), href: "#consultation" },
      { label: t("footer.support.status", "Status & uptime"), href: "#" },
      { label: t("footer.support.security", "Security portal"), href: "#" },
    ],
    community: [
      { label: t("footer.community.forum", "Operator forum"), href: "#" },
      { label: t("footer.community.workshops", "Treasury workshops"), href: "#" },
      { label: t("footer.community.network", "Partner network"), href: "#" },
      { label: t("footer.community.careers", "Careers"), href: "#team" },
    ],
    governance: [
      { label: t("footer.governance.briefings", "Investor briefings"), href: "#" },
      { label: t("footer.governance.risk", "Risk framework"), href: "#" },
      { label: t("footer.governance.data", "Data processing"), href: "#" },
      { label: t("footer.governance.regulatory", "Regulatory resources"), href: "#" },
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
            {/* Company Column */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t("footer.company.title", "COMPANY")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t("footer.support.title", "SUPPORT")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t("footer.community.title", "COMMUNITY")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance Column */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t("footer.governance.title", "GOVERNANCE")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.governance.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright", "© 2025 AILIGENT. All rights reserved.")}
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
