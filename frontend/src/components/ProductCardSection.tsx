import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import Section from "./Section";
import MediumVerticalSpacer from "./MediumVerticalSpacer";

export default function ProductCardsSection(): JSX.Element {
  return (
    <Section mobileHorPad={false}>
      <MediumVerticalSpacer />
      <div className="flex flex-wrap gap-16 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <MediumVerticalSpacer />
    </Section>
  );
}
