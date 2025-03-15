"use client";

import Section from "./Section";

// Define language type for type safety
export type Language = "latvian" | "english" | "norwegian";

export default function LanguageSelector({
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
