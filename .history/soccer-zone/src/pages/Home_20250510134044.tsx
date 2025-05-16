import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Logo from "../assets/svg/soccer zone.png"


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto">
            <img src={Logo} alt="" />
    </div>
  );
};

export default Home;
