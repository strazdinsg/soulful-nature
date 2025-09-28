"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { getLocaleFromPathname } from "@/lib/locale";

/**
 * The navigation with all links to the pages.
 * @returns The navigation component.
 */
export default function Navigation(): JSX.Element {
  const pathname = usePathname();

  // Extract current locale from pathname
  const currentLocale = getLocaleFromPathname(pathname);
  const switchLocale = currentLocale === "en" ? "no" : "en";
  const switchText = currentLocale === "en" ? "NO" : "EN";

  const samePageWithOtherLocale = () => {
    // Remove current locale prefix and add new one
    let pathWithoutLocale = pathname;
    if (pathname.startsWith("/no") || pathname.startsWith("/en")) {
      pathWithoutLocale = pathname.slice(3);
    }
    return `/${switchLocale}${pathWithoutLocale}`;
  };

  return (
    <nav className="absolute top-4 right-4 z-50 flex items-center gap-4">
      <Link
        href={samePageWithOtherLocale()}
        className="text-white hover:text-[#b8b67d] transition-colors"
      >
        {switchText}
      </Link>
      <Link
        href={`/${currentLocale}`}
        className="text-white hover:text-[#b8b67d] transition-colors"
      >
        <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
      </Link>
    </nav>
  );
}
