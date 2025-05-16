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
    <div className="flex justify-between border-b border-dashed border-[#006837] p-4 my-6">
      <div className="border flex flex-col justify-between ">
        <div className="capitalize py-[10px] flex  items-center  ">
          <div
            onClick={handleClick}
            className="font-semibold text-[25px] cursor-pointer"
          >
            {name}
          </div>
          <div className=" font-bold">{formatNaira(price)}</div>
        </div>
        <div className="text-[15px]   text-primary">{description}</div>
      </div>
    </div>
  );
};

export default FoodList;
