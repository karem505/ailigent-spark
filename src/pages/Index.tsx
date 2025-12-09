import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { ProductsServices } from "@/components/ProductsServices";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Consultation } from "@/components/Consultation";
import { LargeCTA } from "@/components/LargeCTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <MissionVisionValues />
        <ProductsServices />
        <ProcessTimeline />
        <Projects />
        <Team />
        <Consultation />
        <LargeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
