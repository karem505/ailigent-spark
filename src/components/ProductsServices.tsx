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
      title: t("solutions.services.aiDevelopment.title"),
      description: t("solutions.services.aiDevelopment.description"),
      category: t("solutions.services.aiDevelopment.category"),
      icon: Brain,
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
      className={`py-24 px-4 bg-muted/30 scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("solutions.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">{t("solutions.featuredProducts")}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-primary/20 animate-fade-in-up group hover-scale-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {product.badge}
                    </Badge>
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <img src={product.logo} alt={`${product.title} logo`} className="h-16 w-auto object-contain" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
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
          <h3 className="text-3xl font-bold mb-8 text-center">{t("solutions.professionalServices")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-primary/20 animate-fade-in-up group hover-scale-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{service.title}</CardTitle>
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
