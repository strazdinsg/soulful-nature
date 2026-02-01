"use client";

import { useTranslation } from "react-i18next";
import { cacaoCircleEvents, Event } from "@/data/events";
import Card from "@/components/Card";
import SmallVerticalSpacer from "@/components/SmallVerticalSpacer";

interface EventsSectionProps {
  today: string;
  maxEvents?: number;
}

export default function EventsSection({
  today,
  maxEvents,
}: EventsSectionProps): JSX.Element {
  const { t } = useTranslation("common");

  if (!today) return <></>;

  const upcomingEvents = getUpcoming(cacaoCircleEvents, today);
  const eventsToShow = maxEvents
    ? upcomingEvents.slice(0, maxEvents)
    : upcomingEvents;

  return (
    <div className="bg-[#e7ede9] p-6 mb-16 w-full">
      <EventHeading title={t("cacao.events.title")} />
      <div className="flex flex-col gap-4 mt-4">
        {eventsToShow.map((event) => (
          <EventCard key={event.date} event={event} />
        ))}
      </div>
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
  return (
    <h3 className="text-lg font-semibold mb-4 md:text-xl lg:text-2xl">
      {title}
    </h3>
  );
}

function SignUpButton(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <span className="text-green-600 hover:underline md:text-lg lg:text-xl">
      {t("common.signUp")}
    </span>
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
