import React from "react";
interface FoodListItemProps {
  name: string;
  description: string;
  price: number;
  details?: (name: string) => void;
}

const formatNaira = (amount: number) => {
  return "₦" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FoodList: React.FC<FoodListItemProps> = ({
  name,
  description,
  details,
  price,
}) => {
  const handleClick = () => {
    if (details) {
      details(name);
    }
  };

  return (
    <div className="flex justify-between border-b border-dashed border-[#006837] p-4 my-4">
      <div className="flex flex-col justify-between">
};

export default FoodList;
