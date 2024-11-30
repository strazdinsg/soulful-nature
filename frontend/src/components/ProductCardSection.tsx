import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import Section from "./Section";
import MediumVerticalSpacer from "./MediumVerticalSpacer";

export default function ProductCardsSection(): JSX.Element {
  return (
    <Section>
      <MediumVerticalSpacer />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <MediumVerticalSpacer />
    </Section>
  );
}
