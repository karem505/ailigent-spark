import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  BarChart3,
  Lightbulb,
  Rocket,
  Brain,
  MessageSquare,
  Link2,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import tornixLogo from "@/assets/tornix-product-logo.png";
import pmoBuilderLogo from "@/assets/pmo-builder-logo.jpg";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMultiLayerParallax } from "@/hooks/useParallax";

export const ProductsServices = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, className: sectionClass } = useScrollReveal({ direction: "blur" });
  const { ref: servicesRef, className: servicesClass } = useScrollReveal({ direction: "up", delay: 100 });
  const { getLayerStyle } = useMultiLayerParallax();

  const products = [
    {
      badge: t("solutions.products.tornix.badge"),
      title: t("solutions.products.tornix.title"),
      description: t("solutions.products.tornix.description"),
      icon: LayoutDashboard,
      logo: tornixLogo,
      color: "highlight",
      features: [
        t("solutions.products.tornix.tags.integration", "AI-driven cost and resource estimation"),
        t("solutions.products.tornix.tags.collaboration", "Automated risk detection & Monte Carlo simulations"),
        t("solutions.products.tornix.tags.workflow", "Digital-twin simulations and dashboards"),
      ],
    },
    {
      badge: t("solutions.products.pmoBuilder.badge"),
      title: t("solutions.products.pmoBuilder.title"),
      description: t("solutions.products.pmoBuilder.description"),
      icon: BarChart3,
      logo: pmoBuilderLogo,
      color: "accent",
      features: [
        t("solutions.products.pmoBuilder.tags.aiPowered", "AI-Powered Executive Reporting"),
        t("solutions.products.pmoBuilder.tags.reporting", "Real-time Monitoring and Oversight"),
        t("solutions.products.pmoBuilder.tags.monitoring", "Seamless integration with Trello & MS Project"),
      ],
    },
  ];

  const services = [
    { 
      title: t("solutions.services.businessConsultation.title"), 
      description: t("solutions.services.businessConsultation.description"), 
      icon: Lightbulb 
    },
    { 
      title: t("solutions.services.digitalTransformation.title"), 
      description: t("solutions.services.digitalTransformation.description"), 
      icon: Rocket 
    },
    { 
      title: t("solutions.services.agenticAI.title"), 
      description: t("solutions.services.agenticAI.description"), 
      icon: Zap 
    },
    { 
      title: t("solutions.services.generativeAI.title"), 
      description: t("solutions.services.generativeAI.description"), 
      icon: Brain 
    },
    { 
      title: t("solutions.services.conversationalAI.title"), 
      description: t("solutions.services.conversationalAI.description"), 
      icon: MessageSquare 
    },
    { 
      title: t("solutions.services.aiIntegration.title"), 
      description: t("solutions.services.aiIntegration.description"), 
      icon: Link2 
    },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="solutions"
      className={`py-24 relative overflow-hidden ${sectionClass}`}
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0 bg-grid opacity-20"
        style={getLayerStyle(0.08)}
      />
      <div 
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"
        style={getLayerStyle(0.12)}
      />
      <div 
        className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] pointer-events-none"
        style={getLayerStyle(0.18)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Products Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            {t("solutions.subtitle", "Featured Tools")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("solutions.description", "Powerful tools designed to streamline complex enterprise workflows and accelerate project delivery.")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {products.map((product, index) => {
            const isHighlight = product.color === "highlight";
            const glowColor = isHighlight ? "bg-highlight/20" : "bg-accent/20";
            const iconColor = isHighlight ? "text-highlight" : "text-accent";
            const checkColor = isHighlight ? "text-highlight" : "text-accent";

            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl relative group overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${glowColor} rounded-full blur-[80px] group-hover:blur-[100px] transition-all duration-500 transform translate-x-1/3 -translate-y-1/3`} />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-xl ${isHighlight ? "bg-highlight/10 border-highlight/30" : "bg-accent/10 border-accent/30"} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <product.icon className={`w-8 h-8 ${iconColor}`} />
                  </div>

                  {/* Logo */}
                  <div className="mb-4">
                    <img src={product.logo} alt={`${product.title} logo`} className="h-12 w-auto object-contain" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-bold text-foreground mb-3 group-hover:${iconColor} transition-colors`}>
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                        <Check className={`${checkColor} mr-2 w-4 h-4`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                    className={`inline-flex items-center ${iconColor} font-semibold hover:opacity-80 transition-all group/btn`}
                  >
                    {t("solutions.requestDemo", "Request a Demo")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Section */}
        <div id="services" className="py-20">
          {/* Services Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              {t("solutions.servicesSubtitle", "Our Expertise")}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              {t("solutions.professionalServices")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("solutions.servicesDesc", "From consultation to custom development, we build the future of your enterprise.")}
            </p>
          </div>

          {/* Services Grid - Matching the reference layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-highlight/30 transition-all duration-500 overflow-hidden flex flex-col min-h-[320px] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Bottom glow effect */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-highlight/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-6 group-hover:border-highlight/40 transition-colors">
                  <service.icon className="w-6 h-6 text-highlight" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* View Details Button */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    {t("solutions.viewDetails", "View Details")}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-highlight/30">
                    <ArrowRight className="w-5 h-5 text-highlight-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
