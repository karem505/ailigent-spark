import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { ProductsServices } from "@/components/ProductsServices";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Consultation } from "@/components/Consultation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <MissionVisionValues />
        <ProductsServices />
        <Projects />
        <Team />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
