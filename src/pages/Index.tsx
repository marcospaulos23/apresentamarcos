import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import { FocusRailSection } from "@/components/FocusRail";
import DigitalProductSection from "@/components/DigitalProductSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <FocusRailSection />
      <DigitalProductSection />
      <Footer />
    </div>
  );
};

export default Index;
