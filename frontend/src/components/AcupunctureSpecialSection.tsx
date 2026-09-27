"use client";

import { useTranslation } from "react-i18next";

/**
 * "Something special from me" — identical on every acupuncture treatment page.
 */
export default function AcupunctureSpecialSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureSpecialSection.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 break-words">
        {t("acupunctureSpecialSection.title")}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
