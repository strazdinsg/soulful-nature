"use client";

import Image from "next/image";
import Script from "next/script";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AcupunctureSpecialSection from "@/components/AcupunctureSpecialSection";
import BookingButton from "@/components/BookingButton";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Paragraphs from "@/components/Paragraphs";
import PracticalInfoCard from "@/components/PracticalInfoCard";
import PriceFactCard from "@/components/PriceFactCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
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
      <CheckList items={bullets} />
    </div>
  );
}

function PriceAndPracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "acupunctureAcuNovaPage.practicalInfo" as const;

  const priceParagraphs = t("acupunctureAcuNovaPage.price.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <PriceFactCard
        title={t("acupunctureAcuNovaPage.price.title")}
        previousPrice={t("acupunctureAcuNovaPage.price.regularPrice")}
        price={t("acupunctureAcuNovaPage.price.introPrice")}
        paragraphs={priceParagraphs}
      />
      <PracticalInfoCard
        title={t(`${p}.title`)}
        rows={[
          {
            icon: faClock,
            label: t(`${p}.durationLabel`),
            value: t(`${p}.durationValue`),
          },
          {
            icon: faLocationDot,
            label: t(`${p}.locationLabel`),
            value: t(`${p}.locationValue`),
          },
        ]}
      />
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
