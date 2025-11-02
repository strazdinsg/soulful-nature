"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import EventsSection from "@/components/EventsSection";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function CacaoCirclePage(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection
        desktopImage="hero-cacao-desktop.jpg"
        mobileImage="hero-cacao-mobile.jpg"
        title={t("cacao.hero.title")}
        subtitle={t("cacao.hero.subtitle")}
      />
      <MainContentSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

function MainContentSection(): JSX.Element {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const t = new Date().toISOString().split("T")[0];
    console.log("Today's date:", t);
    setToday(t);
  }, []);

  return (
    <Section>
      <div className="pt-16 pb-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-3 lg:col-span-4 text-[#252419]">
            <AboutSection />
            <div className="md:hidden">
              <EventsSection today={today} />
            </div>
            <ExpectationSection />
            <PracticalInfoSection />
          </div>
          <div className="hidden md:block lg:col-span-2 md:col-span-3">
            <EventsSection today={today} />
          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <SectionHeading title={t("cacao.about.title")} />
      <p className="leading-relaxed mb-4">
        <b>{t("cacao.about.leadingText")}</b> {t("cacao.about.description1")}
      </p>
      <p className="leading-relaxed mb-4">{t("cacao.about.description2")}</p>
    </>
  );
}

function SectionHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return <h2 className="text-3xl font-bold mb-4">{title}</h2>;
}

function ExpectationSection(): JSX.Element {
  const { t } = useTranslation("common");

  const items = t("cacao.expectations.items", {
    returnObjects: true,
  }) as Array<{
    item: string;
    description: string;
  }>;

  return (
    <div className="mt-8">
      <SectionHeading title={t("cacao.expectations.title")} />
      <p className="leading-relaxed">{t("cacao.expectations.leadingText")}:</p>
      <ul className="space-y-2 list-disc list-outside ml-4 mb-4">
        {items.map((item) => (
          <li key={item.item}>
            <span>
              <b>{item.item}</b>: {item.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="leading-relaxed mb-4">
        {t("cacao.expectations.experience")}
      </p>
      <p className="leading-relaxed mb-4">{t("cacao.expectations.language")}</p>
    </div>
  );
}

function PracticalInfoSection(): JSX.Element {
  const { t } = useTranslation("common");

  const contributionItems = t("practicalInfo.contributionOptions", {
    returnObjects: true,
  }) as Array<string>;

  return (
    <div className="mt-8">
      <SectionHeading title={t("practicalInfo.title")} />
      <p className="leading-relaxed mb-4">
        <b>{t("common.location")}</b>: {t("practicalInfo.location")}
      </p>
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
      <p className="leading-relaxed">
        {t("practicalInfo.cancellation")} {t("practicalInfo.cancellationFee")}
      </p>
    </div>
  );
}

function TestimonialsSection(): JSX.Element {
  const { t } = useTranslation("common");

  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{
    message: string;
    name: string;
  }>;

  return (
    <Section>
      <div className="pb-8 px-8">
        <div className="bg-[#e7ede9] p-6">
          <SectionHeading title={t("testimonials.title")} />
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => {
              const paragraphs = testimonial.message.split("\n");
              return (
                <div key={testimonial.name + index}>
                  <div className="leading-relaxed text-gray-700 italic">
                    {paragraphs.map((paragraph, pIndex) => {
                      const isFirstParagraph = pIndex === 0;
                      const isLastParagraph = pIndex === paragraphs.length - 1;
                      return (
                        <p
                          key={pIndex}
                          className={isFirstParagraph ? "" : "mt-2"}
                        >
                          {isFirstParagraph && '"'}
                          {paragraph}
                          {isLastParagraph && (
                            <>
                              {'"'} -- {testimonial.name}
                            </>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
