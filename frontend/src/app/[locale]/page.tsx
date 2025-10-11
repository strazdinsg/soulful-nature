"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import PageCardsSection from "@/components/PageCardSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Section from "@/components/Section";

export default function LandingPage() {
  const { t } = useTranslation("common");
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const t = new Date().toISOString().split("T")[0];
    console.log("Today's date:", t);
    setToday(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <WelcomeSection />
      <Section>
        <div className="pt-16 pb-8 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-4">
              <PageCardsSection />
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <EventsSection today={today} maxEvents={3} />
            </div>
          </div>
          <div className="lg:hidden mt-8">
            <EventsSection today={today} maxEvents={3} />
          </div>
        </div>
      </Section>
      <ContactSection />
    </div>
  );
}
