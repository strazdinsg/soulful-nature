"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { cacaoCircleEvents, Event } from "@/data/events";
import Card from "@/components/Card";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
            <TestimonialsSection />
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
      <h2 className="text-3xl font-bold mb-4">{t("cacao.about.title")}</h2>
      <p className="leading-relaxed mb-4">
        <b>{t("cacao.about.leadingText")}</b> {t("cacao.about.description1")}
      </p>
      <p className="leading-relaxed mb-4">{t("cacao.about.description2")}</p>
      {/* <p className="leading-relaxed mb-4">
        <b>{t("cacao.about.location")}</b>: {t("cacao.about.locationValue")}
      </p>
      <p className="leading-relaxed mb-4">
        <b>{t("cacao.about.contribution")}</b>:{" "}
        {t("cacao.about.contributionValue")}
      </p>
      <p className="mb-0">
        <b>{t("cacao.about.signUp")}</b>:
      </p>
      <ul className="mt-1">
        {[
          {
            icon: faCommentSms,
            text: (
              <>
                <a
                  href="sms:+4796746355"
                  className="text-green-600 hover:underline"
                >
                  +47 967 46 355
                </a>
                {", " + t("cacao.about.signUpSms")}
              </>
            ),
          },
          {
            icon: faLink,
            text: t("cacao.about.signUpLink"),
          },
        ].map((tip) => (
          <li key={tip.icon.iconName} className="flex items-start gap-2">
            <FontAwesomeIcon icon={tip.icon} className="w-5 h-5 mt-0.5" />
            <span>{tip.text}</span>
          </li>
        ))}
      </ul>
      <p className="leading-relaxed mb-4 mt-4">
        <b>{t("cacao.about.cancellation")}</b>:{" "}
        {t("cacao.about.cancellationText")}
      </p> */}
    </>
  );
}

function EventsSection({ today }: Readonly<{ today: string }>): JSX.Element {
  const { t } = useTranslation("common");

  if (!today) return <></>;

  return (
    <div className="bg-[#e7ede9] p-6 rounded-lg">
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
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-4">
        {t("cacao.expectations.title")}
      </h2>
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

/* <h2 className="text-3xl font-bold mb-4">{t("cacao.tips.title")}</h2>
      <ul className="space-y-4">
        {[
          {
            icon: faMugHot,
            text: t("cacao.tips.caffeine"),
          },
          {
            icon: faGlassWater,
            text: t("cacao.tips.water"),
          },
          {
            icon: faLightbulb,
            text: t("cacao.tips.intention"),
          },
        ].map((tip) => (
          <li key={tip.icon.iconName} className="flex items-start gap-2">
            <FontAwesomeIcon icon={tip.icon} className="w-5 h-5 mt-0.5" />
            <span>{tip.text}</span>
          </li>
        ))}
      </ul> */

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
    t("cacao.months.january"),
    t("cacao.months.february"),
    t("cacao.months.march"),
    t("cacao.months.april"),
    t("cacao.months.may"),
    t("cacao.months.june"),
    t("cacao.months.july"),
    t("cacao.months.august"),
    t("cacao.months.september"),
    t("cacao.months.october"),
    t("cacao.months.november"),
    t("cacao.months.december"),
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

  return (
    <Card clickUrl={event.signUpUrl}>
      <div className="p-4">
        <EventHeading title={formatEventDate(event.date, t, i18n.language)} />
        <p className="text-gray-600 text-sm">
          {getWeekday(event.date, t) + " " + event.time}
        </p>
        <SmallVerticalSpacer />
        <SignUpButton />
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
    <span className="text-green-600 hover:underline">
      {t("cacao.events.signUp")}
    </span>
  );
}

function getWeekday(dateStr: string, t: (key: string) => string) {
  const date = new Date(dateStr);
  const weekday = date.getDay();
  const days = [
    t("cacao.weekdays.sunday"),
    t("cacao.weekdays.monday"),
    t("cacao.weekdays.tuesday"),
    t("cacao.weekdays.wednesday"),
    t("cacao.weekdays.thursday"),
    t("cacao.weekdays.friday"),
    t("cacao.weekdays.saturday"),
  ];
  return days[weekday];
}

function PracticalInfoSection(): JSX.Element {
  return <></>;
}

function TestimonialsSection(): JSX.Element {
  return <></>;
}
