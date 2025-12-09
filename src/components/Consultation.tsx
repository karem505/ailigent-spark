import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Target, Handshake, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMultiLayerParallax } from "@/hooks/useParallax";

export const Consultation = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, className: sectionClass } = useScrollReveal({ direction: "scale" });
  const { getLayerStyle } = useMultiLayerParallax();
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({ title: t("consultation.toast.missingInfo"), description: t("consultation.toast.fillRequired"), variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: t("consultation.toast.submitted"), description: t("consultation.toast.thankYou") });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const valueProps = [
    { icon: BarChart3, title: t("consultation.valueProps.assessment.title"), color: "text-primary" },
    { icon: Target, title: t("consultation.valueProps.design.title"), color: "text-highlight" },
    { icon: Handshake, title: t("consultation.valueProps.implementation.title"), color: "text-accent" },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="consultation"
      className={`py-24 relative overflow-hidden ${sectionClass}`}
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div 
        className="absolute inset-0 bg-grid opacity-15"
        style={getLayerStyle(0.05)}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"
        style={getLayerStyle(0.15)}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" 
        style={{ ...getLayerStyle(0.2), animationDelay: "2s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-2xl p-8 md:p-12 border border-primary/20 shadow-2xl animate-fade-in-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("consultation.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("consultation.subtitle")}</p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-3 gap-4 mb-10 text-center">
            {valueProps.map((prop, i) => (
              <div key={i} className="text-muted-foreground animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <prop.icon className={`${prop.color} text-2xl mb-2 mx-auto w-6 h-6`} />
                <p className="text-sm font-semibold">{prop.title}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in animation-delay-100">
                <Label className="text-muted-foreground mb-2">{t("consultation.form.fullName")} <span className="text-destructive">*</span></Label>
                <Input name="name" value={formData.name} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary transition-colors" placeholder={t("consultation.form.namePlaceholder")} />
              </div>
              <div className="animate-fade-in animation-delay-200">
                <Label className="text-muted-foreground mb-2">{t("consultation.form.email")} <span className="text-destructive">*</span></Label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary transition-colors" placeholder={t("consultation.form.emailPlaceholder")} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in animation-delay-300">
                <Label className="text-muted-foreground mb-2">{t("consultation.form.company")} <span className="text-destructive">*</span></Label>
                <Input name="company" value={formData.company} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary transition-colors" placeholder={t("consultation.form.companyPlaceholder")} />
              </div>
              <div className="animate-fade-in animation-delay-400">
                <Label className="text-muted-foreground mb-2">{t("consultation.form.phone")}</Label>
                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-background/50 border-border focus:border-primary transition-colors" placeholder={t("consultation.form.phonePlaceholder")} />
              </div>
            </div>
            <div className="animate-fade-in animation-delay-500">
              <Label className="text-muted-foreground mb-2">{t("consultation.form.message")} <span className="text-destructive">*</span></Label>
              <Textarea name="message" rows={4} value={formData.message} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary transition-colors resize-none" placeholder={t("consultation.form.messagePlaceholder")} />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-6 btn-glow animate-fade-in animation-delay-600 transform hover:-translate-y-1 transition-all"
            >
              {isSubmitting ? t("consultation.form.submitting") : (
                <>
                  {t("consultation.form.submitButton")}
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">{t("consultation.responseTime", "Our team will reach out within 24 hours.")}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
