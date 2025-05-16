import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { starters, salads } from "../utils/foodData";
import Layout from "../components/Layout";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FoodDetails = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

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
    <Layout
    navbar={
      <Navbar
        onButtonClick={() => navigate(APP_ROUTES.HOME)}
        buttonText="Menu"
      />
    }
    footer={<Footer />}
  >
  <div className="p-4  bg-accent-d text-white mx-auto">
        <div className="bg-secondary p-8 ">
        <img src={foodItem.image} alt={foodItem.name} className="w-full h-auto rounded-lg mb-4" />
        <h1 className="text-4xl text-primary font-bold mb-2">{foodItem.name}</h1>
        <p className="mb-2  ">Category: <span className="text-primary cursor-pointer " >  {category} </span> </p>
        <p className="mb-4">{foodItem.description}</p>
        <p className="font-mono font-bold mb-4">₦{foodItem.price.toLocaleString()}</p>
  
        <div className="flex items-center mb-4 space-x-4">
          <button onClick={decrement} className="px-3 py-1 bg-black text-primary  rounded">-</button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={increment} className="px-3 py-1 bg-black text-primary rounded">+</button>
        </div>
  
        <button onClick={addToCart} className="bg-primary text-white px-6 py-2 rounded hover:bg-black mb-6">
          Add to Cart
        </button>
        </div>
  
        <h2 className="text-2xl font-bold text-primary mb-4">Related Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {relatedProducts.map(item => (
            <div 
              key={item.name}
              onClick={() => {
                navigate(`/FoodDetails/${item.name}`);
              }}
              className="cursor-pointer rounded p-2 hover:shadow-2xl  transition-all duration-300 ease-in-out "
            >
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover  rounded mb-2" />
              <p className="font-semibold text-primary ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
  </Layout>
  );
};

export default FoodDetails;
