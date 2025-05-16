import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
interface FoodListItemProps {
  name: string;
  description: string;
  price: number;
}

const handleDetails = () => {
     navigator(APP_ROUTES.HOME)
};

const formatNaira = (amount: number) => {
  return "₦" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FoodList: React.FC<FoodListItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between border-b   border-dashed border-[#006837] p-4 my-6">
      <div>
        <div onClick={(handleDetails)} className="font-semibold text-[25px] capitalize py-[10px] cursor-pointer">{name}</div>
        <div className="text-[18px] text-primary">{description}</div>
      </div>
      <div className="font-mono font-bold">{formatNaira(price)}</div>
    </div>
  );
};

export default FoodList;
