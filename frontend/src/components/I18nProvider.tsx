"use client";

import { useEffect } from "react";
import "@/lib/i18n";

/**
 * This component initializes the i18n instance and provides it to its children for internationalization.
 * @param children - The children to be wrapped.
 * @returns The I18nProvider component.
 */

export default function I18nProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // i18n is initialized in the imported file
  }, []);

  return <>{children}</>;
}
