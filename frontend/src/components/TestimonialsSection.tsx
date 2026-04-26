"use client";

import Section from "@/components/Section";
import { useTranslation } from "react-i18next";

function SectionHeading({ title }: Readonly<{ title: string }>): JSX.Element {
  return <h2 className="text-3xl font-bold mb-4">{title}</h2>;
}

export default function TestimonialsSection({
  titleKey = "testimonials.title",
  itemsKey = "testimonials.items",
}: Readonly<{
  titleKey?: string;
  itemsKey?: string;
}>): JSX.Element {
  const { t } = useTranslation("common");

  const testimonials = t(itemsKey, {
    returnObjects: true,
  }) as Array<{
    message: string;
    name: string;
  }>;

  return (
    <Section>
      <div className="pb-8 px-8">
        <div className="bg-[#e7ede9] p-6">
          <SectionHeading title={t(titleKey)} />
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => {
              const paragraphs = testimonial.message.split("\n");
              return (
                <div key={testimonial.name + index}>
                  <div className="leading-relaxed text-gray-700 italic">
                    {paragraphs.map((paragraph, pIndex) => {
                      const isFirstParagraph = pIndex === 0;
                      const isLastParagraph = pIndex === paragraphs.length - 1;
                      return (
                        <p
                          key={pIndex}
                          className={isFirstParagraph ? "" : "mt-2"}
                        >
                          {isFirstParagraph && '"'}
                          {paragraph}
                          {isLastParagraph && (
                            <>
                              {'"'} -- {testimonial.name}
                            </>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
