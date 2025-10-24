import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/GetStartedSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
    </main>
  );
}
