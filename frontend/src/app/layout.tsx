import type { Metadata } from "next";
import "./globals.css";
import "../lib/fontawesome";
import Navigation from "@/components/Navigation";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Soulful Nature",
  description:
    "Elevate your spirit with nature-inspired services, and soulful products at soulfulnature.no. " +
    "Embark on a transformative journey today.",
};

/**
 * The root layout for all pages.
 * @param children - The children to be wrapped.
 * @returns The root layout for all pages.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <I18nProvider>
          <Navigation />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
