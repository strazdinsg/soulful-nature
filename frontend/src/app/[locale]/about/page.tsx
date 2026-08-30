"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { moontime } from "@/app/fonts";
import LargeVerticalSpacer from "@/components/LargeVerticalSpacer";
import { useTranslation } from "react-i18next";

type StorySection = Readonly<{
  title: string;
  paragraphs: string[];
}>;

type SectionImage = Readonly<{
  imgSrc: string;
  altText: string;
  width: number;
  height: number;
  imagePosition: "left" | "right";
}>;

// One entry per story section, in order. `null` means the section has no image.
const sectionImages: readonly (SectionImage | null)[] = [
  null,
  {
    imgSrc: "burnout.jpg",
    altText: "Burned out candle",
    width: 800,
    height: 731,
    imagePosition: "left",
  },
  {
    imgSrc: "balance.jpg",
    altText: "Calm sea",
    width: 800,
    height: 600,
    imagePosition: "right",
  },
  {
    imgSrc: "from-cacao.jpg",
    altText: "Pouring cacao in a cup",
    width: 800,
    height: 600,
    imagePosition: "left",
  },
  {
    imgSrc: "turning-point.jpg",
    altText: "Holding a feather in the hand",
    width: 800,
    height: 600,
    imagePosition: "right",
  },
  {
    imgSrc: "practice.jpg",
    altText: "Lighting candles",
    width: 800,
    height: 600,
    imagePosition: "left",
  },
  null,
];

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
  const { t } = useTranslation("common");
  const sections = t("about.sections", {
    returnObjects: true,
  }) as StorySection[];

  return (
    <Section topMargin={0}>
      <div className="mb-16 pt-16 pb-8 px-8 text-[#252419] max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <StorySection
            key={`story-${index}`}
            section={section}
            image={sectionImages[index] ?? null}
            index={index}
          />
        ))}
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

function StorySection({
  section,
  image,
  index,
}: Readonly<{
  section: StorySection;
  image: SectionImage | null;
  index: number;
}>): JSX.Element {
  return (
    <TextSection>
      <Heading>{section.title}</Heading>
      {image && <ParagraphImage {...image} />}
      {section.paragraphs.map((paragraph, paragraphIndex) => (
        <Paragraph key={`story-${index}-${paragraphIndex}`}>
          {paragraph}
        </Paragraph>
      ))}
    </TextSection>
  );
}

function Signature(): JSX.Element {
  const { t } = useTranslation("common");
  const lines = t("about.signature.lines", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      {lines.map((line, index) => (
        <p
          key={`signature-${index}`}
          className={`mb-4 ${moontime.className} text-4xl text-[#0e4726]`}
        >
          {line}
        </p>
      ))}
      <p className={`pt-8 mb-4 ${moontime.className} text-6xl text-[#0e4726]`}>
        {t("about.signature.name")}
      </p>
    </>
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
      <LargeVerticalSpacer />
    </TextSection>
  );
}
