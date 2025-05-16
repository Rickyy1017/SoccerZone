import React from "react";

interface FoodListItemProps {
  name: string;
  description: string;
  price: number;
}

const FoodListItem: React.FC<FoodListItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between border-b border-dashed border-gray-400 py-2">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
      <div className="font-mono font-bold">₦{price.toFixed(2)}</div>
    </div>
  );
};

export default FoodList;
