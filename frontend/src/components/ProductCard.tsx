import Image from "next/image";

export default function ProductCard({
  id,
  name,
  altName,
  imgSrc,
  description,
}: {
  id: number;
  name: string;
  altName: string;
  imgSrc: string;
  description: string;
}): JSX.Element {
  return (
    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
      </div>
    </div>
  );
}
