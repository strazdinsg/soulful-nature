import Card from "./Card";
import SmallVerticalSpacer from "./SmallVerticalSpacer";
import PageImage from "./PageImage";
import CardHeading from "./CardHeading";

export default function PageCard({
  translationKey,
  altName,
  imgSrc,
  url,
  t,
}: Readonly<{
  translationKey: string;
  altName: string;
  imgSrc: string;
  url: string;
  t: (key: string) => string;
}>): JSX.Element {
  const name = t(`pages.${translationKey}.name`);
  const description = t(`pages.${translationKey}.description`);
  const moreLinkTitle = t(`pages.${translationKey}.moreLinkTitle`);

  return (
    <Card clickUrl={url}>
      <div className="flex flex-col md:flex-row md:h-80 lg:h-[432px]">
        <div className="md:w-72 lg:w-[432px]">
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
}: Readonly<{
  name: string;
  description: string;
  showLearnMore: boolean;
  moreLinkTitle: string;
}>): JSX.Element {
  return (
    <div className="p-6 lg:p-9 h-full flex flex-col justify-center">
      <CardHeading title={name} />
      <p className="text-gray-600 lg:text-xl">{description}</p>
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
}: Readonly<{
  moreLinkTitle: string;
}>): JSX.Element {
  return (
    <span className="text-green-600 hover:underline lg:text-xl">
      {moreLinkTitle}
    </span>
  );
}
