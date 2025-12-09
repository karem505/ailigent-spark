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
    { label: t("header.nav.about", "About"), id: "mission" },
    { label: t("header.nav.products", "Products"), id: "solutions" },
    { label: t("header.nav.services", "Services"), id: "services" },
    { label: t("header.nav.successStories", "Success Stories"), id: "projects" },
    { label: t("header.nav.team", "Team"), id: "team" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50" 
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0 flex items-center gap-3 group">
            {/* Logo Icon Box */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <img 
                src={isDark ? logoDark : logoLight} 
                alt="AILIGENT" 
                className="h-7 w-7 object-contain"
              />
            </div>
            <span className="font-display font-bold text-2xl text-foreground tracking-tight">
              AILIGENT
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id + item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex hover:bg-secondary text-muted-foreground hover:text-foreground h-9 px-3"
            >
              <Globe className="h-4 w-4 mr-1" />
              {i18n.language === "en" ? "AR" : "EN"}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-secondary h-9 w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("consultation")}
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              {t("header.scheduleConsultation")}
            </button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:bg-secondary h-9 w-9"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id + item.label}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex-1 hover:bg-secondary"
              >
                <Globe className="h-4 w-4 mr-1" />
                {i18n.language === "en" ? "العربية" : "English"}
              </Button>
            </div>
            <button
              onClick={() => scrollToSection("consultation")}
              className="w-full mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
            >
              {t("header.scheduleConsultation")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
