/**
 * A section title with a short gold accent bar underneath, tying long-form
 * content sections back to the site's accent color.
 */
export default function SectionHeading({
  title,
}: Readonly<{ title: string }>): JSX.Element {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold break-words">{title}</h2>
      <span className="mt-2 block h-1 w-16 bg-[#b8b67d]" />
    </div>
  );
}
