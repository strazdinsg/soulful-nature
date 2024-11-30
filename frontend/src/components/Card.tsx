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
  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {children}
    </div>
  );
}
