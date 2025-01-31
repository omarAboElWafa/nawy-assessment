type CardProps = {
  title: string;
  subtitle: string;
  price: string;
  payment: string;
  image: string;
};

import Image from "next/image";

export default function Card({ title, subtitle, price, payment, image }: CardProps) {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card-image" width={500} height={300} />
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="price-info">
          <p>{payment}</p>
          <p className="price">{price}</p>
        </div>
        <div className="buttons">
          <button className="call-btn">Call Us</button>
          <button className="whatsapp-btn">WhatsApp</button>
        </div>
      </div>
    </div>
  );
}