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
  Bot,
} from "lucide-react";
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
      title: t("solutions.services.agenticAI.title"),
      description: t("solutions.services.agenticAI.description"),
      icon: Bot,
      color: "primary",
    },
    {
      title: t("solutions.services.generativeAI.title"),
      description: t("solutions.services.generativeAI.description"),
      icon: Brain,
      color: "pink",
    },
    {
      title: t("solutions.services.conversationalAI.title"),
      description: t("solutions.services.conversationalAI.description"),
      icon: MessageSquare,
      color: "green",
    },
    {
      title: t("solutions.services.businessConsultation.title"),
      description: t("solutions.services.businessConsultation.description"),
      icon: Lightbulb,
      color: "yellow",
    },
    {
      title: t("solutions.services.aiIntegration.title"),
      description: t("solutions.services.aiIntegration.description"),
      icon: Link2,
      color: "accent",
    },
    {
      title: t("solutions.services.digitalTransformation.title"),
      description: t("solutions.services.digitalTransformation.description"),
      icon: Rocket,
      color: "red",
    },
  ];

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      primary: "text-primary",
      highlight: "text-highlight",
      accent: "text-accent",
      pink: "text-pink-500",
      green: "text-green-500",
      yellow: "text-yellow-500",
      red: "text-red-500",
    };
    return colors[color] || "text-primary";
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="solutions"
      className={`py-20 relative scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal active">
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
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => {
            const glowClass = product.color === "highlight" ? "gradient-bg-cyan" : "gradient-bg-purple";
            const iconColor = product.color === "highlight" ? "text-highlight" : "text-accent";
            const checkColor = product.color === "highlight" ? "text-highlight" : "text-accent";

            return (
              <div
                key={index}
                className={`glass-panel p-8 rounded-2xl relative group overflow-hidden reveal active delay-${(index + 1) * 100}`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 ${glowClass} rounded-full blur-[60px] group-hover:opacity-100 opacity-50 transition-all duration-500 transform translate-x-1/3 -translate-y-1/3`}
                />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`icon-box icon-box-${product.color === "highlight" ? "cyan" : "purple"} mb-6`}>
                    <product.icon className={`text-3xl ${iconColor} w-8 h-8`} />
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
                      <li key={i} className="flex items-center">
                        <i className={`fas fa-check ${checkColor} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                    className={`inline-flex items-center ${iconColor} font-semibold hover:opacity-80 transition-colors`}
                  >
                    {t("solutions.requestDemo", "Request a Demo")} <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Section */}
        <div className="py-20 bg-card/30 border-y border-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Services Header */}
            <div className="text-center mb-16 reveal active">
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

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`glass-panel p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 reveal active delay-${((index % 3) + 1) * 100}`}
                >
                  <service.icon className={`text-3xl ${getIconColor(service.color)} mb-4 w-8 h-8`} />
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
