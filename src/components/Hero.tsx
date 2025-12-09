import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
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

        ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
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
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-40"
      />

      {/* Floating Icons Container */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating icons would be injected here */}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 text-primary text-sm font-medium mb-8 animate-float reveal active">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
          </span>
          {t("hero.status", "System Operational: Transforming Enterprise Operations")}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight tracking-tight reveal active delay-100">
          {t("hero.headline1", "Transform Your Business.")}<br />
          <span className="text-gradient">{t("hero.headline2", "Automate Everything.")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed reveal active delay-200">
          {t("hero.subtitle", "AILIGENT delivers intelligent AI automation solutions that boost productivity by over")}{" "}
          <span className="text-foreground font-bold">90%</span>.{" "}
          {t("hero.subtitleCont", "Transform your operations with cutting-edge technology.")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal active delay-300">
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-lg transition-all duration-300 btn-glow transform hover:-translate-y-1"
          >
            {t("hero.ctaDemo", "Get Free Demo")}
          </button>
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-lg glass-panel hover:bg-secondary text-foreground font-bold text-lg transition-all duration-300 border border-border hover:border-muted-foreground"
          >
            {t("hero.ctaConsultation", "Free Consultation")}
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10 reveal active delay-400">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">90%+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("hero.stat1", "Productivity Boost")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">150+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("hero.stat2", "Active Projects")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("hero.stat3", "System Uptime")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              {t("hero.stat4Value", "Real-time")}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("hero.stat4", "Processing")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
