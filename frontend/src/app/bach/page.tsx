"use client";

import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CardHeading from "@/components/CardHeading";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";
import MediumVerticalSpacer from "@/components/MediumVerticalSpacer";
import Image from "next/image";
import bachGroups from "@/data/bach_groups.json";
import remediesByGroup from "@/data/bach_remedies";

type Language = "latvian" | "english" | "norwegian";

/**
 * Bach Flower Remedies Page
 * @returns JSX.Element
 */
export default function BachFlowerPage(): JSX.Element {
  const [language, setLanguage] = useState<Language>("english");

  return (
    <>
      <HeroSection
        title="BACH FLOWER REMEDIES"
        subtitle="Natural healing for emotional balance"
      />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <BachFlowerCardsSection language={language} />
      <ContactSection />
    </>
  );
}

function LanguageSelector({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
}): JSX.Element {
  return (
    <Section>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setLanguage("latvian")}
          className={`px-4 py-2 rounded-md ${
            language === "latvian"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Latviešu
        </button>
        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 rounded-md ${
            language === "english"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("norwegian")}
          className={`px-4 py-2 rounded-md ${
            language === "norwegian"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Norsk
        </button>
      </div>
    </Section>
  );
}

function BachFlowerCardsSection({
  language,
}: {
  language: Language;
}): JSX.Element {
  return (
    <>
      {bachGroups.map((group) => (
        <Section key={group.id}>
          <h2 className="text-2xl font-semibold text-center mb-8">
            {group.name[language]}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {remediesByGroup[group.id]?.map((remedy) => (
              <BachFlowerCard
                key={remedy.id}
                id={remedy.id}
                name={remedy.name[language]}
                description={remedy.short_description[language]}
              />
            ))}
          </div>
          <MediumVerticalSpacer />
        </Section>
      ))}
    </>
  );
}

function BachFlowerCard({
  name,
  description,
  id,
}: {
  name: string;
  description: string;
  id: number;
}): JSX.Element {
  return (
    <Card>
      <div className="w-72 min-h-[24rem]">
        <div className="relative w-full h-48">
          <Image
            src={`/images/bach/${id}.jpg`}
            alt={name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 h-full">
          <CardHeading title={name || "—"} />
          <p className="text-gray-600 min-h-[4rem]">{description || "—"}</p>
          <SmallVerticalSpacer />
        </div>
      </div>
    </Card>
  );
}
