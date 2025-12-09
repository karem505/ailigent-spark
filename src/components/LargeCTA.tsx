import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const LargeCTA = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-8 animate-fade-in">
          Ready to <span className="text-primary">Transform?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 font-bold animate-fade-in" style={{ animationDelay: "0.1s" }}>
          From AI automation to digital transformation. Let's build your intelligent future together.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            onClick={scrollToConsultation}
            size="lg"
            className="px-8 py-6 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-colors text-base"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
