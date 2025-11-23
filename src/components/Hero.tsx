import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroLogoLight from "@/assets/logo-dark-blue.png";
import heroLogoDark from "@/assets/logo-light-blue.png";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Hero = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const { ref, isVisible } = useScrollReveal();

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
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large ambient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-particle bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              '--duration': `${Math.random() * 10 + 15}s`,
              '--delay': `${Math.random() * 5}s`,
              '--drift': `${(Math.random() - 0.5) * 100}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Accent particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="particle animate-particle bg-accent/40"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              '--duration': `${Math.random() * 12 + 18}s`,
              '--delay': `${Math.random() * 8}s`,
              '--drift': `${(Math.random() - 0.5) * 120}px`,
            } as React.CSSProperties}
          />
        ))}

        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }} />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-light leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("hero.headline")}
              </span>
            </h1>

            {/* About Us Section */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-manrope font-light text-foreground">{t("hero.aboutUs")}</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <strong className="text-foreground">{t("hero.companyName")}</strong> {t("hero.description")}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={scrollToConsultation}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-glow group hover-scale-effect transition-all duration-200"
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
