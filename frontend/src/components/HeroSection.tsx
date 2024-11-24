import Image from "next/image"
import { lemonTuesday, moontime } from "@/app/layout"
/**
 * Hero Section
 * @returns
 */
export default function HeroSection(): JSX.Element {
  return (
    <section className="relative h-[70vh] flex md:items-center items-start pt-16 md:pt-0">
      {/* Two alternative images for the hero section - one for desktop and one for mobile */}
      <HeroImage src="/hero-desktop.jpg" className="hidden md:block z-0" />
      <HeroImage src="/hero-mobile.jpg" className="md:hidden z-0" />

      <DarkOverlay />

      <HeroText />
    </section>
  )
}

function HeroImage({
  src,
  className,
}: {
  src: string
  className: string
}): JSX.Element {
  return (
    <Image
      src={src}
      alt="Close-up of a dandelion seed head with delicate white fibers against a blurred green background."
      fill
      className={`object-cover ${className}`}
    />
  )
}

/**
 * A semi-transparent background for mobile to make the text more readable.
 * @returns
 */
function DarkOverlay(): JSX.Element {
  return <div className="absolute inset-0 bg-black/70 md:bg-black/30 z-[1]" />;
}

function HeroText(): JSX.Element {
  return (
    <div className="container mx-auto px-4 z-10 pt-8 md:pt-0">
      <div className="max-w-2xl text-accent">
        <h1 className={`md:text-6xl text-4xl mb-4 ${lemonTuesday.className}`}>
          SOULFUL NATURE
        </h1>
        <p className={`md:text-5xl text-4xl ${moontime.className}`}>
          Where bond with nature matters...
        </p>
      </div>
    </div>
  )
}
