import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import DrinksMenu from "../pages/DrinksMenu";
import FoodDetails from "../pages/FoodDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food-menu" element={<FoodMenu />} />
      <Route path="/drinks-menu" element={<DrinksMenu />} />
      <Route path="/food-details/:name" element={<FoodDetails />} />
    </Routes>
  );
};

export default AppRoutes;
