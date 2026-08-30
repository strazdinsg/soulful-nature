"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NADA_NORGE_URL = "https://www.nadanorge.no/";

/** Sign-up page for NADA sessions. Empty until the booking page is ready. */
const SIGN_UP_URL = "";

export default function NadaAcupuncturePage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/nada.jpg"
        mobileImage="pages/nada.jpg"
        title={t("nada.hero.title")}
        subtitle={t("nada.hero.subtitle")}
      />
      <MainContentSection />
      <ContactSection />
    </>
  );
}

function MainContentSection(): JSX.Element {
  return (
    <Section>
      <div className="pt-16 pb-8 px-8">
        <div className="text-[#252419]">
          <AboutSection />
          <ExpectationSection />
          <WhoIsItForSection />
          <CertificationSection />
          <PracticalInfoSection />
          <PrecautionsSection />
          <BackgroundSection />
          <SignUpSection />
        </div>
      </div>
    </Section>
  );
}

function AboutSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bodyParagraphs = t("nada.about.bodyParagraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeading title={t("nada.about.title")} />
      <p className="text-lg md:text-xl text-gray-600 font-bold mb-6">
        {t("nada.about.subheading")}
      </p>
      <p className="leading-relaxed mb-4">
        <b>{t("nada.about.leadingText")}</b> {t("nada.about.description1")}
      </p>
      <Paragraphs paragraphs={bodyParagraphs} />
    </>
  );
}

/**
 * Long Norwegian compounds (e.g. "sertifiseringsprosessen") can be wider than a
 * phone screen. `break-words` keeps them inside the layout; the soft hyphen in
 * the translation decides where the break lands when one is needed.
 */
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

  const bullets = t("nada.expectations.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.expectations.title")} />
      <BulletList items={bullets} />
    </div>
  );
}

function WhoIsItForSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bullets = t("nada.whoIsItFor.bullets", {
    returnObjects: true,
  }) as string[];
  const paragraphs = t("nada.whoIsItFor.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.whoIsItFor.title")} />
      <p className="leading-relaxed mb-4">{t("nada.whoIsItFor.intro")}</p>
      <BulletList items={bullets} />
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function CertificationSection(): JSX.Element {
  const { t } = useTranslation("common");

  const priceOptions = t("nada.certification.priceOptions", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.certification.title")} />
      <p className="leading-relaxed mb-4">{t("nada.certification.intro")}</p>
      <p className="leading-relaxed">{t("nada.certification.priceIntro")}</p>
      <BulletList items={priceOptions} />
      <p className="leading-relaxed mb-4">{t("nada.certification.feedback")}</p>
    </div>
  );
}

function PracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "nada.practicalInfo" as const;

  const rows: Array<{ labelKey: string; valueKey: string }> = [
    { labelKey: `${p}.durationLabel`, valueKey: `${p}.durationValue` },
    { labelKey: `${p}.locationLabel`, valueKey: `${p}.locationValue` },
    { labelKey: `${p}.bringLabel`, valueKey: `${p}.bringValue` },
  ];

  return (
    <div className="mt-8">
      <SectionHeading title={t(`${p}.title`)} />
      {rows.map(({ labelKey, valueKey }) => (
        <p key={labelKey} className="leading-relaxed mb-4">
          <b>{t(labelKey)}</b>: {t(valueKey)}
        </p>
      ))}
      <p className="leading-relaxed">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mt-0.5" />
        {t(`${p}.pleaseSignUp`)}:{" "}
        <a href="sms:+4792370207" className="text-green-600 hover:underline">
          +47 92 37 02 07
        </a>
      </p>
      <p className="leading-relaxed">{t(`${p}.cancellation`)}</p>
    </div>
  );
}

function PrecautionsSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bullets = t("nada.precautions.bullets", {
    returnObjects: true,
  }) as string[];
  const paragraphs = t("nada.precautions.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.precautions.title")} />
      <p className="leading-relaxed mb-4">{t("nada.precautions.intro")}</p>
      <BulletList items={bullets} />
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function BackgroundSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("nada.background.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.background.title")} />
      <Paragraphs paragraphs={paragraphs} />
      <p className="leading-relaxed">
        <a
          href={NADA_NORGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          {t("nada.background.readMoreLink")}
        </a>
      </p>
    </div>
  );
}

function SignUpSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div className="mt-8">
      <SectionHeading title={t("nada.signUp.question")} />
      {SIGN_UP_URL ? (
        <a
          href={SIGN_UP_URL}
          className="text-green-600 hover:underline text-lg"
        >
          {t("nada.signUp.button")}
        </a>
      ) : (
        <p className="leading-relaxed">
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mt-0.5" />
          {t("nada.practicalInfo.pleaseSignUp")}:{" "}
          <a href="sms:+4792370207" className="text-green-600 hover:underline">
            +47 92 37 02 07
          </a>
        </p>
      )}
    </div>
  );
}
