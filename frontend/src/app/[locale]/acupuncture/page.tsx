"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PageCard from "@/components/PageCard";
import Section from "@/components/Section";
import { acupunctureSubPages } from "@/data/acupunctureSubPages";
import { useTranslation } from "react-i18next";

export default function AcupuncturePage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/nada.jpg"
        mobileImage="pages/nada.jpg"
        title={t("acupuncture.hero.title")}
        subtitle={t("acupuncture.hero.subtitle")}
      />
      <Section>
        <div className="py-16 px-8 flex flex-wrap gap-8 justify-center">
          {acupunctureSubPages.map((page) => (
            <PageCard
              key={page.id}
              translationKey={page.translationKey}
              translationNamespace="acupuncture.subPages"
              altName={page.altName}
              imgSrc={page.imgSrc}
              url={page.url}
              t={t}
            />
          ))}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
