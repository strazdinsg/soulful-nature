/**
 * A card.
 * @param children - The children of the card.
 * @returns The Card component.
 */
export default function Card({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="card">{children}</div>;
}
