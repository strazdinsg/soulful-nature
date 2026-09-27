"use client";

import { useTranslation } from "react-i18next";
import { corinthia } from "@/app/fonts";

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
      <h2
        className={`${corinthia.className} text-5xl mb-4 break-words text-[#0e4726]`}
      >
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
