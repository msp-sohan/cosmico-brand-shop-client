import { Outlet } from "react-router-dom";
import Navber from "../../components/Navber/Navber";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
   return (
      <div>
         <Navber></Navber>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;