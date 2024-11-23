/**
 * Contact Section
 * @returns
 */
export default function ContactSection(): JSX.Element {
  return (
    <section className="py-8 bg-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">
          Get in touch:{" "}
          <a
            href="mailto:inguna@sfnature.no"
            className="text-blue-600 hover:underline"
          >
            inguna@sfnature.no
          </a>
        </p>
      </div>
    </section>
  )
}
