import { useState, useEffect } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/logo-dark-blue.png";
import logoDark from "@/assets/logo-light-blue.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism shadow-glow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={isDark ? logoDark : logoLight} alt="AILIGENT Logo" className="h-12 w-auto" />
          </a>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="glass-card hover:border-secondary/50 transition-smooth flex items-center gap-2 px-4"
              aria-label="Toggle Language"
            >
              <Globe className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">{i18n.language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glass-card hover:border-secondary/50 transition-smooth"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-secondary" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* CTA Button */}
            <Button
              onClick={scrollToConsultation}
              className="gradient-primary hover:opacity-90 text-white px-6 py-2 font-semibold shadow-glow-hover border-0 hidden sm:flex"
            >
              {t("header.scheduleConsultation")}
            </Button>
            <Button
              onClick={scrollToConsultation}
              size="sm"
              className="gradient-primary hover:opacity-90 text-white border-0 sm:hidden"
            >
              {t("header.bookNow")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
