import { useParams } from "react-router-dom";

const foodDetailsData: Record<string, { description: string; price: number }> = {
  "Spring Rolls": {
    description: "Crispy spring rolls filled with a savory vegetable mixture, accompanied by soy and sweet chili sauce",
    price: 11800,
  },
  "Chicken Wings": {
    description: "Seasoned chicken wings, fried to perfection, with your choice of BBQ or chili sauce.",
    price: 11800,
  },
};

const FoodDetails = () => {
  const { name } = useParams<{ name: string }>();

  if (!name || !(name in foodDetailsData)) {
    return (
      <div className="p-4">
        <h2>Food details not found.</h2>
      </div>
    );
  }

  const food = foodDetailsData[name];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <p className="mb-4">{food.description}</p>
      <p className="font-mono font-bold">₦{food.price.toLocaleString()}</p>
    </div>
  );
};

export default FoodDetails;
