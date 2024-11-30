import ClickableCard from "./ClickableCard";
import Card from "./Card";
import SmallVerticalSpacer from "./SmallVerticalSpacer";
import ProductImage from "./ProductImage";
import CardHeading from "./CardHeading";

export default function ProductCard({
  name,
  altName,
  imgSrc,
  description,
  url,
}: {
  name: string;
  altName: string;
  imgSrc: string;
  description: string;
  url?: string;
}): JSX.Element {
  if (url) {
    return (
      <ClickableCard url={url}>
        <ProductImage imgSrc={imgSrc} altText={altName} />
        <ProductDescription
          name={name}
          description={description}
          showLearnMore={true}
        />
      </ClickableCard>
    );
  } else {
    return (
      <Card>
        <ProductImage imgSrc={imgSrc} altText={altName} />
        <ProductDescription
          name={name}
          description={description}
          showLearnMore={false}
        />
      </Card>
    );
  }
}

function ProductDescription({
  name,
  description,
  showLearnMore,
}: {
  name: string;
  description: string;
  showLearnMore: boolean;
}): JSX.Element {
  return (
    <div className="p-6">
      <CardHeading title={name} />
      <p className="text-gray-600">{description}</p>
      {showLearnMore && (
        <>
          <SmallVerticalSpacer />
          <LearnMoreButton />
        </>
      )}
    </div>
  );
}

function LearnMoreButton(): JSX.Element {
  return <span className="text-blue-600 hover:underline">Learn more</span>;
}
