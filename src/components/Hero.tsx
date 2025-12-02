import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import { useState } from "react";
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
      className={`relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 bg-background tech-grid" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Scan Line Effect */}
      <div className="scan-line" />

      {/* Geometric Accent Shapes */}
      <div className="geometric-accent w-64 h-64 top-20 right-20 rotate-45 hidden lg:block" />
      <div className="geometric-accent w-48 h-48 bottom-32 left-10 -rotate-12 hidden lg:block" />

      {/* Decorative Technical Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-accent/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 left-20 w-64 h-px bg-gradient-to-r from-primary/40 to-transparent hidden lg:block" />

      {/* Glowing Data Points */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary rounded-full animate-data-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-data-pulse hidden lg:block" style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-data-pulse hidden lg:block" style={{ animationDelay: "0.5s" }} />

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">
                {t("hero.status", "System Operational")}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                <span className="block">{t("hero.headline1", "Transform")}</span>
                <span className="block text-primary">{t("hero.headline2", "Automate")}</span>
                <span className="block">{t("hero.headline3", "Scale")}</span>
              </h1>

              <div className="accent-line pt-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t("hero.subtitle", "AILIGENT delivers intelligent AI automation solutions that boost productivity by over 90%. Transform your operations with cutting-edge technology.")}
                </p>
              </div>
            </div>

            {/* CTA Form */}
            <form onSubmit={handleSubmit} className="max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={t("hero.emailPlaceholder", "Enter your work email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 bg-card border border-border focus:border-primary font-mono text-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wide text-sm transition-all duration-200 hover:shadow-glow"
                >
                  {t("hero.ctaButton", "Get Demo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-mono">
                {t("hero.benefit1", "No credit card required")} • {t("hero.benefit2", "Free consultation")}
              </p>
            </form>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 border border-border bg-card/50">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">{t("hero.feature1", "Enterprise Security")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-border bg-card/50">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium uppercase tracking-wide">{t("hero.feature2", "Fast Deploy")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-border bg-card/50">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">{t("hero.feature3", "24/7 Support")}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Data Metrics Dashboard */}
          <div className="relative hidden lg:block">
            <div className="space-y-6">
              {/* Main Metric Card */}
              <div className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 tech-grid-dense opacity-30" />
                <div className="relative z-10">
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                    {t("hero.metric1.label", "Productivity Boost")}
                  </div>
                  <div className="metric-display text-7xl text-primary mb-2 animate-fade-in-number">
                    90<span className="text-5xl">%+</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("hero.metric1.description", "Average increase across implementations")}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-primary/20" />
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-border bg-card/30 backdrop-blur-sm p-6 relative group hover:border-primary/30 transition-colors">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                    {t("hero.metric2.label", "Active Projects")}
                  </div>
                  <div className="metric-display text-4xl text-foreground mb-1 animate-fade-in-number" style={{ animationDelay: "0.1s" }}>
                    150<span className="text-2xl text-primary">+</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("hero.metric2.description", "In production")}
                  </div>
                </div>

                <div className="border border-border bg-card/30 backdrop-blur-sm p-6 relative group hover:border-accent/30 transition-colors">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                    {t("hero.metric3.label", "Uptime")}
                  </div>
                  <div className="metric-display text-4xl text-foreground mb-1 animate-fade-in-number" style={{ animationDelay: "0.2s" }}>
                    99.9<span className="text-2xl text-accent">%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("hero.metric3.description", "Service reliability")}
                  </div>
                </div>
              </div>

              {/* Technical Status Bar */}
              <div className="border border-border bg-card/20 backdrop-blur-sm p-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">{t("hero.status.processing", "Processing")}</span>
                  <span className="text-primary">{t("hero.status.value", "Real-time")}</span>
                </div>
                <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent animate-pulse" />
                </div>
              </div>
            </div>

            {/* Decorative Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-accent/20" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
