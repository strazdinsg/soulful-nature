import HeroSection from "@/components/HeroSection";
import PageCardsSection from "@/components/PageCardSection";
import ContactSection from "@/components/ContactSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="SOULFUL NATURE"
        subtitle="Where bond with self matters..."
      />
      <PageCardsSection />
      <ContactSection />
    </div>
  );
}
