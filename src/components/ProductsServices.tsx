import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, BarChart3, Lightbulb, Rocket, Brain, MessageSquare, Link2, Zap } from "lucide-react";
import tornixLogo from "@/assets/tornix-product-logo.png";
import pmoBuilderLogo from "@/assets/pmo-builder-logo.jpg";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      className={`py-24 px-4 bg-neutral-900/30 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-manrope font-light tracking-tight">{t("solutions.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-manrope font-light mb-8 text-center">{t("solutions.featuredProducts")}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/30 shadow-card animate-fade-in-up group transition-all duration-300 hover:border-border/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="card-label bg-secondary/50 text-muted-foreground border-0">
                      {product.badge}
                    </Badge>
                    <div className="p-2.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <product.icon className="w-5 h-5 text-primary/80" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <img src={product.logo} alt={`${product.title} logo`} className="h-12 w-auto object-contain opacity-90" />
                  </div>
                  <CardTitle className="text-xl font-manrope font-light tracking-tight">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-border/30 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-manrope font-light mb-8 text-center">{t("solutions.professionalServices")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card border-border/30 shadow-card animate-fade-in-up group transition-all duration-300 hover:border-border/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <service.icon className="w-6 h-6 text-primary/80" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="card-label">{service.category}</p>
                    <CardTitle className="text-base font-manrope font-light tracking-tight">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
