"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";

/**
 * A card.
 * @param children - The children of the card.
 * @param clickUrl - Optional URL to make the card clickable.
 * @returns The Card component.
 */
export default function Card({
  children,
  clickUrl,
}: Readonly<{
  children: React.ReactNode;
  clickUrl?: string;
}>): JSX.Element {
  const isAbsoluteUrl = clickUrl?.startsWith("http");
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  if (clickUrl) {
    const localeAwareUrl = `/${currentLocale}${clickUrl}`;
    return (
      <Link
        href={isAbsoluteUrl ? clickUrl : localeAwareUrl}
        className="card w-full max-w-sm md:max-w-xl lg:max-w-4xl"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <div className="card w-full max-w-sm md:max-w-xl lg:max-w-4xl">
        {children}
      </div>
    );
  }
}
