import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Globe, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollReveal();

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToConsultation();
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Mesh Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse" style={{ animationDuration: "8s" }} />
        </div>

        {/* Large animated orbs with varied speeds */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s", animationDuration: "8s" }} />
        <div className="absolute bottom-10 left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s", animationDuration: "10s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s", animationDuration: "12s" }} />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s", animationDuration: "9s" }} />
        
        {/* Rotating gradient rings */}
        <div className="absolute top-20 right-1/4 w-64 h-64 border-2 border-primary/10 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-32 left-1/3 w-80 h-80 border-2 border-accent/10 rounded-full animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
        
        {/* Floating particles - increased count and visibility */}
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="particle animate-particle bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              '--duration': `${Math.random() * 8 + 12}s`,
              '--delay': `${Math.random() * 6}s`,
              '--drift': `${(Math.random() - 0.5) * 150}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Accent particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="particle animate-particle bg-accent/50"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              '--duration': `${Math.random() * 10 + 15}s`,
              '--delay': `${Math.random() * 10}s`,
              '--drift': `${(Math.random() - 0.5) * 180}px`,
            } as React.CSSProperties}
          />
        ))}

        {/* Glowing dots with more variety */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-glow shadow-glow" />
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse-glow shadow-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse-glow shadow-glow" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {t("hero.trustBadge", "Trusted by leading companies worldwide")}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-manrope font-bold leading-tight tracking-tight">
              {t("hero.headline1", "Transform your business.")}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-manrope font-bold leading-tight tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("hero.headline2", "Automate everything.")}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-manrope font-bold leading-tight tracking-tight">
              {t("hero.headline3", "Scale faster.")}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle", "AILIGENT delivers intelligent AI automation solutions that boost productivity by over 90%. Transform your operations with cutting-edge technology.")}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">{t("hero.feature1", "Enterprise Security")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm">{t("hero.feature2", "Global Deployment")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">{t("hero.feature3", "24/7 Support")}</span>
            </div>
          </div>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <Input
                type="email"
                placeholder={t("hero.emailPlaceholder", "Enter your work email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 bg-background border-2 border-primary/30 focus:border-primary rounded-xl text-base"
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium rounded-xl shadow-glow transition-all duration-200 hover-scale-effect"
              >
                {t("hero.ctaButton", "Get Free Demo")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Sub-text */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{t("hero.benefit1", "No credit card required")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{t("hero.benefit2", "Free consultation")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{t("hero.benefit3", "Custom solutions")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
