import Image from "next/image";

type CardProps = {
  title: string;
  subtitle: string;
  price: string;
  payment: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
};

export default function Card({
  title,
  subtitle,
  price,
  payment,
  image,
  bedrooms,
  bathrooms,
  area,
}: CardProps) {
  return (
    <div className="card border rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="relative">
        <Image
          src={image ? image : "http://localhost:3000/public/apartment_placeholder.jpg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-40 object-cover"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-sm font-bold rounded">
          Delivery 2029
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
        <div className="flex items-center justify-between text-sm mt-3">
          <span>🛏 {bedrooms} Beds</span>
          <span>🛁 {bathrooms} Baths</span>
          <span>📏 {area} m²</span>
        </div>
        <div className="mt-3">
          <p className="text-gray-600 text-sm">{payment}</p>
          <p className="text-blue-600 font-bold text-lg">{price}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Call Us</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">WhatsApp</button>
        </div>
      </div>
    </div>
  );
}
