"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { soundBathEvents } from "@/data/events";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function SoundBathPage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/sound.jpg"
        mobileImage="pages/sound.jpg"
        title={t("sound.hero.title")}
        subtitle={t("sound.hero.subtitle")}
      />
      <MainContentSection />
      <TestimonialsSection
        titleKey="sound.testimonials.title"
        itemsKey="sound.testimonials.items"
      />
      <ContactSection />
    </>
  );
}

function MainContentSection(): JSX.Element {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const t = new Date().toISOString().split("T")[0];
    setToday(t);
  }, []);

  return (
    <Section>
      <div className="pt-16 pb-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-3 lg:col-span-4 text-[#252419]">
            <AboutSection />
            <div className="md:hidden">
              <EventsSection
                today={today}
                events={soundBathEvents}
                eventsTitleKey="sound.events.title"
                dateToBeDefinedKey="sound.events.dateToBeDefined"
                eventSeriesFallback="sound"
              />
            </div>
            <ExpectationSection />
            <WhoIsItForSection />
            <PracticalInfoSection />
          </div>
          <div className="hidden md:block lg:col-span-2 md:col-span-3">
            <EventsSection
              today={today}
              events={soundBathEvents}
              eventsTitleKey="sound.events.title"
              dateToBeDefinedKey="sound.events.dateToBeDefined"
              eventSeriesFallback="sound"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bodyParagraphs = t("sound.about.bodyParagraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeading title={t("sound.about.title")} />
      <p className="text-lg md:text-xl text-gray-600 font-bold mb-6">
        {t("sound.about.subheading")}
      </p>
      <p className="leading-relaxed mb-4">
        <b>{t("sound.about.leadingText")}</b> {t("sound.about.description1")}
      </p>
      {bodyParagraphs.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function SectionHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return <h2 className="text-3xl font-bold mb-4">{title}</h2>;
}

function ExpectationSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bullets = t("sound.expectations.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("sound.expectations.title")} />
      <ul className="space-y-2 list-disc list-outside ml-4 mb-4 leading-relaxed">
        {bullets.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function WhoIsItForSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("sound.whoIsItFor.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("sound.whoIsItFor.title")} />
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "sound.practicalInfo" as const;

  const rows: Array<{ labelKey: string; valueKey: string }> = [
    { labelKey: `${p}.durationLabel`, valueKey: `${p}.durationValue` },
    { labelKey: `${p}.locationLabel`, valueKey: `${p}.locationValue` },
    { labelKey: `${p}.bringLabel`, valueKey: `${p}.bringValue` },
    { labelKey: `${p}.experienceLabel`, valueKey: `${p}.experienceValue` },
  ];

  const contributionItems = t("practicalInfo.contributionOptions", {
    returnObjects: true,
  }) as Array<string>;

  return (
    <div className="mt-8">
      <SectionHeading title={t(`${p}.title`)} />
      {rows.map(({ labelKey, valueKey }) => (
        <p key={labelKey} className="leading-relaxed mb-4">
          <b>{t(labelKey)}</b>: {t(valueKey)}
        </p>
      ))}
      <p className="leading-relaxed">
        <b>{t("common.contribution")}</b>:
      </p>
      <ul className="list-disc list-outside ml-4 mb-4">
        {contributionItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="leading-relaxed">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mt-0.5" />
        {t("practicalInfo.pleaseSignUp")}:{" "}
        <a href="sms:+4796746355" className="text-green-600 hover:underline">
          +47 967 46 355
        </a>
      </p>
      <p className="leading-relaxed mb-4">{t("practicalInfo.orUseLinks")}.</p>
      <p className="leading-relaxed">{t("practicalInfo.cancellation")}</p>
    </div>
  );
}
