import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import FactCard from "./FactCard";

export type PracticalInfoRow = {
  icon: IconDefinition;
  label: string;
  value: string;
};

export default function PracticalInfoCard({
  title,
  rows,
}: Readonly<{
  title: string;
  rows: PracticalInfoRow[];
}>): JSX.Element {
  return (
    <FactCard>
      <h3 className="font-bold mb-4">{title}</h3>
      <div className="space-y-3">
        {rows.map((row) => (
          <p key={row.label} className="flex items-center gap-3 leading-relaxed">
            <FontAwesomeIcon icon={row.icon} className="h-4 w-4 text-[#0e4726]" />
            <span>
              <b>{row.label}</b>: {row.value}
            </span>
          </p>
        ))}
      </div>
    </FactCard>
  );
}
