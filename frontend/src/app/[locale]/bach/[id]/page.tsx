"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import LanguageSelector, { Language } from "@/components/LanguageSelector";
import bachRemedies from "@/data/bach_remedies.json";
import ContactSection from "@/components/ContactSection";
import { BachRemedy } from "@/data/bach_remedies";

export default function BachRemedyDetailPage(): JSX.Element {
  const params = useParams();
  const remedyId = Number(params.id);
  const [language, setLanguage] = useState<Language>("english");

  // Find the remedy by ID
  const remedy = bachRemedies.find((r) => r.id === remedyId);

  if (!remedy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Remedy not found</h1>
        <Link href="/bach" className="text-green-600 hover:underline">
          Back to remedies
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={remedy.name[language]}
        subtitle="Bach Flower Remedy"
      />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <RemedyDetails remedy={remedy} language={language} />
      <ContactSection />
    </>
  );
}

function RemedyDetails({
  remedy,
  language,
}: {
  remedy: BachRemedy;
  language: Language;
}): JSX.Element {
  return (
    <Section>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src={`/images/bach/${remedy.id}.jpg`}
                alt={remedy.name[language]}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <Link href="/bach" className="text-green-600 hover:underline">
                ← Back to all remedies
              </Link>
            </div>
          </div>

          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{remedy.name[language]}</h1>
            {remedy.alternative_latvian_name && language === "latvian" && (
              <p className="text-gray-600 mb-4">
                Alternatīvais nosaukums: {remedy.alternative_latvian_name}
              </p>
            )}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Apraksts"
                  : language === "norwegian"
                  ? "Beskrivelse"
                  : "Description"}
              </h2>
              <p className="text-gray-700">
                {remedy.short_description[language]}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Dr. Baha apraksts"
                  : language === "norwegian"
                  ? "Dr. Bach beskrivelse"
                  : "Dr. Bach's description"}
              </h2>
              <p className="text-gray-700">
                {remedy.Bach_description[language]}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Bernarda apraksts"
                  : language === "norwegian"
                  ? "Bernard beskrivelse"
                  : "Bernard's description"}
              </h2>
              <p className="text-gray-700">
                {remedy.Bernard_description[language]}
              </p>
            </div>

            {remedy.indicative_statements && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  {language === "latvian"
                    ? "Indikatīvie izteikumi"
                    : language === "norwegian"
                    ? "Indikative uttalelser"
                    : "Indicative statements"}
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {remedy.indicative_statements[language]?.map(
                    (statement: string, index: number) => (
                      <li key={index}>{statement}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Indikatīvie stāvokļi"
                  : language === "norwegian"
                  ? "Indikative tilstander"
                  : "Indicative states"}
              </h2>
              <p className="text-gray-700">
                {remedy.indicative_states[language]}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Efekts"
                  : language === "norwegian"
                  ? "Effekt"
                  : "Effect"}
              </h2>
              <p className="text-gray-700">{remedy.effect[language]}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "latvian"
                  ? "Līdzīgie līdzekļi"
                  : language === "norwegian"
                  ? "Lignende midler"
                  : "Similar remedies"}
              </h2>
              <p className="text-gray-700">
                {remedy.similar_remedies[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
