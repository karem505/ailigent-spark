import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Target, Handshake, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Consultation = () => {
  const { t } = useTranslation();
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
        title: t("consultation.toast.missingInfo"),
        description: t("consultation.toast.fillRequired"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("consultation.toast.submitted"),
        description: t("consultation.toast.thankYou"),
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const valueProps = [
    {
      icon: BarChart3,
      title: t("consultation.valueProps.assessment.title"),
      description: t("consultation.valueProps.assessment.description"),
    },
    {
      icon: Target,
      title: t("consultation.valueProps.design.title"),
      description: t("consultation.valueProps.design.description"),
    },
    {
      icon: Handshake,
      title: t("consultation.valueProps.implementation.title"),
      description: t("consultation.valueProps.implementation.description"),
    },
  ];

  return (
    <section id="consultation" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("consultation.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("consultation.subtitle")}
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
            <CardTitle className="text-3xl">{t("consultation.formTitle")}</CardTitle>
            <CardDescription className="text-base">
              {t("consultation.formSubtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("consultation.form.fullName")} {t("consultation.form.required")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("consultation.form.namePlaceholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("consultation.form.email")} {t("consultation.form.required")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("consultation.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">{t("consultation.form.company")} {t("consultation.form.required")}</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t("consultation.form.companyPlaceholder")}
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("consultation.form.phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("consultation.form.phonePlaceholder")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("consultation.form.message")} {t("consultation.form.required")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("consultation.form.messagePlaceholder")}
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
                  t("consultation.form.submitting")
                ) : (
                  <>
                    {t("consultation.form.submitButton")}
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
