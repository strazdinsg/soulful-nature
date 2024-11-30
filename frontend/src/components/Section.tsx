/**
 * Section component that wraps the children in a container with a background color, rounded corners, and a shadow.
 * Adds space between the children.
 * @param children - The children to be wrapped.
 * @returns The Section component.
 */
export default function Section({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 my-8">
        <div className="space-y-16">{children}</div>
      </div>
    </div>
  );
}
