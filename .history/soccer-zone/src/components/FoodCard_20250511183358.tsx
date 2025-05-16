import React from "react";
import Scake from "../assets/images/Crispy-Salmon-Cake.jpg.jpeg"

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="border  rounded p-4 shadow-md max-w-sm">
      {image && <img src={Scake} alt={name} className="w-full h-48 object-cover rounded mb-4" />}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default FoodCard;
