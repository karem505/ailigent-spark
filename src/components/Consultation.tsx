import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Target, Handshake, Send } from "lucide-react";

export const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const valueProps = [
    {
      icon: BarChart3,
      title: "Complimentary Assessment",
      description: "Free analysis of your automation potential and ROI projections.",
    },
    {
      icon: Target,
      title: "Custom Solution Design",
      description: "Tailored automation architecture for your specific needs.",
    },
    {
      icon: Handshake,
      title: "White-Glove Implementation",
      description: "End-to-end support from design through deployment and beyond.",
    },
  ];

  return (
    <section id="consultation" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a strategic consultation with our enterprise automation experts. We'll analyze your current processes and design a custom AI solution that delivers measurable ROI.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {valueProps.map((prop, index) => (
            <Card
              key={index}
              className="glass-card border-primary/20 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{prop.title}</CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {prop.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Consultation Form */}
        <Card className="glass-card border-primary/20 shadow-card animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Schedule Your Consultation</CardTitle>
            <CardDescription className="text-base">
              Fill out the form below and our team will reach out within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+966 XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your automation needs and goals..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
