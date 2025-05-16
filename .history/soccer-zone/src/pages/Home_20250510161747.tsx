import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Bg from "../assets/svg/bg.png";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    
     <div className="bg-black">
<Layout
      navbar={<Navbar onButtonClick={() => navigate(APP_ROUTES.MENU)} buttonText="Menu" />}
      footer={<Footer/>}
      
    ></Layout>
     </div>
    
  );
};

export default Home;
