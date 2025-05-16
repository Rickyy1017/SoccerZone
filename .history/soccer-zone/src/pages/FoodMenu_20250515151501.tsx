import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodList from "../components/FoodList";
import Bg from "../assets/svg/bg.png";
import { salads, starters } from "../utils/foodData";

const foodSections = [
  {
    title: "Starters",
    items: starters,
  },
  {
    title: "Salads",
    items: salads,
  },
];

const FoodMenu = () => {
  const navigate = useNavigate();

  const handleDetails = (name: string) => {
    navigate(APP_ROUTES.DETAILS.replace(":name", encodeURIComponent(name)));
  };

  return (
    <div className="bg-secondary-d " style={{ backgroundImage: `url(${Bg})` }}>
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
          <h1 className=" bg-red-700 font-semibold text-primary flex justify-center text-[40px] mt-[5rem] text-center ">
            Food Menu
          </h1>
        </div>
        <div className="p-[10px] bg-secondary my-[50px] w-[90%] bg-[#fcedda] m-auto space-y-12 rounded-2xl ">
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
                    details={handleDetails}
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
