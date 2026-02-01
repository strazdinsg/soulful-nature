/**
 * A heading for a card.
 * @param title - The title text to show.
 * @returns The CardHeading component.
 */
export default function CardHeading({ title }: { title: string }): JSX.Element {
  return (
    <h3 className="text-xl font-semibold mb-3 xl:text-2xl 2xl:text-3xl break-words">
      {title}
    </h3>
  );
}
