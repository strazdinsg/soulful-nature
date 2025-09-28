"use client";

import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import PageCardsSection from "@/components/PageCardSection";
import ContactSection from "@/components/ContactSection";

export default function LandingPage() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <WelcomeSection />
      <PageCardsSection />
      <ContactSection />
    </div>
  );
}
