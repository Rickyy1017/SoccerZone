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
    <div className="bg-secondary-d border-red-500 " style={{ backgroundImage: `url(${Bg})` }}>
      <Layout
        navbar={
          <Navbar
            onButtonClick={() => navigate(APP_ROUTES.HOME)}
            buttonText="Menu"
          />
        }
        footer={<Footer />}
      >
       
      </Layout>
    </div>
  );
};

export default FoodMenu;
