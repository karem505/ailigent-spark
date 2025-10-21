import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { ProductsServices } from "@/components/ProductsServices";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Consultation } from "@/components/Consultation";
import { PreFooter } from "@/components/PreFooter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MissionVisionValues />
        <ProductsServices />
        <Projects />
        <Team />
        <Consultation />
        <PreFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
