import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, BarChart3, Lightbulb, Rocket, Brain, MessageSquare, Link2, Zap, ArrowRight } from "lucide-react";
import tornixLogo from "@/assets/tornix-product-logo.png";
import pmoBuilderLogo from "@/assets/pmo-builder-logo.jpg";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

export const ProductsServices = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();
  const products = [
    {
      badge: t("solutions.products.tornix.badge"),
      title: t("solutions.products.tornix.title"),
      description: t("solutions.products.tornix.description"),
      icon: LayoutDashboard,
      logo: tornixLogo,
      tags: [t("solutions.products.tornix.tags.integration"), t("solutions.products.tornix.tags.collaboration"), t("solutions.products.tornix.tags.workflow")],
    },
    {
      badge: t("solutions.products.pmoBuilder.badge"),
      title: t("solutions.products.pmoBuilder.title"),
      description: t("solutions.products.pmoBuilder.description"),
      icon: BarChart3,
      logo: pmoBuilderLogo,
      tags: [t("solutions.products.pmoBuilder.tags.aiPowered"), t("solutions.products.pmoBuilder.tags.reporting"), t("solutions.products.pmoBuilder.tags.monitoring")],
    },
  ];

  const services = [
    {
      title: t("solutions.services.businessConsultation.title"),
      description: t("solutions.services.businessConsultation.description"),
      category: t("solutions.services.businessConsultation.category"),
      icon: Lightbulb,
    },
    {
      title: t("solutions.services.digitalTransformation.title"),
      description: t("solutions.services.digitalTransformation.description"),
      category: t("solutions.services.digitalTransformation.category"),
      icon: Rocket,
    },
    {
      title: t("solutions.services.agenticAI.title"),
      description: t("solutions.services.agenticAI.description"),
      category: t("solutions.services.agenticAI.category"),
      icon: Zap,
    },
    {
      title: t("solutions.services.generativeAI.title"),
      description: t("solutions.services.generativeAI.description"),
      category: t("solutions.services.generativeAI.category"),
      icon: Brain,
    },
    {
      title: t("solutions.services.conversationalAI.title"),
      description: t("solutions.services.conversationalAI.description"),
      category: t("solutions.services.conversationalAI.category"),
      icon: MessageSquare,
    },
    {
      title: t("solutions.services.aiIntegration.title"),
      description: t("solutions.services.aiIntegration.description"),
      category: t("solutions.services.aiIntegration.category"),
      icon: Link2,
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="solutions"
      className={`py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <BackgroundAnimation />
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
            {t("solutions.subtitle", "Our Expertise")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            {t("solutions.title")}
          </h3>
          <p className="text-muted-foreground max-w-xl text-lg font-bold">
            {t("solutions.description", "Intelligent solutions that transform how businesses operate, automate, and scale.")}
          </p>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-wider text-xs text-muted-foreground">{t("solutions.featuredProducts")}</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-border/50" />
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-mono text-xs uppercase">
                      {product.badge}
                    </Badge>
                    <div className="p-2 border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <img src={product.logo} alt={`${product.title} logo`} className="h-14 w-auto object-contain" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed font-bold">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-mono border-border/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services - Enhanced Webnoxy Style Cards */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-wider text-xs text-muted-foreground">{t("solutions.professionalServices")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-card border border-border rounded-[2rem] p-8 hover:border-primary/30 transition-colors duration-500 overflow-hidden flex flex-col justify-between h-[380px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 icon-box-glow group-hover:border-primary/40 transition-colors">
                    <service.icon className="text-primary w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed font-bold">
                    {service.description}
                  </p>
                </div>

                {/* Bottom action */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-foreground">{t("solutions.viewDetails", "View Details")}</span>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <ArrowRight className="text-primary-foreground w-4 h-4" />
                    </div>
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
