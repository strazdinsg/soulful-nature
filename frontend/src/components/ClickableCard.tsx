/**
 * A clickable card.
 * @param children - The children of the card.
 * @param url - The URL of the card.
 * @returns The ClickableCard component.
 */
export default function ClickableCard({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}): JSX.Element {
  return (
    <a href={url} className="card">
      {children}
    </a>
  );
}
