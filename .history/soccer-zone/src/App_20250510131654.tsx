import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import Layout from ""
import FoodDetails from "../src/pages/FoodDetails";
import { APP_ROUTES } from "../src/routes/AppRoutes";
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.MENU} element={<Menu />} />
        <Route path={APP_ROUTES.DETAILS} element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
