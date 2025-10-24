import { Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61582507262883",
      ariaLabel: t("footer.social.facebook"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/109390621/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BmXEBiUOGT12d9b%2BCaVphDA%3D%3D",
      ariaLabel: t("footer.social.linkedin"),
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:info@ailigent.ai",
      ariaLabel: t("footer.social.email"),
    },
  ];

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
