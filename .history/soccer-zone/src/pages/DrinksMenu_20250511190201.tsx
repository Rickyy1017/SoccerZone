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
      { name: "Garden Spritz", description: "Gin base cocktail with elder flower syrup, lemon juice, mint leaves, topped with prosseco.", price: 12200 },
      { name: "Sport Spark", description: "Rum base cocktail with burbon infused coconut, cream, pineaple juice, lemon juice and coconut.", price: 13200 },
    ], 
  }, 
  {
  title: "tiki signature",
  items: [
    { name: "tiki garden", description: "Gin base cocktail with aperol, passion fruit, fluffy pineaple and lemon juice.", price: 12200 },
    { name: "zombie", description: "White, gold and spiced rum with lemon juice, cranberry juice, grenadine and cinamon syrup.", price: 12200 },
    { name: "tiki mainland", description: "Dark and white rum base cocktail with mango and banana pure with tropical juice.", price: 12200 },
  ],
},
  {
  title: "tiki signature",
  items: [
    { name: "", description: "Gce.", price: 12200 },
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
