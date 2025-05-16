import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Logo from "../assets/svg/soccer zone.png"

const Home = () => {
  const navigate = useNavigate();
max-w-sm mx-auto
  return (
    <div className="p-4">
      <img src={Logo} alt="" />
      <button
        onClick={() => navigate(APP_ROUTES.MENU)}
        className="bg-secondary-dark text-white px-4 py-2 rounded"
      >
        View Menu
      </button>
    </div>
  );
};

export default Home;
