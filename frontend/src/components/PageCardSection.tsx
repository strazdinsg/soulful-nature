import PageCard from "./PageCard";
import { pages } from "@/data/pages";
import Section from "./Section";
import MediumVerticalSpacer from "./MediumVerticalSpacer";

export default function PageCardsSection(): JSX.Element {
  return (
    <Section mobileHorPad={false}>
      <MediumVerticalSpacer />
      <div className="flex flex-wrap gap-8 justify-center">
        {pages.map((page) => (
          <PageCard key={page.id} {...page} />
        ))}
      </div>
      <MediumVerticalSpacer />
    </Section>
  );
}
