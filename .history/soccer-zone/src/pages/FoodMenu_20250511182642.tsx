import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodList from "../components/FoodList";
import Bg from "../assets/svg/bg.png"

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
      { name: "Naija Bites", description: "A vibrant combination of yam fingers, fried plantain, chicken suya, peppered chicken wings, peppered snails, and peppered gizzards, served with a tangy chili red sauce for dipping.", price: 28200 },
    ], 
  }, 
  {
  title: "Salads",
  items: [
    { name: "Chiken Caesar Salad", description: "A classic favorite, featuring crisp lettuce tossed in a rich Caesar dressing, topped with tender grilled chicken breast, crispy beef bacon, golden croutons, and freshly grated parmesan cheese.", price: 15800 },
    { name: "Seafood Salad", description: "A refreshing blend of mixed greens and boiled potato cubes, accompanied by crab stick, tender calamari,baby octopus and baby prawns. Special seafood dressing.", price: 19200 },
    { name: "Tropical Salad", description: "A refreshing blend of avocado, mango, apple, mixed greens, potatoes, blueberries, and black sesame. Drizzled with honey mustard dressing.", price: 16200 },
    { name: "Mix Fried Cheese Salad", description: "Crispy fried cheese paired with mixed greens, mango, almond sticks, blueberries, and beetroot. Served with a tangy balsamic dressing.", price: 15800 },
  ],
},
  {
  title: "Burgers & Sandwiches",
  items: [
    { name: "Classic Burder", description: "Grilled Premium Angus beef, cheddar cheese, grilled onions, sautéed mushrooms, tomato, iceberg lettuce, pickles, and our signature cocktail sauce.", price: 18600 },
    { name: "Seafood Salad", description: "Marinated grilled chicken breast served with a rich mayo BBQ sauce, creamy aioli, avocado, sundried tomato, rocket leaves, and pickles for a delightful taste.", price: 15600 },
    { name: "Tropical Salad", description: "A refreshing blend of avocado, mango, apple, mixed greens, potatoes, blueberries, and black sesame. Drizzled with honey mustard dressing.", price: 16200 },
    { name: "Mix Fried Cheese Salad", description: "Crispy fried cheese paired with mixed greens, mango, almond sticks, blueberries, and beetroot. Served with a tangy balsamic dressing.", price: 15800 },
  ],
},

  
];

const FoodMenu = () => {
  const navigate = useNavigate();

  return (
   <div className="bg-secondary-d" style={{ backgroundImage: `url(${Bg})` }}>
     <Layout
      navbar={
        <Navbar
          onButtonClick={() => navigate(APP_ROUTES.HOME)}
          buttonText="Menu"
        />
      }
      footer={<Footer />}
    >
      <div>
        <h1 className=" font-semibold text-primary flex justify-center text-[70px] mt-[10rem] text-center ">Food Menu</h1>
      </div>
      <div className="p-[40px] bg-secondary my-[50px] w-[90%] bg-[#fcedda] m-auto space-y-12 rounded-2xl ">
        {foodSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-primary text-[40px] flex  justify-center font-bold mb-6 border-b-4 border-dashed border-gray-600 pb-2">
              {section.title}
            </h2>
            <div className="">
              {section.items.map((item) => (
                <FoodList
                
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
   </div>
  );
};

export default FoodMenu;
