import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";
import Logo from "../assets/svg/soccer zone.png";
import Bg from "../assets/svg/bg.png";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black h-screen ">
      <div
        className="p-4  bg-secondary-d flex  flex-col items-center justify-center align-middle "
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="flex justify-center mb-[15rem]">
          <img src={Logo} alt="" className="w-[70px] j" />
        </div>

        <div className="text-center text-primary ">
          <h1 className="  font-semibold text-[40px] mb-7 ">
            Welcome To Soccer Zone
          </h1>
          <p className="font-semibold  text-[15px] min-w-full">
            Discover a delicious variety of food and drinks made with fresh
            ingredients just for you. <br /> Check out our menus to find your next
            favorite dish or drink.
          </p>
        </div>

       <div className="flex gap-6 mt-5">
         <Button onClick={() => navigate(APP_ROUTES.MENU)}>
          View Menu
        </Button>
        <Button onClick={() => navigate(APP_ROUTES.MENU)}>
          View Menu
        </Button>
       </div>
      </div>
    </div>
  );
};

export default Home;
