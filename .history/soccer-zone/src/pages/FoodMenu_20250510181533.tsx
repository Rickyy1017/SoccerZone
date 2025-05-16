import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodListItem from "../components/FoodList";

const foodSections = [
  {
    title: "Starters",
    items: [
      { name: "Spring Rolls", description: "Crispy spring rolls filled with a savory vegetable mixture, accompanied by soy and sweet chili sauce", price: 11800 },
      { name: "Chicken Wings", description: "Seasoned chicken wings, fried to perfection, with your choice of BBQ or chili sauce.", price: 11800 },
      { name: "Fried Calamari", description: "Tender breaded calamari rings, served with a classic tartar sauce.", price: 13800 },
      { name: "Shrimp Coconut", description: "Golden breaded shrimp, fried and served with tartar sauce for a delightful dip.", price: 12800 },
      { name: "Taco Chicken", description: "Taco bread generously stuffed with a savory mixture of chicken, red and green bell peppers and topped with crispy onion", price: 13200 },
      { name: "Quesadillas ", description: "Flour tortillas stuffed with your choice of chicken or shrimp, combined with bell peppers, onions, and a blend of cheeses, served with guacamole and sour cream.", price: 18800 },
      { name: "Seafood Combo", description: "A delightful assortment of fried calamari, shrimp spring rolls, shrimp suya skewers, grouper sticks and salmon cake.", price: 32800 },
      { name: "Sport Zone Combo", description: "A generous combination of shrimp coconut, chicken wings, spring rolls, cheese balls, and yam fingers, served with cocktail, tartar, and chili red sauces.", price: 32800 },
      { name: "Grilled Suya Skewers", description: "Your choice of beef, chicken, or shrimp, marinated in suya spices and grilled, served with fresh tomato and onion.", price: 14200 },
      { name: "Truffle Fries", description: "Golden fries drizzled with a rich, creamy truffle sauce, topped with sautéed mushrooms, freshly grated Parmesan, and garnished with spring onions.", price: 11800 },
      { name: "Grouper Sticks", description: "Crispy fried grouper fish, served with a side of tartar sauce and a fresh wedge of lemon.", price: 12400 },
      { name: "Crispy Salmon Cake", description: "A flavorful mix of salmon, potato, ginger, onion, and mozzarella cheese, rolled and fried to perfection. Served with creamy white salmon sauce, red chili pepper sauce, a lemon wedge, and fresh spring onions.", price: 12200 },
      { name: "Mini Beef Burger", description: "A smaller version of our Classic Burger, featuring grilled Premium Angus beef, cheddar cheese, grilled onions, sautéed mushrooms, tomato, iceberg lettuce, pickles, and cocktail sauce.", price: 12800 },
      { name: "Shrimp Cocktail", description: "A vibrant combination of yam fingers, fried plantain, chicken suya, peppered chicken wings, peppered snails, and peppered gizzards, served with a tangy chili red sauce for dipping.", price: 28200 },
    ],
  },
  // ... other sections omitted for brevity
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
      <div className="p-4 space-y-12">
        {foodSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold mb-6 border-b-4 border-dashed border-gray-600 pb-2">
              {section.title}
            </h2>
            <div>
              {section.items.map((item) => (
                <FoodListItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default FoodMenu;
