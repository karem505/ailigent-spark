import logoImage from "@/assets/ailigent-logo.png";

export const PreFooter = () => {
  const columns = {
    solutions: [
      { name: "AI Automation", href: "#solutions" },
      { name: "Custom Software", href: "#solutions" },
      { name: "Process Optimization", href: "#solutions" },
      { name: "Integration Services", href: "#solutions" },
    ],
    company: [
      { name: "About Us", href: "#mission" },
      { name: "Case Studies", href: "#projects" },
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#consultation" },
    ],
    contact: [
      { label: "Email", value: "info@ailigent.ai", href: "mailto:info@ailigent.ai" },
      { label: "Phone", value: "Contact us", href: "#consultation" },
      { label: "Location", value: "Saudi Arabia", href: "#" },
    ],
  };

  return (
    <section className="py-16 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={logoImage} alt="AILIGENT" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Fortune 500 companies with autonomous AI systems and custom enterprise software solutions.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Solutions</h4>
            <ul className="space-y-2">
              {columns.solutions.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Company</h4>
            <ul className="space-y-2">
              {columns.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Contact</h4>
            <ul className="space-y-3">
              {columns.contact.map((item, index) => (
                <li key={index} className="text-sm">
                  <span className="text-muted-foreground">{item.label}:</span>{" "}
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
