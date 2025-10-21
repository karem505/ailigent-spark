import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCover from "@/assets/hero-cover.png";

export const Hero = () => {
  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCover}
          alt="AILIGENT Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Reclaim Strategic Time.
            </span>
            <br />
            <span className="text-foreground">Automate Everything.</span>
          </h1>

          {/* Subheading */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground">
            <p className="leading-relaxed">
              <strong className="text-foreground">AILIGENT</strong> is a Saudi company specializing in AI automation systems that transform business operations and boost productivity by over 90%.
            </p>
            <p className="leading-relaxed">
              Our mission is to become the <strong className="text-primary">leading Arab provider</strong> of intelligent automation solutions within five years — powered by a strategic consulting team that enhances efficiency, and an AI development team that builds smart systems tailored to each company's unique needs, driving digital transformation across the region.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              onClick={scrollToConsultation}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold shadow-glow animate-glow group"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
