"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { moontime } from "@/app/fonts";
import LargeVerticalSpacer from "@/components/LargeVerticalSpacer";
import { useTranslation } from "react-i18next";

export default function AboutPage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="hero-about-desktop.jpg"
        mobileImage="hero-about-mobile.jpg"
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
      />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function AboutSection(): JSX.Element {
  return (
    <Section topMargin={0}>
      <div className="mb-16 pt-16 pb-8 px-8 text-[#252419] max-w-4xl mx-auto">
        <LeadingText />
        <HowItBeganSection />
        <TheSearchForBalanceSection />
        <TheTurningPointSection />
        <WhatCacaoGaveMeSection />
        <CreatingPracticeSection />
        <SignatureSection />
      </div>
    </Section>
  );
}

function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <p className="mb-4">{children}</p>;
}

function Heading({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <h2 className="text-2xl font-bold mb-2 mt-8">{children}</h2>;
}

function TextSection({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <section className="overflow-hidden">{children}</section>;
}

function ListItem({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <li className="list-disc ml-6">{children}</li>;
}

function ParagraphImage({
  imgSrc,
  altText,
  width,
  height,
  imagePosition = "left",
}: Readonly<{
  imgSrc: string;
  altText: string;
  width: number;
  height: number;
  imagePosition?: "left" | "right";
}>): JSX.Element {
  const floatClass = imagePosition === "left" ? "float-left" : "float-right";
  const paddingClass = imagePosition === "left" ? "md:pr-4" : "md:pl-4";

  return (
    <Image
      src={`/images/pages/about/${imgSrc}`}
      alt={altText}
      width={width}
      height={height}
      className={`h-auto pb-4 ${floatClass} ${paddingClass} lg:w-1/3 md:w-1/2`}
    />
  );
}

function Signature(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <p className={`mb-4 ${moontime.className} text-4xl text-[#0e4726]`}>
        {t("about.signature.invitation")}
      </p>
      <p className={`pt-8 mb-4 ${moontime.className} text-6xl text-[#0e4726]`}>
        {t("about.signature.name")}
      </p>
    </>
  );
}

function HowItBeganSection(): JSX.Element {
  const { t } = useTranslation("common");
  const paragraphs = t("about.sections.howItBegan.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <TextSection>
      <Heading>{t("about.sections.howItBegan.title")}</Heading>
      <ParagraphImage
        imgSrc="burnout.jpg"
        altText="Burned out candle"
        width={800}
        height={731}
        imagePosition="left"
      />
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={`howItBegan-${index}`}>{paragraph}</Paragraph>
      ))}
    </TextSection>
  );
}

function TheSearchForBalanceSection(): JSX.Element {
  const { t } = useTranslation("common");
  const paragraphs = t("about.sections.searchForBalance.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <TextSection>
      <Heading>{t("about.sections.searchForBalance.title")}</Heading>
      <ParagraphImage
        imgSrc="balance.jpg"
        altText="Calm sea"
        width={800}
        height={600}
        imagePosition="right"
      />
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={`searchForBalance-${index}`}>{paragraph}</Paragraph>
      ))}
    </TextSection>
  );
}

function TheTurningPointSection(): JSX.Element {
  const { t } = useTranslation("common");
  const paragraphs = t("about.sections.turningPoint.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <TextSection>
      <Heading>{t("about.sections.turningPoint.title")}</Heading>
      <ParagraphImage
        imgSrc="turning-point.jpg"
        altText="Holding a feather in the hand"
        width={800}
        height={600}
        imagePosition="left"
      />
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={`turningPoint-${index}`}>{paragraph}</Paragraph>
      ))}
    </TextSection>
  );
}

function WhatCacaoGaveMeSection(): JSX.Element {
  const { t } = useTranslation("common");
  const paragraphs = t("about.sections.whatCacaoGaveMe.paragraphs", {
    returnObjects: true,
  }) as string[];
  const listItems = t("about.sections.whatCacaoGaveMe.listItems", {
    returnObjects: true,
  }) as string[];

  return (
    <TextSection>
      <Heading>{t("about.sections.whatCacaoGaveMe.title")}</Heading>
      <ParagraphImage
        imgSrc="from-cacao.jpg"
        altText="Pouring cacao in a cup"
        width={800}
        height={600}
        imagePosition="right"
      />
      <Paragraph>{paragraphs[0]}</Paragraph>
      <ul className="mb-4">
        {listItems.map((item, index) => (
          <ListItem key={`whatCacaoGaveMe-${index}`}>{item}</ListItem>
        ))}
      </ul>
      <Paragraph>{paragraphs[1]}</Paragraph>
    </TextSection>
  );
}

function CreatingPracticeSection(): JSX.Element {
  const { t } = useTranslation("common");
  const paragraphs = t("about.sections.creatingPractice.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <TextSection>
      <Heading>{t("about.sections.creatingPractice.title")}</Heading>
      <ParagraphImage
        imgSrc="practice.jpg"
        altText="Lighting candles"
        width={800}
        height={600}
        imagePosition="left"
      />
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={`creatingPractice-${index}`}>{paragraph}</Paragraph>
      ))}
    </TextSection>
  );
}

function SignatureSection(): JSX.Element {
  return (
    <TextSection>
      <LargeVerticalSpacer />
      <div className="md:hidden">
        <Signature />
      </div>
      <ParagraphImage
        imgSrc="signature.jpg"
        altText="Inguna"
        width={800}
        height={600}
        imagePosition="right"
      />
      <div className="hidden md:block">
        <Signature />
      </div>
    </TextSection>
  );
}

function LeadingText(): JSX.Element {
  const { t } = useTranslation("common");

  return <Paragraph>{t("about.leadingText")}</Paragraph>;
}
