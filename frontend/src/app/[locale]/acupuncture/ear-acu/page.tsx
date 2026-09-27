"use client";

import Script from "next/script";
import AcupunctureSpecialSection from "@/components/AcupunctureSpecialSection";
import BookingButton from "@/components/BookingButton";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { useTranslation } from "react-i18next";
import { SETMORE_SCRIPT_URL } from "@/data/booking";

export default function EarAcupuncturePage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/acupuncture/ear-acu.jpg"
        mobileImage="pages/acupuncture/ear-acu.jpg"
        title={t("acupunctureEarAcuPage.hero.title")}
        subtitle={t("acupunctureEarAcuPage.hero.subtitle")}
      />
      <MainContentSection />
      <ContactSection />
      <Script id="setmore-book-now" src={SETMORE_SCRIPT_URL} />
    </>
  );
}

function MainContentSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <Section>
      <div className="pt-16 pb-8 px-8">
        <div className="text-[#252419]">
          <div className="mb-8">
            <BookingButton
              label={t("acupunctureEarAcuPage.signUp.button")}
              setmoreIframeId
            />
          </div>
          <AboutSection />
          <ExpectationSection />
          <PriceSection />
          <PracticalInfoSection />
          <BeforeSessionSection />
          <AcupunctureSpecialSection />
          <SignUpSection />
        </div>
      </div>
    </Section>
  );
}

function AboutSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureEarAcuPage.about.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeading title={t("acupunctureEarAcuPage.about.title")} />
      <Paragraphs paragraphs={paragraphs} />
    </>
  );
}

function SectionHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return <h2 className="text-3xl font-bold mb-4 break-words">{title}</h2>;
}

function Paragraphs({
  paragraphs,
}: Readonly<{ paragraphs: string[] }>): JSX.Element {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }: Readonly<{ items: string[] }>): JSX.Element {
  return (
    <ul className="space-y-2 list-disc list-outside ml-4 mb-4 leading-relaxed">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function ExpectationSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bullets = t("acupunctureEarAcuPage.expectations.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("acupunctureEarAcuPage.expectations.title")} />
      <BulletList items={bullets} />
    </div>
  );
}

function PriceSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureEarAcuPage.price.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("acupunctureEarAcuPage.price.title")} />
      <p className="leading-relaxed mb-1 font-semibold">
        {t("acupunctureEarAcuPage.price.regularPrice")}
      </p>
      <p className="leading-relaxed mb-4 font-semibold">
        {t("acupunctureEarAcuPage.price.introPrice")}
      </p>
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function PracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "acupunctureEarAcuPage.practicalInfo" as const;

  const rows: Array<{ labelKey: string; valueKey: string }> = [
    { labelKey: `${p}.durationLabel`, valueKey: `${p}.durationValue` },
    { labelKey: `${p}.locationLabel`, valueKey: `${p}.locationValue` },
    { labelKey: `${p}.priceLabel`, valueKey: `${p}.priceValue` },
  ];

  return (
    <div className="mt-8">
      <SectionHeading title={t(`${p}.title`)} />
      {rows.map(({ labelKey, valueKey }) => (
        <p key={labelKey} className="leading-relaxed mb-4">
          <b>{t(labelKey)}</b>: {t(valueKey)}
        </p>
      ))}
    </div>
  );
}

function BeforeSessionSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureEarAcuPage.beforeSession.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("acupunctureEarAcuPage.beforeSession.title")} />
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function SignUpSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div className="mt-8">
      <BookingButton label={t("acupunctureEarAcuPage.signUp.button")} />
    </div>
  );
}
