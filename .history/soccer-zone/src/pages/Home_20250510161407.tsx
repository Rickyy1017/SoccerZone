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
    <Layout
      navbar={<Navbar onButtonClick={() => navigate(APP_ROUTES.MENU)} buttonText="Menu" />}
      footer={<Footer/>}
    >
      <div
        className="h-screen  m-auto bg-secondary-d flex  flex-col items-center justify-center align-middle "
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div data-aos="fade-zoom-in" className="flex justify-center mb-[3rem]  w-[100%]">
         
        </div>

        <div className="text-center text-primary sm:max-w-[40%] ">
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
          <Button onClick={() => navigate(APP_ROUTES.MENU) } >
            Food Menu
          </Button>
          <Button onClick={() => navigate(APP_ROUTES.MENU)}>
            Drink Menu
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
