"use client";

import { useTranslation } from "react-i18next";

/**
 * Contact Section
 * @returns
 */
export default function ContactSection(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <section className="py-8 bg-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p>
          {t("contact.title")}:{" "}
          <a
            href="mailto:inguna@sfnature.no"
            className="text-blue-600 hover:underline"
          >
            inguna@sfnature.no
          </a>
        </p>
      </div>
    </section>
  );
}
