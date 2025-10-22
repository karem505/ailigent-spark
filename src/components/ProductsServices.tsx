import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, BarChart3, Lightbulb, Rocket, Brain, MessageSquare, Link2, Zap } from "lucide-react";
import tornixLogo from "@/assets/tornix-product-logo.png";
import pmoBuilderLogo from "@/assets/pmo-builder-logo.jpg";

export const ProductsServices = () => {
  const products = [
    {
      badge: "Product",
      title: "Tornix",
      description: "A powerful project management software with seamless integrations with popular platforms like Trello, Microsoft Project, and other commonly used enterprise tools, streamlining project workflows and collaboration.",
      icon: LayoutDashboard,
      logo: tornixLogo,
      tags: ["Integration", "Collaboration", "Workflow"],
    },
    {
      badge: "Product",
      title: "PMO Builder",
      description: "A comprehensive Project Management Office (PMO) reporting tool. Leveraging AI, it provides project managers with full monitoring capabilities throughout the project lifecycle, generating insightful reports and ensuring proactive oversight.",
      icon: BarChart3,
      logo: pmoBuilderLogo,
      tags: ["AI-Powered", "Reporting", "Monitoring"],
    },
  ];

  const services = [
    {
      title: "Business Consultation & Customized Software",
      description: "We conduct in-depth analysis of a company's departments, identifying strengths and weaknesses. We then design and implement bespoke business automation and software solutions to address these specific challenges, optimizing processes and enhancing efficiency.",
      category: "Customized Solutions & Consulting",
      icon: Lightbulb,
    },
    {
      title: "Digital Transformation",
      description: "Accelerate your digital journey with innovation-driven strategies, modern technologies, and scalable business models. Our approach optimizes operations, enhances agility, and delivers superior customer-centric experiences.",
      category: "Customized Solutions & Consulting",
      icon: Rocket,
    },
    {
      title: "AI Development",
      description: "We provide cutting-edge AI development services in Saudi Arabia, building intelligent solutions that enhance automation, decision-making, and customer experiences.",
      category: "Advanced AI Development Services",
      icon: Brain,
    },
    {
      title: "Agentic AI Development",
      description: "Empower your business with autonomous agents capable of complex problem-solving, advanced process automation, and intelligent decision-making.",
      category: "Advanced AI Development Services",
      icon: Zap,
    },
    {
      title: "Generative AI Development",
      description: "Specializing in Generative AI in Saudi Arabia, we create solutions powered by Large Language Models (LLMs) for content generation, automation, and predictive analytics.",
      category: "Advanced AI Development Services",
      icon: Brain,
    },
    {
      title: "Conversational AI",
      description: "We design sophisticated conversational AI solutions that deliver human-like interactions, automate customer communication, and significantly improve user experiences.",
      category: "Advanced AI Development Services",
      icon: MessageSquare,
    },
    {
      title: "AI Integration",
      description: "Our AI integration services connect artificial intelligence with your existing ERP, CRM, and other enterprise systems.",
      category: "Advanced AI Development Services",
      icon: Link2,
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Our Solutions & Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming Businesses Through Intelligent Automation
          </p>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Products</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-primary/20 animate-fade-in-up group"
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
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-primary/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                    <div className="p-3 rounded-lg bg-secondary/10 group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
