import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/logo-dark-blue.png";
import logoDark from "@/assets/logo-light-blue.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t("header.nav.solutions"), id: "solutions" },
    { label: t("header.nav.projects"), id: "projects" },
    { label: t("header.nav.team"), id: "team" },
    { label: t("header.nav.about"), id: "mission" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 glass-panel border-b-0 ${
        isScrolled ? "bg-background/90" : ""
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0 flex items-center gap-2 transition-transform hover:scale-105">
            <img src={isDark ? logoDark : logoLight} alt="AILIGENT Logo" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              >
                <Globe className="h-4 w-4 mr-1" />
                {i18n.language === "en" ? "AR" : "EN"}
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-primary" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("consultation")}
                className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 btn-glow"
              >
                {t("header.scheduleConsultation")}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-primary/10"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10"
            >
              {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("consultation")}
              className="block w-full px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-primary text-primary-foreground"
            >
              {t("header.scheduleConsultation")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
