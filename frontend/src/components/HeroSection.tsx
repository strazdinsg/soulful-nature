import Image from "next/image"

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

      <DarkOverlayForMobile />

      <div className="container mx-auto px-4 z-10 pt-16 md:pt-0">
        <div className="max-w-2xl text-accent">
          <h1 className="md:text-6xl text-5xl mb-4">Soulful Nature</h1>
          <p className="md:text-2xl text-xl">Where bond with nature matters</p>
        </div>
      </div>
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
      layout="fill"
      objectFit="cover"
      className={className}
    />
  )
}

/**
 * A semi-transparent background for mobile to make the text more readable.
 * @returns
 */
function DarkOverlayForMobile(): JSX.Element {
  return (
    <div className="absolute inset-0 bg-black/70 md:bg-transparent z-[1]" />
  )
}
