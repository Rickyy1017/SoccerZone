import { useParams } from "react-router-dom";
import { starters } from "../utils/foodData";
import { salads } from "../utils/foodData";

const FoodDetails = () => {
  const { name } = useParams<{ name: string }>();

  const food = starters.find(item => item.name === name);
  const food = starters.find(item => item.name === name);

  if (!name || !food) {
    return (
      <div className="p-4">
        <h2>Food details not found.</h2>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
      <p className="mb-4">{food.description}</p>
      <p className="font-mono font-bold">₦{food.price.toLocaleString()}</p>
    </div>
  );
};

export default FoodDetails;
