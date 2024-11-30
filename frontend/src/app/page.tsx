import HeroSection from "@/components/HeroSection";
import ProductCardsSection from "@/components/ProductCardSection";
import ContactSection from "@/components/ContactSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Soulful Nature"
        subtitle="Where bond with nature matters..."
      />
      <ProductCardsSection />
      <ContactSection />
    </div>
  );
}
