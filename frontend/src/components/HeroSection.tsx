import Image from "next/image";
import { zapfino } from "@/app/fonts";
/**
 * Hero Section
 * @param title - The title of the hero section
 * @param subtitle - The subtitle of the hero section
 * @returns
 */
export default function HeroSection({
  title,
  subtitle,
  desktopImage = "hero-desktop.jpg",
  mobileImage = "hero-mobile.jpg",
}: {
  title: string;
  subtitle: string;
  desktopImage?: string;
  mobileImage?: string;
}): JSX.Element {
  return (
    <section className="relative h-[70vh] flex md:items-center items-start pl-16 lg:pl-0 md:pl-8 pt-12 md:pt-0 lg:pt-0">
      {/* Two alternative images for the hero section - one for desktop and one for mobile */}
      <HeroImage
        src={`/images/${desktopImage}`}
        className="hidden md:block z-0"
      />
      <HeroImage src={`/images/${mobileImage}`} className="md:hidden z-0" />

      <DarkOverlay />

      <HeroText title={title} subtitle={subtitle} />
    </section>
  );
}

function HeroImage({
  src,
  className,
}: {
  src: string;
  className: string;
}): JSX.Element {
  return (
    <Image
      src={src}
      alt="Close-up of a dandelion seed head with delicate white fibers against a blurred green background."
      fill
      priority
      sizes="(max-width: 768px) 100vw, 70vw"
      className={`object-cover ${className} object-top`}
    />
  );
}

/**
 * A semi-transparent background for mobile to make the text more readable.
 * @returns
 */
function DarkOverlay(): JSX.Element {
  return <div className="absolute inset-0 bg-black/50 z-[1]" />;
}

function HeroText({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="container mx-auto z-10 pt-0 md:-mt-80 lg:-mt-0">
      <div className="max-w-2xl text-accent">
        <h1 className={`sm:text-6xl text-4xl italic mb-4`}>{title}</h1>
        <p
          className={`sm:text-2xl text-lg sm:pt-12 pt-4 leading-loose ${zapfino.className}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
