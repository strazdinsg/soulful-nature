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
      <div className="flex flex-col md:flex-row md:min-h-80 lg:min-h-80 xl:min-h-[432px]">
        <div className="md:w-72 lg:w-80 xl:w-[432px] shrink-0">
          <PageImage imgSrc={imgSrc} altText={altName} />
        </div>
        <div className="flex-1 min-w-0">
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
    <div className="p-6 lg:p-9 h-full flex flex-col justify-center min-w-0">
      <CardHeading title={name} />
      <p className="text-gray-600 text-sm lg:text-base xl:text-lg break-words">
        {description}
      </p>
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
    <span className="text-green-600 hover:underline text-sm lg:text-base xl:text-lg">
      {moreLinkTitle}
    </span>
  );
}
