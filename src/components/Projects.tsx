import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Play } from "lucide-react";
import peLogo from "@/assets/pe-logo.webp";
import tornixLogo from "@/assets/tornix-logo.png";

export const Projects = () => {
  const projects = [
    {
      badge: "Client Success Story",
      client: "Professional Engineers",
      logo: peLogo,
      description: "Delivering comprehensive full operation automation and custom software solutions for professional engineering firms, streamlining workflows and enhancing operational efficiency.",
      focus: [
        "Full Operation Automation & Custom Software Development",
        "End-to-end automation implementation",
        "Custom software solutions tailored to engineering workflows",
        "Seamless integration with existing systems",
        "Measurable efficiency improvements",
      ],
      videoUrl: "https://www.youtube.com/embed/4T1_Spk9dss",
    },
    {
      badge: "Featured Partnership",
      client: "Tornix",
      logo: tornixLogo,
      description: "Tornix is an advanced AI-powered platform designed to transform project planning, execution, and delivery. Specializing in construction and large-scale projects, it integrates cutting-edge AI to bring automation, predictive analytics, and intelligent decision support.",
      focus: [
        "AI-Powered Project Management & Construction Intelligence",
        "AI-driven cost and resource estimation",
        "Automated risk detection and Monte Carlo simulations",
        "Natural language project queries",
        "Digital-twin simulations and dashboards",
      ],
      videoUrl: "https://www.youtube.com/embed/jbuQf16vO-4",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Projects & Collaborations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering Excellence Across Industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-primary/20 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Content Side */}
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.logo}
                      alt={`${project.client} logo`}
                      className="h-16 w-auto object-contain"
                    />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl">{project.client}</CardTitle>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="pt-4 space-y-3">
                    <h4 className="font-semibold text-lg text-foreground">Project Focus:</h4>
                    <ul className="space-y-2">
                      {project.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>

                {/* Video Side */}
                <CardContent className="p-0 lg:p-6 flex items-center">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden group shadow-card">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.client} Project Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
