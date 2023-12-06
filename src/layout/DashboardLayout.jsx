import { FaHome, FaUserCog } from "react-icons/fa";
import { MdAnalytics, MdOutlineAddToPhotos } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItems from "../components/NavLinks/NavItems";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const DashboardLayout = () => {
   const { user } = useContext(AuthContext)
   const admin = user?.email === 'devsohanbd@gmail.com'

   return (
      <>
         <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               {/* Page content here */}
               {/* ============== Navbar ================ */}
               <div className="bg-gray-300">
                  <div className="navbar bg-gray-300 fixed z-10 pr:5 lg:pr-20 mx-auto">
                     <div className="navbar-start">
                        <div className="dropdown">
                           <label htmlFor="my-drawer-2" className="lg:hidden"><RxHamburgerMenu className="text-2xl rounded-full hover:bg-gray-300" /></label>
                        </div>

                     </div>

                     <div className="navbar-end z-50">
                        <img src="https://i.ibb.co/6v6Dvr3/user.png" alt="" className="w-14 h-14 rounded-full bg-slate-300" />
                     </div>
                  </div>
               </div>
               {/* ============== Navbar ================== */}
               <div className="px-2">
                  <Outlet />
               </div>
            </div>
            <div className="drawer-side h-screen border-4 border-black">
               <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay h-screen"></label>
               <ul className="menu p-4 w-72 h-screen bg-gray-900 bg-opacity-90 text-white text-xl pt-[72px]">
                  {/* Sidebar content here */}
                  {/* Admin */}
                  {
                     admin && <>
                        <NavItems label="Dashboard" address="/dashboard" icon={FaHome} />
                        <NavItems label="Manage Product" address="/dashboard/manage-product" icon={MdAnalytics} />
                        <NavItems label="Add Poduct" address="/dashboard/add-product" icon={MdOutlineAddToPhotos} />
                        <NavItems label="Manage User" address="/dashboard/manage-user" icon={FaUserCog} />
                     </>
                  }
                  {/* User */}
                  {
                     !admin && <>
                        <NavItems label="Dashboard" address="/dashboard" icon={FaHome} />
                        <NavItems label="Shoping Cart" address="/dashboard/sopping-cart" icon={MdAnalytics} />
                        <NavItems label="Add Poduct" address="/dashboard/payment" icon={MdOutlineAddToPhotos} />
                     </>
                  }
                  {/* Common */}
                  <hr className="divide-y-2" />
                  <NavItems label="Home" address="/" icon={FaHome} />
               </ul>
            </div>
         </div>
      </>
   );
};

export default DashboardLayout;
