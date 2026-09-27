import type { Metadata } from "next";
import "./globals.css";
import "../lib/fontawesome";
import Navigation from "@/components/Navigation";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Soulful Nature",
  description: "Find your moment of calm with acupuncture, sound and mindful practices.",
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
    <html lang="no">
      <body className="antialiased">
        <I18nProvider>
          <Navigation />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
