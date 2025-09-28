"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { cacaoCircleEvents, Event } from "@/data/events";
import Card from "@/components/Card";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";
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

function EventsSection({ today }: Readonly<{ today: string }>): JSX.Element {
  const { t } = useTranslation("common");

  if (!today) return <></>;

  return (
    <div className="bg-[#e7ede9] p-6 mb-16">
      <EventHeading title={t("cacao.events.title")} />
      <div className="flex flex-col gap-4 mt-4">
        {getUpcoming(cacaoCircleEvents, today).map((event) => (
          <EventCard key={event.date} event={event} />
        ))}
      </div>
    </div>
  );
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

function getUpcoming(events: Event[], today: string) {
  return events.filter((event) => event.date >= today);
}

function formatEventDate(
  dateStr: string,
  t: (key: string) => string,
  locale: string
) {
  const date = new Date(dateStr);
  const monthNames = [
    t("months.january"),
    t("months.february"),
    t("months.march"),
    t("months.april"),
    t("months.may"),
    t("months.june"),
    t("months.july"),
    t("months.august"),
    t("months.september"),
    t("months.october"),
    t("months.november"),
    t("months.december"),
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();

  if (locale === "no") {
    // Norwegian format: "14. Oktober"
    return `${day}. ${monthNames[monthIndex]}`;
  } else {
    // English format: "14th October"
    let suffix = "th";
    if (day % 10 === 1 && day !== 11) {
      suffix = "st";
    } else if (day % 10 === 2 && day !== 12) {
      suffix = "nd";
    } else if (day % 10 === 3 && day !== 13) {
      suffix = "rd";
    }
    return `${monthNames[monthIndex]} ${day}${suffix}`;
  }
}

function EventCard({ event }: Readonly<{ event: Event }>): JSX.Element {
  const { t, i18n } = useTranslation("common");
  const dateKnown = event.signUpUrl !== "";

  const formatMonthYear = (dateStr: string, t: (key: string) => string) => {
    const date = new Date(dateStr);
    const monthNames = [
      t("months.january"),
      t("months.february"),
      t("months.march"),
      t("months.april"),
      t("months.may"),
      t("months.june"),
      t("months.july"),
      t("months.august"),
      t("months.september"),
      t("months.october"),
      t("months.november"),
      t("months.december"),
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${year}`;
  };

  return (
    <Card clickUrl={dateKnown ? event.signUpUrl : undefined}>
      <div className="p-4">
        <EventHeading
          title={
            dateKnown
              ? formatEventDate(event.date, t, i18n.language)
              : formatMonthYear(event.date, t)
          }
        />
        <p className="text-gray-600 text-sm">
          {dateKnown
            ? getWeekday(event.date, t) + " " + event.time
            : t("cacao.events.dateToBeDefined")}
        </p>
        <SmallVerticalSpacer />
        {dateKnown && <SignUpButton />}
      </div>
    </Card>
  );
}

function EventHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return <h3 className="text-lg font-semibold mb-4 lg:text-2xl">{title}</h3>;
}

function SignUpButton(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <span className="text-green-600 hover:underline">{t("common.signUp")}</span>
  );
}

function getWeekday(dateStr: string, t: (key: string) => string) {
  const date = new Date(dateStr);
  const weekday = date.getDay();
  const days = [
    t("weekdays.sunday"),
    t("weekdays.monday"),
    t("weekdays.tuesday"),
    t("weekdays.wednesday"),
    t("weekdays.thursday"),
    t("weekdays.friday"),
    t("weekdays.saturday"),
  ];
  return days[weekday];
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.name}>
                <p className="leading-relaxed text-gray-700 italic">
                  &quot;{testimonial.message}&quot; -- {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
