"use client";

import PageCard from "./PageCard";
import { pages } from "@/data/pages";
import Section from "./Section";
import MediumVerticalSpacer from "./MediumVerticalSpacer";
import { useTranslation } from "react-i18next";

export default function PageCardsSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <Section mobileHorPad={false}>
      <div className="flex flex-wrap gap-8 justify-center">
        {pages.map((page) => (
          <PageCard
            key={page.id}
            translationKey={page.translationKey}
            altName={page.altName}
            imgSrc={page.imgSrc}
            url={page.url}
            t={t}
          />
        ))}
      </div>
      <MediumVerticalSpacer />
    </Section>
  );
}
