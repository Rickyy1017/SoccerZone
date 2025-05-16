import React from "react";

interface FoodListItemProps {
  name: string;
  description: string;
  price: number;
}

const formatNaira = (amount: number) => {
  return "₦" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FoodList: React.FC<FoodListItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between border-b border-2 py-6 border-dashed border-[#006837] py-2">
      <div>
        <div className="font-semibold text-[20px] py-[10px] cursor-pointer">{name}</div>
        <div className="text-[15px] text-primary">{description}</div>
      </div>
      <div className="font-mono font-bold">{formatNaira(price)}</div>
    </div>
  );
};

export default FoodList;
