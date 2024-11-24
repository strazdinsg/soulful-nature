import Image from "next/image";

export default function ProductCard({
  id,
  name,
  altName,
  imgSrc,
  description,
  url,
}: {
  id: number;
  name: string;
  altName: string;
  imgSrc: string;
  description: string;
  url: string;
}): JSX.Element {
  return (
    <a
      href={url}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Image
        src={imgSrc}
        alt={altName}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="h-2" />
        <span className="text-blue-600 hover:underline">Learn more</span>
      </div>
    </a>
  );
}
