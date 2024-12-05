/**
 * Section component that wraps the children in a container with a background color, rounded corners, and a shadow.
 * Adds space between the children.
 * @param children - The children to be wrapped.
 * @param bgColor - The background color of the section.
 * @param mobileHorPad - Whether to add horizontal padding on mobile devices.
 * @returns The Section component.
 */
export default function Section({
  children,
  bgColor = "bg-gray-100",
  mobileHorPad = true,
}: {
  children: React.ReactNode;
  bgColor?: string;
  mobileHorPad?: boolean;
}): JSX.Element {
  const padClass = mobileHorPad ? "px-4" : "";
  return (
    <div className={`${bgColor} md:px-4 overflow-hidden`}>
      <div className={`container mx-auto ${padClass} my-8`}>
        <div className="space-y-16">{children}</div>
      </div>
    </div>
  );
}
