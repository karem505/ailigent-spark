import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { ProductsServices } from "@/components/ProductsServices";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Consultation } from "@/components/Consultation";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
