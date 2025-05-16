import { useParams } from "react-router-dom";
import { starters, salads } from "../utils/foodData";

const FoodDetails = () => {
  const { name } = useParams<{ name: string }>();

  // Search in starters first, then in salads if not found
  const food = starters.find(item => item.name === name) || salads.find(item => item.name === name);

  if (!name || !food) {
    return (
      <div className="p-4">
        <h2>Food details not found.</h2>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img src={food.image} alt={food.name} className="w-full h-auto rounded-lg mb-4" />
      <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
      <p className="mb-4">{food.description}</p>
      <p className="font-mono font-bold">₦{food.price.toLocaleString()}</p>
    </div>
};

export default FoodDetails;
