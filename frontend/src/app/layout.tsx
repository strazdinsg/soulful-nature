import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soulful Nature",
  description: "Elevate your spirit with nature-inspired services, and soulful products at soulfulnature.no. Embark on a transformative journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
