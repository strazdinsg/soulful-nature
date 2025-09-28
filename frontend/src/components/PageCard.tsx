import Card from "./Card";
import SmallVerticalSpacer from "./SmallVerticalSpacer";
import PageImage from "./PageImage";
import CardHeading from "./CardHeading";

export default function PageCard({
  name,
  altName,
  imgSrc,
  description,
  url,
  moreLinkTitle,
}: {
  name: string;
  altName: string;
  imgSrc: string;
  description: string;
  url: string;
  moreLinkTitle: string;
}): JSX.Element {
  return (
    <Card clickUrl={url}>
      <div className="flex flex-col md:flex-row md:h-72">
        <div className="md:w-72">
          <PageImage imgSrc={imgSrc} altText={altName} />
        </div>
        <div className="flex-1">
          <PageDescription
            name={name}
            description={description}
            showLearnMore={!!url}
            moreLinkTitle={moreLinkTitle}
          />
        </div>
      </div>
    </Card>
  );
}

function PageDescription({
  name,
  description,
  showLearnMore,
  moreLinkTitle,
}: {
  name: string;
  description: string;
  showLearnMore: boolean;
  moreLinkTitle: string;
}): JSX.Element {
  return (
    <div className="p-6 h-full flex flex-col justify-center">
      <CardHeading title={name} />
      <p className="text-gray-600">{description}</p>
      {showLearnMore && (
        <>
          <SmallVerticalSpacer />
          <LearnMoreButton moreLinkTitle={moreLinkTitle} />
        </>
      )}
    </div>
  );
}

function LearnMoreButton({
  moreLinkTitle,
}: {
  moreLinkTitle: string;
}): JSX.Element {
  return <span className="text-blue-600 hover:underline">{moreLinkTitle}</span>;
}
