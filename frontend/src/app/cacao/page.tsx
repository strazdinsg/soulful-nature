import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMugHot,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";
import CardHeading from "@/components/CardHeading";

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
      <div className="mb-16 pt-16 pb-8 px-8 space-y-4 text-[#252419]">
        <h2 className="text-3xl font-bold">About Cacao Circle</h2>
        <p className="leading-relaxed">
          The Cacao Circle offers a heart-centered experience, blending
          meditation with the mindful drinking of cacao to encourage relaxation
          and deeper self-connection.
        </p>
        <p className="leading-relaxed">
          Inguna serves freshly made drink of Ceremonial Cacao from Peru, guide
          you to connect with Cacao, meditate/listen and finish with silent
          comtemplation or sharing.
        </p>
        <p className="leading-relaxed">
          Be part of a cozy group (max 10 people), find belonging, and build
          connections.
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
  return (
    <Section bgColor="bg-[#e7ede9]">
      <div className="p-6">
        <CardHeading title="Upcoming Events" />
        <ul className="list-inside list-disc">
          {[
            "Tuesday, 11th of February, 18:00",
            "Tuesday, 4th of March, 18:00",
            "Tuesday, 8th of April, 18:00",
            "Tuesday, 6th of May, 18:00",
            "Tuesday, 3rd of June, 18:00",
            "Tuesday, 1st of July, 18:00",
          ].map((eventDate) => (
            <li key={eventDate}>{eventDate}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
