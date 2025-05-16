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
};

export default FoodList;
