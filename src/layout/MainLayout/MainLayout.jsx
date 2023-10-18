import { Outlet } from "react-router-dom";
import Navber from "../../components/Navber/Navber";
import Footer from "../../components/Footer/Footer";
import CopyRight from "../../components/Footer/CopyRight";

const MainLayout = () => {
   return (
      <div>
         <Navber></Navber>
         <Outlet></Outlet>
         <div style={{ backgroundImage: 'url(https://i.ibb.co/RB1zrhK/cosmico-footer-bg.webp)' }} className="border-t">
            <Footer></Footer>
            <CopyRight></CopyRight>
         </div>
      </div>
   );
};

export default MainLayout;