import React from "react";

interface DrinkListItemProps {
  name: string;
  description: string;
  price: number;
  details?: (name: string) => void;
}

const formatNaira = (amount: number) => {
  return "₦" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const DrinkList: React.FC<ListItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between border-b border-dashed border-[#006837] p-4 my-4">
      <div className="flex flex-col justify-between">
        <div className="capitalize py-[10px] flex justify-between items-center">
          <div
            onClick={handleClick}
            className="font-semibold text-[25px] cursor-pointer flex-grow"
          >
            {name}
          </div>
          <span className="font-bold">{formatNaira(price)}</span>
        </div>
        <div className="text-[15px] text-primary">{description}</div>
      </div>
    </div>
  );
};

export default DrinkList;
