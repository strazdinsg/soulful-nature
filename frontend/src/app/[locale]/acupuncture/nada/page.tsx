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

export default function RelaxWithNadaPage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="pages/acupuncture/nada.jpg"
        mobileImage="pages/acupuncture/nada.jpg"
        title={t("acupunctureNadaPage.hero.title")}
        subtitle={t("acupunctureNadaPage.hero.subtitle")}
      />

      <Section topMargin={0}>
        <div className="pt-16 pb-8 px-8 text-[#252419]">
          <div className="mb-8">
            <BookingButton
              label={t("acupunctureNadaPage.signUp.button")}
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
          <CertificationAndPracticalInfoSection />
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

  const paragraphs = t("acupunctureNadaPage.about.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeading title={t("acupunctureNadaPage.about.title")} />
      <Image
        src="/images/pages/acupuncture/nada.jpg"
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

  const bullets = t("acupunctureNadaPage.expectations.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <SectionHeading title={t("acupunctureNadaPage.expectations.title")} />
      <CheckList items={bullets} />
    </div>
  );
}

function CertificationAndPracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");
  const p = "acupunctureNadaPage.practicalInfo" as const;

  const certificationParagraphs = t(
    "acupunctureNadaPage.certification.paragraphs",
    { returnObjects: true }
  ) as string[];

  return (
    <div>
      <PriceFactCard
        title={t("acupunctureNadaPage.certification.title")}
        price={t("acupunctureNadaPage.certification.price")}
        paragraphs={certificationParagraphs}
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

  const paragraphs = t("acupunctureNadaPage.beforeSession.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <SectionHeading title={t("acupunctureNadaPage.beforeSession.title")} />
      <Paragraphs paragraphs={paragraphs} />
    </div>
  );
}

function SignUpSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div className="mt-8">
      <BookingButton label={t("acupunctureNadaPage.signUp.button")} />
    </div>
  );
}
