import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import FoodMenu from "./pages/FoodMenu";
import DrinksMenu from "./pages/DrinksMenu";
import FoodDetails from "../src/pages/FoodDetails";
import { APP_ROUTES } from "../src/routes/AppRoutes";
import QrScanner from "./components/QrScanner";
import './index.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.FOOD} element={<FoodMenu />} />
        <Route path={APP_ROUTES.DRINKS} element={<DrinksMenu />} />
        <Route path={APP_ROUTES.DETAILS} element={<FoodDetails />} />
        <Route path="/qr-scanner" element={<QrScanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
