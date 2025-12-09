import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5,
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

        // Gradient color for particles
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections with gradient
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = 0.15 * (1 - dist / 180);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.8;
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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
      />

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-highlight/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 text-primary text-sm font-medium mb-8 animate-fade-in animate-float">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
          </span>
          {t("hero.status", "System Operational: Transforming Enterprise Operations")}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-in-up">
          {t("hero.headline1", "Transform Your Business.")}<br />
          <span className="text-gradient">{t("hero.headline2", "Automate Everything.")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          {t("hero.subtitle", "AILIGENT delivers intelligent AI automation solutions that boost productivity by over")}{" "}
          <span className="text-foreground font-bold">90%</span>.{" "}
          {t("hero.subtitleCont", "Transform your operations with cutting-edge technology.")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-lg transition-all duration-300 btn-glow transform hover:-translate-y-1 animate-gradient-shift"
          >
            {t("hero.ctaDemo", "Get Free Demo")}
          </button>
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-lg glass-panel hover:bg-secondary text-foreground font-bold text-lg transition-all duration-300 border border-border hover:border-muted-foreground hover-lift"
          >
            {t("hero.ctaConsultation", "Free Consultation")}
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-10">
          {[
            { value: "90%+", label: t("hero.stat1", "Productivity Boost") },
            { value: "150+", label: t("hero.stat2", "Active Projects") },
            { value: "99.9%", label: t("hero.stat3", "System Uptime") },
            { value: t("hero.stat4Value", "Real-time"), label: t("hero.stat4", "Processing") },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};
