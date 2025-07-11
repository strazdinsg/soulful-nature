"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMugHot,
  faGlassWater,
  faCommentSms,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import CardHeading from "@/components/CardHeading";
import { cacaoCircleEvents, Event } from "@/data/events";
import Card from "@/components/Card";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";
import { useEffect, useState } from "react";

export default function CacaoCirclePage(): JSX.Element {
  return (
    <>
      <HeroSection
        desktopImage="hero-cacao-desktop.jpg"
        mobileImage="hero-cacao-mobile.jpg"
        title="CACAO CIRCLE"
        subtitle="Enjoy your true self"
      />
      <AboutSection />
      <EventSection />
      <TipsSection />
      <ContactSection />
    </>
  );
}

function AboutSection(): JSX.Element {
  return (
    <Section>
      <div className="mb-16 pt-16 pb-8 px-8 text-[#252419]">
        <h2 className="text-3xl font-bold mb-4">About Cacao Circle</h2>
        <p className="leading-relaxed mb-4">
          We invite you to join our Cacao Circle in Ålesund to experience a
          heart-centered practice, blending cacao, meditation and mindfulness
          elements to encourage relaxation and deeper self-connection.
        </p>
        <p className="leading-relaxed mb-4">
          Join a small group (around 10 participants), sharpen your senses, and
          give yourself this special time.
        </p>
        <p className="leading-relaxed mb-4">
          The event is organised once a month, it is held in English, but you`re
          welcome to respond in Norwegian, Latvian and Russian as well.
        </p>
        <p className="leading-relaxed mb-4">
          Available for anyone, with or without meditation experience.
        </p>
        <p className="leading-relaxed mb-4">
          <b>Location</b>: ARtstudio, Keiser Wilhelms gate 53, Ålesund.
        </p>
        <p className="leading-relaxed mb-4">
          <b>Contribution</b>: 220 NOK.
        </p>
        <p className="mb-0">
          <b>Sign up before coming</b>:
        </p>
        <ul className="mt-1">
          {[
            {
              icon: faCommentSms,
              text: (
                <>
                  <a
                    href="sms:+4796746355"
                    className="text-blue-600 hover:underline"
                  >
                    +47 967 46 355
                  </a>
                  {", or"}
                </>
              ),
            },
            {
              icon: faLink,
              text: "Upcoming event links below",
            },
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <FontAwesomeIcon icon={tip.icon} className="w-5 h-5 mt-0.5" />
              <span>{tip.text}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed mb-4 mt-4">
          <b>If you can&apos;t make it</b>: please send an SMS at least 24 hours
          before the event. If not, I kindly ask you to cover the event fee, as
          the cacao and materials will already be prepared.
        </p>
      </div>
    </Section>
  );
}

function TipsSection(): JSX.Element {
  return (
    <Section>
      <div className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-4">Preparation Tips</h2>
        <ul className="space-y-4">
          {[
            {
              icon: faMugHot,
              text: "Avoid drinking caffeine the day of the event",
            },
            {
              icon: faGlassWater,
              text: "Drink plenty of water throughout the day",
            },
            {
              icon: faLightbulb,
              text: "Formulate an intention for yourself",
            },
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <FontAwesomeIcon icon={tip.icon} className="w-5 h-5 mt-0.5" />
              <span>{tip.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function EventSection(): JSX.Element {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const t = new Date().toISOString().split("T")[0];
    console.log("Today's date:", t);
    setToday(t);
  }, []);

  if (!today) return <></>;

  return (
    <Section bgColor="bg-[#e7ede9]">
      <div className="p-6">
        <CardHeading title="Upcoming Events in 2025" />
        <div className="flex gap-6 flex-wrap">
          {getUpcoming(cacaoCircleEvents, today).map((event) => (
            <EventCard key={event.date} event={event} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function getUpcoming(events: Event[], today: string) {
  return events.filter((event) => event.date >= today);
}

function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";
  return `${monthNames[monthIndex]} ${day}${suffix}`;
}

function EventCard({ event }: { event: Event }): JSX.Element {
  return (
    <Card clickUrl={event.signUpUrl}>
      <div className="p-6 min-w-60">
        <CardHeading title={formatEventDate(event.date)} />
        <p className="text-gray-600">
          {getWeekday(event.date) + " " + event.time}
        </p>
        <SmallVerticalSpacer />
        <SignUpButton />
      </div>
    </Card>
  );
}

function SignUpButton(): JSX.Element {
  return <span className="text-blue-600 hover:underline">Sign up</span>;
}

function getWeekday(dateStr: string) {
  const date = new Date(dateStr);
  const weekday = date.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[weekday];
}
