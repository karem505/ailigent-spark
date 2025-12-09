import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { Shield, Zap, HeadphonesIcon, ArrowRight } from "lucide-react";
import { useMultiLayerParallax } from "@/hooks/useParallax";
import { useCountUp } from "@/hooks/useCountUp";

export const Hero = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState("");
  const { getLayerStyle } = useMultiLayerParallax();

  // Animated counters
  const stat1 = useCountUp({ end: 90, duration: 2000, delay: 300 });
  const stat2 = useCountUp({ end: 150, duration: 2500, delay: 500 });
  const stat3 = useCountUp({ end: 99.9, decimals: 1, duration: 2000, delay: 700 });

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.6)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = 0.1 * (1 - dist / 150);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Layers with Parallax */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0 bg-grid opacity-20"
        style={getLayerStyle(0.1)}
      />
      <div 
        className="absolute inset-0 bg-gradient-mesh"
        style={getLayerStyle(0.05)}
      />

      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
      />

      {/* Animated Glow Orbs with Parallax */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] pointer-events-none animate-pulse-slow"
        style={getLayerStyle(0.15)}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"
        style={{ ...getLayerStyle(0.2), animationDelay: "2s" }}
      />

      {/* Geometric Decorations with Parallax */}
      <div 
        className="absolute top-40 left-20 hidden lg:block"
        style={getLayerStyle(0.25)}
      >
        <div className="w-16 h-16 border border-primary/30 rounded-full animate-float" />
        <div className="w-3 h-3 bg-primary/50 rounded-full absolute -bottom-8 left-8" />
      </div>
      <div 
        className="absolute bottom-40 left-16 hidden lg:block"
        style={getLayerStyle(0.3)}
      >
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="opacity-30">
          <path d="M0 60L30 30L60 60L30 90L0 60Z" stroke="hsl(var(--primary))" strokeWidth="1" />
          <path d="M15 60L30 45L45 60L30 75L15 60Z" stroke="hsl(var(--highlight))" strokeWidth="1" />
        </svg>
      </div>
      <div 
        className="absolute top-32 right-32 hidden lg:block"
        style={getLayerStyle(0.2)}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-40">
          <path d="M20 40L40 20L60 40" stroke="hsl(var(--highlight))" strokeWidth="2" />
          <path d="M20 50L40 30L60 50" stroke="hsl(var(--highlight))" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-highlight/20 border border-highlight/40 text-highlight text-xs font-mono uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              {t("hero.status", "System Operational")}
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
              <span className="text-foreground block">Transform.</span>
              <span className="text-highlight block italic">Automate.</span>
              <span className="text-foreground block">Scale.</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {t("hero.description", "We build intelligent automation systems that eliminate inefficiencies and accelerate growth. Boost productivity by 90%+ with enterprise-grade AI solutions.")}
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("hero.emailPlaceholder", "Enter your work email")}
                className="flex-1 px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all font-mono text-sm"
              />
              <button
                onClick={scrollToConsultation}
                className="px-6 py-4 rounded-lg bg-highlight hover:bg-highlight/90 text-highlight-foreground font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap button-shine glow-primary-intense"
              >
                {t("hero.cta", "Get Demo")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm font-mono mb-10">
              {t("hero.noCreditCard", "No credit card required")} • {t("hero.freeConsultation", "Free consultation")}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card/60 border border-border text-foreground text-xs font-mono uppercase tracking-wider glow-border">
                <Shield className="w-4 h-4 text-highlight" />
                {t("hero.badge1", "Enterprise Security")}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card/60 border border-border text-foreground text-xs font-mono uppercase tracking-wider glow-border">
                <Zap className="w-4 h-4 text-highlight" />
                {t("hero.badge2", "Fast Deploy")}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card/60 border border-border text-foreground text-xs font-mono uppercase tracking-wider glow-border">
                <HeadphonesIcon className="w-4 h-4 text-highlight" />
                {t("hero.badge3", "24/7 Support")}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards with Animated Counters */}
          <div className="space-y-4 animate-fade-in animation-delay-200">
            {/* Main Stat Card */}
            <div 
              ref={stat1.ref as React.RefObject<HTMLDivElement>}
              className="relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border p-8 glow-card overflow-hidden"
            >
              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <svg viewBox="0 0 96 96" fill="none" className="w-full h-full opacity-40">
                  <path d="M96 0V32L64 0H96Z" stroke="hsl(var(--border))" strokeWidth="1" />
                  <path d="M96 32V64L32 0H64L96 32Z" stroke="hsl(var(--border))" strokeWidth="1" />
                </svg>
              </div>
              
              <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-4">
                {t("hero.stat1Label", "Productivity Boost")}
              </p>
              <p className="text-6xl md:text-7xl font-display font-bold text-highlight mb-2">
                {Math.round(stat1.count)}<span className="text-4xl">%+</span>
              </p>
              <p className="text-muted-foreground text-sm">
                {t("hero.stat1Desc", "Average increase across implementations")}
              </p>
            </div>

            {/* Two Column Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                ref={stat2.ref as React.RefObject<HTMLDivElement>}
                className="rounded-2xl bg-card/60 backdrop-blur-sm border border-border p-6 glow-card"
              >
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-3">
                  {t("hero.stat2Label", "Active Projects")}
                </p>
                <p className="text-4xl font-display font-bold text-foreground mb-1">
                  {Math.round(stat2.count)}<span className="text-primary text-2xl">+</span>
                </p>
                <p className="text-muted-foreground text-xs">
                  {t("hero.stat2Desc", "In production")}
                </p>
              </div>
              <div 
                ref={stat3.ref as React.RefObject<HTMLDivElement>}
                className="rounded-2xl bg-card/60 backdrop-blur-sm border border-border p-6 glow-card"
              >
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-3">
                  {t("hero.stat3Label", "Uptime")}
                </p>
                <p className="text-4xl font-display font-bold text-foreground mb-1">
                  {stat3.count.toFixed(1)}<span className="text-primary text-2xl">%</span>
                </p>
                <p className="text-muted-foreground text-xs flex items-center gap-2">
                  {t("hero.stat3Desc", "Service reliability")}
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="rounded-2xl bg-card/60 backdrop-blur-sm border border-border p-6 glow-card">
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground text-sm font-mono">
                  {t("hero.processing", "Processing")}
                </p>
                <p className="text-highlight text-sm font-mono">
                  {t("hero.realtime", "Real-time")}
                </p>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full animate-shimmer"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--highlight)) 0%, hsl(var(--primary)) 50%, hsl(60 100% 50%) 100%)",
                    width: "85%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};
