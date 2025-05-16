import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DrinkList from "../components/DrinkList";
import Bg from "../assets/svg/bg.png"

const foodSections = [
  {
    title: "Signature cocktails",
    items: [
      { name: "Jungle Heaven", description: "Bourbon whiskey base cocktail with plantain, banana sesame syrup and lemon juice.", price: 12200 },
      { name: "Basil Berry", description: "Gin and basil berry mixture.", price: 12200 },
      { name: "Humming Bird", description: "Rum base cocktail with simple syrup,apple puree, honey, lemon juice and ginger syrup.", price: 12200 },
      { name: "Garden Spri", description: "A vibrant combination of yam fingers, fried plantain, chicken suya, peppered chicken wings, peppered snails, and peppered gizzards, served with a tangy chili red sauce for dipping.", price: 28200 },
    ], 
  }, 
  {
  title: "tiki signature",
  items: [
    { name: "Chiken Caesar Salad", description: "A classic favorite, featuring crisp lettuce tossed in a rich Caesar dressing, topped with tender grilled chicken breast, crispy beef bacon, golden croutons, and freshly grated parmesan cheese.", price: 15800 },
    { name: "Seafood Salad", description: "A refreshing blend of mixed greens and boiled potato cubes, accompanied by crab stick, tender calamari,baby octopus and baby prawns. Special seafood dressing.", price: 19200 },
    { name: "Tropical Salad", description: "A refreshing blend of avocado, mango, apple, mixed greens, potatoes, blueberries, and black sesame. Drizzled with honey mustard dressing.", price: 16200 },
    { name: "Mix Fried Cheese Salad", description: "Crispy fried cheese paired with mixed greens, mango, almond sticks, blueberries, and beetroot. Served with a tangy balsamic dressing.", price: 15800 },
  ],
},
  {
  title: "cocktails",
  items: [
    { name: "Classic Burder", description: "Grilled Premium Angus beef, cheddar cheese, grilled onions, sautéed mushrooms, tomato, iceberg lettuce, pickles, and our signature cocktail sauce.", price: 18600 },
    { name: "Grilled Chicken Burger", description: "Marinated grilled chicken breast served with a rich mayo BBQ sauce, creamy aioli, avocado, sundried tomato, rocket leaves, and pickles for a delightful taste.", price: 15600 },
    { name: "Philly Steak Sandwich", description: "Tender Philly steak paired with red and yellow peppers, onions, creamy guacamole, and a blend of mixed cheeses.", price: 21200 },
    { name: "Sport Zone Burger", description: "A juicy, grilled Premium Angus beef patty topped with cheddar cheese, caramelized onions, crispy beef bacon, iceberg lettuce, tomato, pickles, and a signature cocktail sauce", price: 21000 },
    { name: "Truflle Burger", description: "A succulent beef patty topped with creamy truffle sauce and parmesan cheese, creating a rich and indulgent burger experience.", price: 24000 },
  ],
},

  
];

const DrinksMenu = () => {
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
        <h1 className=" font-semibold text-primary flex justify-center text-[70px] mt-[10rem] text-center ">Drinks Menu</h1>
      </div>
      <div className="p-[40px] bg-secondary my-[50px] w-[90%] bg-[#fcedda] m-auto space-y-12 rounded-2xl ">
        {foodSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-primary uppercase text-[40px] flex  justify-center font-bold mb-6 border-b-4 border-dashed border-gray-600 pb-2">
              {section.title}
            </h2>
            <div className="">
              {section.items.map((item) => (
                <DrinkList
                
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

export default DrinksMenu;
