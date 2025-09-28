/**
 * A heading for a card.
 * @param title - The title text to show.
 * @returns The CardHeading component.
 */
export default function CardHeading({ title }: { title: string }): JSX.Element {
  return <h3 className="text-2xl font-semibold mb-4 lg:text-3xl">{title}</h3>;
}
