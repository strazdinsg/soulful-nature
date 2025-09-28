import Image from "next/image";

/**
 * A product image.
 * @param imgSrc - The source of the image.
 * @param altText - The alternative text of the image.
 * @returns The ProductImage component.
 */
export default function PageImage({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}): JSX.Element {
  return (
    <Image
      src={`/images/pages/${imgSrc}`}
      alt={altText}
      width={300}
      height={300}
      className="w-full h-full object-cover"
    />
  );
}
