"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { moontime } from "@/app/fonts";
import LargeVerticalSpacer from "@/components/LargeVerticalSpacer";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <HeroSection
        desktopImage="hero-about-desktop.jpg"
        mobileImage="hero-about-mobile.jpg"
        title="CACAO AND ME"
        subtitle="My journey with cacao"
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

function Paragraph({ children }: { children: React.ReactNode }): JSX.Element {
  return <p className="mb-4">{children}</p>;
}

function Heading({ children }: { children: React.ReactNode }): JSX.Element {
  return <h2 className="text-2xl font-bold mb-2 mt-8">{children}</h2>;
}

function TextSection({ children }: { children: React.ReactNode }): JSX.Element {
  return <section className="overflow-hidden">{children}</section>;
}

function ListItem({ children }: { children: React.ReactNode }): JSX.Element {
  return <li className="list-disc ml-6">{children}</li>;
}

function ParagraphImage({
  imgSrc,
  altText,
  width,
  height,
  imagePosition = "left",
}: {
  imgSrc: string;
  altText: string;
  width: number;
  height: number;
  imagePosition?: "left" | "right";
}): JSX.Element {
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
  return (
    <>
      <p className={`mb-4 ${moontime.className} text-4xl text-[#0e4726]`}>
        I invite you to join me in this practice — to share a cup of warm cacao,
        take a pause from everyday life, and reconnect with yourself.
      </p>
      <p className={`pt-8 mb-4 ${moontime.className} text-6xl text-[#0e4726]`}>
        Inguna
      </p>
    </>
  );
}

function HowItBeganSection(): JSX.Element {
  return (
    <TextSection>
      <Heading>How it began</Heading>
      <ParagraphImage
        imgSrc="burnout.jpg"
        altText="Burned out candle"
        width={800}
        height={731}
        imagePosition="left"
      />
      <Paragraph>
        In the autumn of 2021, I faced something I had never experienced before
        — emotional breakdowns at work. Some days, even the smallest event felt
        overwhelming. At that time, I held a leadership role in a high-pressure
        industry where the expectations were relentless. On the outside, I
        appeared strong. On the inside, I was burning out.
      </Paragraph>
      <Paragraph>
        A visit to my doctor confirmed what I already knew: burnout. I was given
        two choices — take a long sick leave, or make a significant change. I
        chose change.
      </Paragraph>
      <Paragraph>
        I have always loved working, solving challenges, and leading with a
        strategic mindset. But I realized that to continue in leadership, I
        needed a new approach — one that would not only restore my energy but
        also make my performance sustainable.
      </Paragraph>
    </TextSection>
  );
}

function TheSearchForBalanceSection(): JSX.Element {
  return (
    <TextSection>
      <Heading>The search for balance</Heading>
      <ParagraphImage
        imgSrc="balance.jpg"
        altText="Calm sea"
        width={800}
        height={600}
        imagePosition="right"
      />
      <Paragraph>
        Changing workplace reduced the immediate stress, but my energy was still
        low. I wanted to understand what was happening inside me and how to
        rebuild resilience in a lasting way.
      </Paragraph>
      <Paragraph>
        This search led me to Tunsbergs Medical School, where I completed a
        two-year course in Basic Medicine (Grunnmedisin). Alongside medical
        knowledge, I explored mindfulness practices and other evidence-based
        methods that support recovery, focus, and mental clarity.
      </Paragraph>
      <Paragraph>
        I also learned that some of the world&apos;s top leaders take time away
        on retreats to restore their energy, sharpen focus, and improve
        creativity. That inspired me to experiment with new approaches that
        could help me manage pressure and perform more sustainably.
      </Paragraph>
    </TextSection>
  );
}

function TheTurningPointSection(): JSX.Element {
  return (
    <TextSection>
      <Heading>The turning point</Heading>
      <ParagraphImage
        imgSrc="turning-point.jpg"
        altText="Holding a feather in the hand"
        width={800}
        height={600}
        imagePosition="left"
      />
      <Paragraph>
        In June 2022, I attended my first retreat. One of the first gatherings
        was a cacao ceremony — my very first experience with ceremonial cacao.
      </Paragraph>
      <Paragraph>
        The experience was unlike anything I had known before. After drinking
        warm cacao and listening to dedicated music, I felt carried into a
        special flow. For some, it was sounds that stirred emotions and
        memories; for me, it was images and impressions that surfaced, offering
        new perspective. That moment became the true beginning of my cacao
        journey.
      </Paragraph>
    </TextSection>
  );
}

function WhatCacaoGaveMeSection(): JSX.Element {
  return (
    <TextSection>
      <Heading>What cacao gave me</Heading>
      <ParagraphImage
        imgSrc="from-cacao.jpg"
        altText="Pouring cacao in a cup"
        width={800}
        height={600}
        imagePosition="right"
      />
      <Paragraph>
        Cacao did not &quot;cure&quot; burnout overnight. But it gave me tools
        that created lasting change:
      </Paragraph>
      <ul className="mb-4">
        <ListItem>
          To pause and regulate my nervous system under pressure.
        </ListItem>
        <ListItem>To ground myself when my mind was overloaded.</ListItem>
        <ListItem>To welcome emotions instead of pushing them aside.</ListItem>
        <ListItem>
          To recover clarity, energy, and focus in a sustainable way.
        </ListItem>
      </ul>
      <Paragraph>
        Over time, cacao became more than a drink — it became a practice of
        balance. I discovered that mindfulness doesn&apos;t weaken strong
        thinking or leadership — it makes it sustainable.
      </Paragraph>
    </TextSection>
  );
}

function CreatingPracticeSection(): JSX.Element {
  return (
    <TextSection>
      <Heading>Creating the Cacao Mindfulness Practice</Heading>
      <ParagraphImage
        imgSrc="practice.jpg"
        altText="Lighting candles"
        width={800}
        height={600}
        imagePosition="left"
      />
      <Paragraph>
        Eventually, I felt it was time to share this practice with others. That
        is how the Cacao Mindfulness Practice was born — evenings of
        candlelight, ceremonial cacao, mindful breathing, live music,
        reflection, and connection.
      </Paragraph>
      <Paragraph>
        These practices are not about escape. They are about resilience. They
        create a pause in the middle of busy, demanding lives — a pause that
        restores energy, focus, and calm.
      </Paragraph>
      <Paragraph>
        For me, cacao has become more than a personal ritual. It is a leadership
        wellness tool — a simple yet powerful way to prevent burnout, support
        clarity, and strengthen resilience in business and beyond.
      </Paragraph>
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
  return (
    <Paragraph>
      From time to time, people ask me:{" "}
      <i>&quot;How did you come to cacao mindfulness practice?&quot;</i>&nbsp;
      Here is my story.
    </Paragraph>
  );
}
