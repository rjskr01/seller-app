// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, quantity, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md col-span-3">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2">Quantity: {quantity}</p>
      <p className="mt-2 text-lg font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;