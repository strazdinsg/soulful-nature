"use client";

import Image from "next/image";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import AcupunctureSpecialSection from "@/components/AcupunctureSpecialSection";
import BookingButton from "@/components/BookingButton";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { useTranslation } from "react-i18next";
import { SETMORE_SCRIPT_URL } from "@/data/booking";

const SAGE_BG = "bg-[#e7ede9]";

export default function AcuNovaAcupuncturePage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/acupuncture/acunova.jpg"
        mobileImage="pages/acupuncture/acunova.jpg"
        title={t("acupunctureAcuNovaPage.hero.title")}
        subtitle={t("acupunctureAcuNovaPage.hero.subtitle")}
      />

      <Section topMargin={0}>
        <div className="pt-16 pb-8 px-8 text-[#252419]">
          <div className="mb-8">
            <BookingButton
              label={t("acupunctureAcuNovaPage.signUp.button")}
              setmoreIframeId
            />
          </div>
          <AboutSection />
        </div>
      </Section>

      <Section bgColor={SAGE_BG} topMargin={0}>
        <div className="py-8 px-8 text-[#252419]">
          <ExpectationSection />
        </div>
      </Section>

      <Section topMargin={0}>
        <div className="py-8 px-8 text-[#252419]">
          <PriceAndPracticalInfoSection />
        </div>
      </Section>

      <Section bgColor={SAGE_BG} topMargin={0}>
        <div className="py-8 px-8 text-[#252419]">
          <BeforeSessionSection />
        </div>
      </Section>

      <Section topMargin={0}>
        <div className="py-8 pb-16 px-8 text-[#252419]">
          <AcupunctureSpecialSection />
          <SignUpSection />
        </div>
      </Section>

      <ContactSection />
      <Script id="setmore-book-now" src={SETMORE_SCRIPT_URL} />
    </>
  );
}

function SectionHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold break-words">{title}</h2>
      <span className="mt-2 block h-1 w-16 bg-[#b8b67d]" />
    </div>
  );
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

function AboutSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureAcuNovaPage.about.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeading title={t("acupunctureAcuNovaPage.about.title")} />
      <Image
        src="/images/pages/acupuncture/acunova.jpg"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        className="float-right w-32 md:w-44 h-auto pb-4 pl-4"
      />
      <Paragraphs paragraphs={paragraphs} />
    </>
  );
}

/**
 * Check-mark bullets instead of plain discs, matching the accent palette used
 * elsewhere on the page.
 */
function BulletList({ items }: Readonly<{ items: string[] }>): JSX.Element {
  return (
    <ul className="space-y-3 mb-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 leading-relaxed">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="mt-1 h-4 w-4 shrink-0 text-[#0e4726]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExpectationSection(): JSX.Element {
  const { t } = useTranslation("common");

  const bullets = t("acupunctureAcuNovaPage.expectations.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <SectionHeading
        title={t("acupunctureAcuNovaPage.expectations.title")}
      />
      <BulletList items={bullets} />
    </div>
  );
}

/**
 * Price and practical information as a pair of highlighted fact cards
 * instead of plain label/value paragraphs.
 */
function PriceAndPracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "acupunctureAcuNovaPage.practicalInfo" as const;

  const priceParagraphs = t("acupunctureAcuNovaPage.price.paragraphs", {
    returnObjects: true,
  }) as string[];

  const infoRows = [
    {
      icon: faClock,
      labelKey: `${p}.durationLabel`,
      valueKey: `${p}.durationValue`,
    },
    {
      icon: faLocationDot,
      labelKey: `${p}.locationLabel`,
      valueKey: `${p}.locationValue`,
    },
  ];

  return (
    <div>
      <SectionHeading title={t("acupunctureAcuNovaPage.price.title")} />
      <div className="card border-l-4 border-[#b8b67d] p-6 mb-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
          <span className="text-gray-400 line-through">
            {t("acupunctureAcuNovaPage.price.regularPrice")}
          </span>
          <span className="text-2xl font-bold text-[#0e4726]">
            {t("acupunctureAcuNovaPage.price.introPrice")}
          </span>
        </div>
        <Paragraphs paragraphs={priceParagraphs} />
      </div>
      <div className="card border-l-4 border-[#b8b67d] p-6">
        <h3 className="font-bold mb-4">{t(`${p}.title`)}</h3>
        <div className="space-y-3">
          {infoRows.map(({ icon, labelKey, valueKey }) => (
            <p
              key={labelKey}
              className="flex items-center gap-3 leading-relaxed"
            >
              <FontAwesomeIcon icon={icon} className="h-4 w-4 text-[#0e4726]" />
              <span>
                <b>{t(labelKey)}</b>: {t(valueKey)}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeSessionSection(): JSX.Element {
  const { t } = useTranslation("common");

  const paragraphs = t("acupunctureAcuNovaPage.beforeSession.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <SectionHeading
        title={t("acupunctureAcuNovaPage.beforeSession.title")}
      />
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function SignUpSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div className="mt-8">
      <BookingButton label={t("acupunctureAcuNovaPage.signUp.button")} />
    </div>
  );
}
