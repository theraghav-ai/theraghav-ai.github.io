import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ArchitecturesSection from "@/components/ArchitecturesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ArchitecturesSection />
      <CapabilitiesSection />
      <InsightsSection />
      <Footer />
    </main>
  );
}
