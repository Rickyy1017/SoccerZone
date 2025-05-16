import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Logo from "../assets/svg/soccer zone.png"
import Bg from "../assets/svg/bg.png"


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4  max-w-xl mx-auto bg-primary-d " style={{ backgroundImage: `url(${Bg})` }}>
      <div className="" > 
        <img src={Logo} alt="" className="w-[30px] j" />

      </div>










      <button
        onClick={() => navigate(APP_ROUTES.MENU)}
        className="bg-secondary-light text-white px-4 py-2 rounded"
      >
        View Menu
      </button>
    </div>
  );
};

export default Home;
