"use client";

import { useState, useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CardHeading from "@/components/CardHeading";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";
import MediumVerticalSpacer from "@/components/MediumVerticalSpacer";
import Image from "next/image";
import bachRemedies from "@/data/bach_remedies.json";
import bachGroups from "@/data/bach_groups.json";

// Define language type for type safety
type Language = "latvian" | "english" | "norwegian";

/**
 * Bach Flower Remedies Page
 * @returns JSX.Element
 */
export default function BachFlowerPage(): JSX.Element {
  // State to track the selected language
  const [language, setLanguage] = useState<Language>("english");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRemedies, setFilteredRemedies] = useState(bachRemedies);

  // Filter remedies when search term or language changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRemedies(bachRemedies);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();

    const filtered = bachRemedies.filter((remedy) => {
      // Check if any property in the remedy matches the search term
      // Only search in properties of the selected language
      return searchInObject(remedy, searchTermLower, language);
    });

    setFilteredRemedies(filtered);
  }, [searchTerm, language]);

  // Recursive function to search through nested objects
  const searchInObject = (obj: any, term: string, lang: Language): boolean => {
    for (const key in obj) {
      // Skip non-language properties when searching language-specific content
      if (key === "english" || key === "latvian" || key === "norwegian") {
        if (key !== lang) continue;
      }

      const value = obj[key];

      // Check if value is a string and contains the search term
      if (typeof value === "string" && value.toLowerCase().includes(term)) {
        return true;
      }

      // Check if value is an array
      if (Array.isArray(value)) {
        for (const item of value) {
          if (typeof item === "string" && item.toLowerCase().includes(term)) {
            return true;
          }
          if (typeof item === "object" && item !== null) {
            if (searchInObject(item, term, lang)) {
              return true;
            }
          }
        }
      }

      // Check if value is an object
      if (typeof value === "object" && value !== null) {
        if (searchInObject(value, term, lang)) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <>
      <HeroSection
        title="BACH FLOWER REMEDIES"
        subtitle="Natural healing for emotional balance"
      />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <SearchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        language={language}
      />
      <BachFlowerCardsSection language={language} remedies={filteredRemedies} />
      <ContactSection />
    </>
  );
}

function SearchSection({
  searchTerm,
  setSearchTerm,
  language,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  language: Language;
}): JSX.Element {
  const placeholderText = {
    latvian: "Meklēt līdzekļus...",
    english: "Search remedies...",
    norwegian: "Søk etter midler...",
  };

  return (
    <Section>
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={placeholderText[language]}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </Section>
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
  remedies,
}: {
  language: Language;
  remedies: typeof bachRemedies;
}): JSX.Element {
  // Group remedies by their group
  const remediesByGroup = remedies.reduce((acc, remedy) => {
    const groupId = remedy.group;
    if (!acc[groupId]) {
      acc[groupId] = [];
    }
    acc[groupId].push(remedy);
    return acc;
  }, {} as Record<string, typeof bachRemedies>);

  // Get all group IDs that have at least one remedy
  const groupsWithRemedies = bachGroups.filter(
    (group) => remediesByGroup[group.id] && remediesByGroup[group.id].length > 0
  );

  const noResultsMessage = {
    latvian: "Nav atrasti līdzekļi, kas atbilst jūsu meklēšanai.",
    english: "No remedies found matching your search.",
    norwegian: "Ingen midler funnet som matcher søket ditt.",
  };

  return (
    <>
      {groupsWithRemedies.length > 0 ? (
        groupsWithRemedies.map((group) => (
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
        ))
      ) : (
        <Section>
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              {noResultsMessage[language]}
            </p>
          </div>
        </Section>
      )}
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
