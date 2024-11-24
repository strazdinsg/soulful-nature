import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Soulful Nature",
  description:
    "Elevate your spirit with nature-inspired services, and soulful products at soulfulnature.no. " +
    "Embark on a transformative journey today.",
};

export const lemonTuesday = localFont({
  src: "../fonts/lemon_tuesday.otf",
  display: "swap",
});
export const moontime = localFont({
  src: "../fonts/moontime.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
