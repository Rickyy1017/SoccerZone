import React from "react";

interface FoodListItemProps {
  name: string;
  description: string;
  price: number;
}

const formatNaira = (amount: number) => {
  return "₦" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const DrinkList: React.FC<FoodListItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between border-b   border-dashed border-[#006837] p-4 my-6">
      <div>
        <div className="font-semibold text-[25px]  py-[10px] cursor-pointer">{name}</div>
        <div className="text-[15px] text-primary">{description}</div>
      </div>
      <div className="font-bold">{formatNaira(price)}</div>
    </div>
  );
};

export default DrinkList;
