import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/GetStartedSection";
import InsightsSection from "@/components/InsightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
      <InsightsSection />
      <TestimonialsSection />
    </main>
  );
}
