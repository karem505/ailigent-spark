import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import heroLogoLight from "@/assets/hero-logo.png";
import heroLogoDark from "@/assets/hero-logo-dark.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Logo on Left */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={theme === "dark" ? heroLogoDark : heroLogoLight} 
              alt="AILIGENT Logo" 
              className="w-full max-w-md h-auto shadow-glow animate-glow drop-shadow-2xl"
            />
          </div>

          {/* Content on Right */}
          <div className="space-y-8 text-center md:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {t("hero.headline")}
              </span>
            </h1>

            {/* About Us Section */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("hero.aboutUs")}</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <strong className="text-foreground">{t("hero.companyName")}</strong> {t("hero.description")}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={scrollToConsultation}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold shadow-glow animate-glow group"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
