"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Card from "./Card";
import SmallVerticalSpacer from "./SmallVerticalSpacer";
import PageImage from "./PageImage";
import CardHeading from "./CardHeading";
import BookingButton from "./BookingButton";
import { getLocaleFromPathname } from "@/lib/locale";

export default function PageCard({
  translationKey,
  altName,
  imgSrc,
  url,
  bookable = false,
  t,
}: Readonly<{
  translationKey: string;
  altName: string;
  imgSrc: string;
  url: string;
  /** Show a booking button next to the "learn more" link. */
  bookable?: boolean;
  t: (key: string) => string;
}>): JSX.Element {
  const name = t(`pages.${translationKey}.name`);
  const description = t(`pages.${translationKey}.description`);
  const moreLinkTitle = t(`pages.${translationKey}.moreLinkTitle`);
  const bookLinkTitle = t(`pages.${translationKey}.bookLinkTitle`);

  return (
    <Card>
      <div className="flex flex-col md:flex-row md:min-h-80 lg:min-h-80 xl:min-h-[432px]">
        <div className="md:w-72 lg:w-80 xl:w-[432px] shrink-0">
          <PageImage imgSrc={imgSrc} altText={altName} />
        </div>
        <div className="flex-1 min-w-0">
          <PageDescription
            name={name}
            description={description}
            moreLinkTitle={moreLinkTitle}
            bookLinkTitle={bookable ? bookLinkTitle : undefined}
            url={url}
          />
        </div>
      </div>
    </Card>
  );
}

function PageDescription({
  name,
  description,
  moreLinkTitle,
  bookLinkTitle,
  url,
}: Readonly<{
  name: string;
  description: string;
  moreLinkTitle: string;
  bookLinkTitle?: string;
  url: string;
}>): JSX.Element {
  return (
    <div className="p-6 lg:p-9 h-full flex flex-col justify-center min-w-0">
      <CardHeading title={name} />
      <p className="text-gray-600 text-sm lg:text-base xl:text-lg break-words">
        {description}
      </p>
      <SmallVerticalSpacer />
      <div className="flex flex-col items-start gap-4">
        <LearnMoreLink moreLinkTitle={moreLinkTitle} url={url} />
        {bookLinkTitle && (
          <BookingButton label={bookLinkTitle} className="relative z-10" />
        )}
      </div>
    </div>
  );
}

/**
 * The "learn more" link, stretched over the whole card so that clicking
 * anywhere on the card still opens the page.
 *
 * The card cannot simply be wrapped in a link: a booking link nested inside it
 * would be invalid HTML and break hydration. The booking button sits above this
 * one via `z-10`, so it stays separately clickable.
 */
function LearnMoreLink({
  moreLinkTitle,
  url,
}: Readonly<{
  moreLinkTitle: string;
  url: string;
}>): JSX.Element {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <Link
      href={`/${currentLocale}${url}`}
      className="text-green-600 hover:underline text-sm lg:text-base xl:text-lg after:absolute after:inset-0"
    >
      {moreLinkTitle}
    </Link>
  );
}
