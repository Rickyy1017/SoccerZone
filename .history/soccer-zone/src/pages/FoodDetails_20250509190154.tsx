import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { foodId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Details for: {foodId}</h1>
    </div>
  );
};

export default FoodDetails;
