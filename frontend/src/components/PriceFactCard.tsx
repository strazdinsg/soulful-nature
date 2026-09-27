import SectionHeading from "./SectionHeading";
import FactCard from "./FactCard";
import Paragraphs from "./Paragraphs";

/**
 * A price callout: an optional struck-through previous price next to the
 * current (bold, accent-colored) price, followed by explanatory paragraphs.
 */
export default function PriceFactCard({
  title,
  price,
  previousPrice,
  paragraphs,
}: Readonly<{
  title: string;
  price: string;
  previousPrice?: string;
  paragraphs: string[];
}>): JSX.Element {
  return (
    <>
      <SectionHeading title={title} />
      <FactCard className="mb-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
          {previousPrice && (
            <span className="text-gray-400 line-through">{previousPrice}</span>
          )}
          <span className="text-2xl font-bold text-[#0e4726]">{price}</span>
        </div>
        <Paragraphs paragraphs={paragraphs} />
      </FactCard>
    </>
  );
}
