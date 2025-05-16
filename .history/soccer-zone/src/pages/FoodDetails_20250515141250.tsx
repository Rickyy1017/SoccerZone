import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { starters, salads } from "../utils/foodData";

const FoodDetails = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Find food in starters or salads
  const food = starters.find(item => item.name === name);
  const category = food ? "starters" : "salads";
  const foodItem = food || salads.find(item => item.name === name);

  if (!name || !foodItem) {
    return (
      <div className="p-4">
        <h2>Food details not found.</h2>
      </div>
    );
  }

  
  const relatedProducts = (category === "starters"
    ? starters.filter(item => item.name !== foodItem.name)
    : salads.filter(item => item.name !== foodItem.name)).slice(0, 4);

  const increment = () => setQuantity(q => q +1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const addToCart = () => {
    
    alert(`Added ${quantity} x ${foodItem.name} to cart.`);
  };
 
  return (
    
  );
};

export default FoodDetails;
