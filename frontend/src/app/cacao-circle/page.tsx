import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CardHeading from "@/components/CardHeading";
import MediumVerticalSpacer from "@/components/MediumVerticalSpacer";

export default function CacaoCirclePage(): JSX.Element {
  return (
    <>
      <HeroSection title="CACAO CIRCLE" subtitle="Enjoy your true self" />
      <DescriptionSection />
      <EventSection />
      <ContactSection />
    </>
  );
}

function DescriptionSection(): JSX.Element {
  return (
    <Section>
      <MediumVerticalSpacer />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <Card>
            <article className="p-6 lg:min-h-[360px] leading-relaxed space-y-4 max-w-[760px]">
              <CardHeading title="About Cacao Circle" />
              <p>
                The Cacao Circle offers a heart-centered experience, blending
                meditation with the mindful drinking of cacao to encourage
                relaxation and deeper self-connection.
              </p>
              <p>
                Inguna serves freshly made drink of Ceremonial Cacao from Peru,
                guide you to connect with Cacao, meditate/listen and finish with
                silent comtemplation or sharing.
              </p>
              <p>
                Be part of a cozy group (max 10 people), find belonging, and
                build connections.
              </p>
            </article>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card>
            <article className="p-6 lg:min-h-[360px] leading-relaxed">
              <CardHeading title="Tips" />
              <ul className="list-none list-inside space-y-2 -indent-2 p-2">
                <li>- Bring a blanket, and a pillow to sit on.</li>
                <li>- Formulate an intention for yourself.</li>
                <li>- Avoid drinking caffeine the day of the event.</li>
                <li>- Drink plenty of water throughout the day.</li>
              </ul>
            </article>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function EventSection(): JSX.Element {
  return (
    <Section>
      <Card>
        <div className="p-6">
          <CardHeading title="Events" />
          <p>Coming soon...</p>
        </div>
      </Card>
      <MediumVerticalSpacer />
    </Section>
  );
}
