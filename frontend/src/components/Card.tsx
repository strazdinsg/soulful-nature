/**
 * A card.
 * @param children - The children of the card.
 * @param clickUrl - Optional URL to make the card clickable.
 * @returns The Card component.
 */
export default function Card({
  children,
  clickUrl,
}: {
  children: React.ReactNode;
  clickUrl?: string;
}): JSX.Element {
  if (clickUrl) {
    return (
      <a href={clickUrl} className="card max-w-80">
        {children}
      </a>
    );
  } else {
    return <div className="card max-w-80">{children}</div>;
  }
}
