/**
 * A highlighted white card with a gold accent stripe, used to call out
 * structured facts (price, practical info) instead of plain paragraphs.
 */
export default function FactCard({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>): JSX.Element {
  return (
    <div className={`card border-l-4 border-[#b8b67d] p-6 ${className}`}>
      {children}
    </div>
  );
}
