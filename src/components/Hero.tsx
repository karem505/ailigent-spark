import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroLogoLight from "@/assets/logo-dark-blue.png";
import heroLogoDark from "@/assets/logo-light-blue.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
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

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glassmorphic Gradient Background */}
      <div className="absolute inset-0 z-0 gradient-hero" />

      {/* Animated Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-float opacity-40" 
          style={{ background: 'radial-gradient(circle, hsl(270 70% 60% / 0.6) 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-float opacity-40" 
          style={{ background: 'radial-gradient(circle, hsl(190 100% 50% / 0.6) 0%, transparent 70%)', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-float opacity-30" 
          style={{ background: 'radial-gradient(circle, hsl(160 90% 50% / 0.4) 0%, transparent 70%)', animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Logo on Left */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={isDark ? heroLogoDark : heroLogoLight} 
              alt="AILIGENT Logo" 
              className="w-full max-w-md h-auto"
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
                className="gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg font-bold shadow-glow-hover group border-0"
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
