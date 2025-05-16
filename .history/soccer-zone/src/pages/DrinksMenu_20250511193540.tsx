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
  title: "cocktails",
  items: [
    { name: "exotic wine", description: "Our special wine mixture with tropical fruits.", price: 11200 },
    { name: "tropical negroni", description: "Our special wine mixture with tropical fruits.", price: 11200 },
    { name: "tiramissu espresso matini", description: "Vodka and baileys base cocktail with amaretto, coffee liquor and espresso.", price: 11200 },
    { name: "raspberry moscow mule", description: "Vodka base cocktail with raspberry, lemon juice, mint leaves, ginger syrup and soda water.", price: 11200 },
    { name: "apple pie", description: "Bourbon whiskey base cocktail with apple puree, lemon juice, simple and cinamon syrup.", price: 11200 },
    { name: "sunset vibes", description: "Gin, vodka and spiced rum base cocktail with peach syrup, pomegranate syrup, fresh strawberry , lemon and orange juice", price: 11200 },
    { name: "peach paloma", description: "Tequila base cocktail with aperol, lemon juice, simple syrup, peach syrup and orange juice.", price: 11200 },
    { name: "blue hawaii", description: "Rum base cocktail with pineapple, coconut and blue curacao.", price: 11200 },
    { name: "king mash", description: "Bourbon whiskey base cocktail with ginger syrup, mint leaves, simple syrup and lemon juice", price: 11200 },
    { name: "sweet lady", description: "Rum base cocktail with passion fruit, simple syrup and lemon juice.", price: 11200 },
    { name: "pornstar martini", description: "Vanilla flavored vodka, with passion fruit and lime juice, served with prosecco shot.", price: 11200 },
    { name: "daiquiri", description: "Your choice of strawberry, lemon or passion fruit.", price: 11200 },
    { name: "margarita", description: "Your choice of strawberry, lemon or passion fruit.", price: 11200 },
    { name: "mojito", description: "Your choice of classic, strawebrry, raspberry, watermelon or passion fruit.", price: 11200 },
    { name: "long island", description: "Gin, tequila, vodka, rum, triple sec, with lemon juice, topped with coke.", price: 11200 },
    { name: "", description: "", price: 11200 },
  ],
},
{
  title: "mocktails",
  items: [
    
  ]
}


  
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
