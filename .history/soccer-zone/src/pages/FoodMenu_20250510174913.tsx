import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";

const foodSections = [
  {
    title: "Starters",
    items: [
      { name: "Bruschetta", description: "Grilled bread with tomatoes", price: 6.99 },
      { name: "Stuffed Mushrooms", description: "Cheese and herbs stuffed mushrooms", price: 7.99 },
      { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.99 },
      { name: "Spring Rolls", description: "Crispy vegetable spring rolls", price: 5.99 },
      { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 8.99 },
      { name: "Mozzarella Sticks", description: "Fried mozzarella cheese sticks", price: 6.49 },
      { name: "Onion Rings", description: "Crispy fried onion rings", price: 5.49 },
      { name: "Deviled Eggs", description: "Classic deviled eggs", price: 4.99 },
      { name: "Caprese Salad", description: "Tomato, mozzarella, basil", price: 7.49 },
      { name: "Calamari", description: "Fried squid rings", price: 9.99 },
      { name: "Potato Skins", description: "Loaded potato skins", price: 6.99 },
      { name: "Nachos", description: "Tortilla chips with cheese and jalapenos", price: 7.99 },
      { name: "Meatballs", description: "Italian style meatballs", price: 8.49 },
      { name: "Shrimp Cocktail", description: "Chilled shrimp with cocktail sauce", price: 10.99 },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "Caesar Salad", description: "Romaine lettuce with Caesar dressing", price: 7.99 },
      { name: "Greek Salad", description: "Tomatoes, cucumbers, olives, feta", price: 8.49 },
      { name: "Garden Salad", description: "Mixed greens with vinaigrette", price: 6.99 },
      { name: "Pasta Salad", description: "Cold pasta with veggies and dressing", price: 7.49 },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Classic Burger", description: "Beef patty with lettuce and tomato", price: 9.99 },
      { name: "Cheeseburger", description: "Beef patty with cheese", price: 10.49 },
      { name: "Bacon Burger", description: "Beef patty with bacon", price: 11.49 },
      { name: "Veggie Burger", description: "Grilled veggie patty", price: 9.49 },
      { name: "Mushroom Swiss Burger", description: "Beef patty with mushrooms and Swiss cheese", price: 11.99 },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Spaghetti Bolognese", description: "Spaghetti with meat sauce", price: 12.99 },
      { name: "Fettuccine Alfredo", description: "Fettuccine with creamy Alfredo sauce", price: 13.49 },
      { name: "Penne Arrabbiata", description: "Penne pasta with spicy tomato sauce", price: 11.99 },
      { name: "Lasagna", description: "Layered pasta with meat and cheese", price: 14.99 },
      { name: "Ravioli", description: "Stuffed pasta with cheese", price: 13.99 },
    ],
  },
  {
    title: "Nigerian",
    items: [
      { name: "Jollof Rice", description: "Spicy tomato rice", price: 10.99 },
      { name: "Egusi Soup", description: "Melon seed soup", price: 12.99 },
      { name: "Pounded Yam", description: "Mashed yam", price: 9.99 },
      { name: "Suya", description: "Spicy grilled meat skewers", price: 11.49 },
      { name: "Moi Moi", description: "Steamed bean pudding", price: 8.99 },
      { name: "Fried Plantain", description: "Sweet fried plantains", price: 6.99 },
      { name: "Pepper Soup", description: "Spicy meat soup", price: 12.49 },
      { name: "Bitterleaf Soup", description: "Traditional vegetable soup", price: 13.49 },
    ],
  },
  {
    title: "Main Dishes",
    items: [
      { name: "Grilled Chicken", description: "Marinated grilled chicken", price: 14.99 },
      { name: "Beef Steak", description: "Grilled beef steak", price: 19.99 },
      { name: "Roast Lamb", description: "Slow roasted lamb", price: 21.99 },
      { name: "Fish and Chips", description: "Fried fish with fries", price: 13.99 },
      { name: "Pork Chops", description: "Grilled pork chops", price: 15.99 },
      { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 12.99 },
      { name: "Chicken Curry", description: "Spicy chicken curry", price: 14.49 },
      { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 16.99 },
      { name: "Lamb Chops", description: "Grilled lamb chops", price: 22.49 },
      { name: "Seafood Paella", description: "Spanish rice with seafood", price: 18.99 },
      { name: "Vegetable Stir Fry", description: "Mixed veggies stir fried", price: 11.99 },
      { name: "Chicken Alfredo", description: "Pasta with chicken and Alfredo sauce", price: 15.49 },
      { name: "BBQ Ribs", description: "Barbecue pork ribs", price: 17.99 },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "French Fries", description: "Crispy fried potatoes", price: 3.99 },
      { name: "Mashed Potatoes", description: "Creamy mashed potatoes", price: 4.49 },
      { name: "Coleslaw", description: "Cabbage salad with dressing", price: 3.49 },
      { name: "Steamed Vegetables", description: "Mixed steamed veggies", price: 4.99 },
      { name: "Onion Rings", description: "Fried onion rings", price: 3.99 },
      { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.49 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Cheesecake", description: "Creamy cheesecake", price: 6.99 },
      { name: "Chocolate Cake", description: "Rich chocolate cake", price: 6.49 },
      { name: "Ice Cream", description: "Vanilla ice cream scoop", price: 4.99 },
    ],
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
      <div className="p-4 space-y-12">
        {foodSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <FoodCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
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
