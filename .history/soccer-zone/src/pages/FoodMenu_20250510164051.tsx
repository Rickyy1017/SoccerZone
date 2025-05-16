import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes/AppRoutes";


const FoodMenu = () => {
    return (
      <Layout navbar={
          <Navbar
            onButtonClick={() => navigate(APP_ROUTES.HOME)}
            buttonText="Menu"
          />
        }
        footer={<Footer />}>
        <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Our Menu</h2>
       <div>ao\mv;opmazsovm;</div>
      </div>
      </Layout>
    );
  };
  
  export default FoodMenu;
  