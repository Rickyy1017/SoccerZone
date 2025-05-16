import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";

const starters = [
  {
    name: "Bruschetta",
    description: "Grilled bread topped with fresh tomatoes, garlic, and basil.",
    price: 6.99,
    image: "/src/assets/images/Bruschetta.jpg",
  },
  {
    name: "Stuffed Mushrooms",
    description: "Mushrooms stuffed with cheese and herbs, baked to perfection.",
    price: 7.99,
    image: "/src/assets/images/Stuffed-Mushrooms.jpg",
  },
  {
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs.",
    price: 4.99,
    image: "/src/assets/images/Garlic-Bread.jpg",
  },
];

const FoodMenu = () => {
  const navigate = useNavigate();

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
      <div className="p-4 flex fl md:grid-cols-3 gap-6">
        {starters.map((item) => (
          <FoodCard
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default FoodMenu;
