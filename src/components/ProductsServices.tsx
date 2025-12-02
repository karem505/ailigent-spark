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
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="h-px w-12 bg-primary mb-4 mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{t("solutions.title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("solutions.subtitle")}
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
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-wider text-xs text-muted-foreground">{t("solutions.professionalServices")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-border bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-base text-center font-bold leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
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
