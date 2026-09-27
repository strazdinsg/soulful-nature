import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * A bullet list with check-mark icons instead of plain discs.
 */
export default function CheckList({
  items,
}: Readonly<{ items: string[] }>): JSX.Element {
  return (
    <ul className="space-y-3 mb-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 leading-relaxed">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="mt-1 h-4 w-4 shrink-0 text-[#0e4726]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
