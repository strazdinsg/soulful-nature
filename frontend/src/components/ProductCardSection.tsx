import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Cacao Circle",
    altName: "",
    imgSrc: "/cacao-circle.jpg",
    description:
      "Step into the Cacao Circle—where ceremonial cacao, meditation, and mindful connection invite relaxation, self-awareness, and a sense of belonging.",
  },
  {
    id: 2,
    name: "Footprints of Happiness",
    altName: "Footprints of Happiness",
    imgSrc: "/footprints.jpg",
    description:
      "Explore life’s happiest moments through inspiring stories. Footprints of Happiness dives into joy, memories, and what truly fulfills us.",
  },
  {
    id: 3,
    name: "Soulful Creations",
    altName: "Soulful Creations",
    imgSrc: "/soulful-creations.jpg",
    description:
      "Discover Soulful Creations: handmade beeswax candles, pearl crowns, and unique pieces crafted with intention, adding warmth, charm, and joy to life.",
  },
]

export default function ProductCardsSection(): JSX.Element {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
