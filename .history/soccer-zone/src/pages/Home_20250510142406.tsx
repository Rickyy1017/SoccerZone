import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Logo from "../assets/svg/soccer zone.png";
import Bg from "../assets/svg/bg.png";

const Home = () => {
  const navigate = useNavigate();

  return (
   <div >
     <div
      className="p-4  max-w-xl mx-auto bg-secondary-d  h-screen "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex justify-center">
        <img src={Logo} alt="" className="w-[70px] j" />
      </div>

      <div>
        <h1>Welcome To Soccer Zone</h1>
      </div>

      <button
        onClick={() => navigate(APP_ROUTES.MENU)}
        className="bg-secondary-light text-white px-4 py-2 rounded"
      >
        View Menu
      </button>
    </div>
   </div>
  );
};

export default Home;
