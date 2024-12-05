import Image from "next/image";

/**
 * A product image.
 * @param imgSrc - The source of the image.
 * @param altText - The alternative text of the image.
 * @returns The ProductImage component.
 */
export default function ProductImage({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}): JSX.Element {
  return (
    <Image
      src={`/images/products/${imgSrc}`}
      alt={altText}
      width={400}
      height={300}
      className="w-full h-60 object-cover"
    />
  );
}
