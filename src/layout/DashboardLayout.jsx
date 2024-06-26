import { FaHome, FaUserCog, FaUserTie } from "react-icons/fa";
import { MdAnalytics, MdDashboard, MdOutlineAddToPhotos, MdOutlineLogout } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavItems from "../components/NavLinks/NavItems";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import userPic from "../assets/user.png";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
   const { user, logOut } = useContext(AuthContext)
   const { data: role } = useRole()
   const admin = role === 'admin'

   const [open, setOpen] = useState(true)
   const [dropdown, setDropdown] = useState(false)
   const navigate = useNavigate()

   const handleDropdown = () => {
      setDropdown(!dropdown)
   }
   const handleLogOut = () => {
      logOut()
         .then(() => {
            Swal.fire("Successfully Logout")
            navigate("/")
         })
         .catch(error => {
            Swal.fire(error.message)
         })
   }
   return (
      <>
         <div className="bg-gray-200">
            <nav className="bg-gradient-to-r to-sky-600 from-cyan-400 border-b border-gray-300 fixed z-50 w-full">
               <div className="flex justify-between items-center px-5 overflow-hidden">
                  <button onClick={() => setOpen(!open)} id="menuBtn">
                     <TfiMenu className="text-2xl lg:hidden" />
                  </button>
                  <div className="ml-1">
                     <Link to="/" className="btn btn-ghost normal-case  text-xl py-2">
                        <img className="w-10 " src="https://i.ibb.co/2N3fKwV/3.png" alt="" />
                        <h3 className="font-sans text-2xl">Cosmico</h3>
                     </Link>
                  </div>
                  <div className="space-x-4 flex justify-center items-center">
                     {/* <button>
                        <FaBell />
                     </button> */}
                     {/* <button>
                        <FaUser />
                     </button> */}
                     <div>
                        {
                           user?.email ? <button onClick={handleDropdown}><img className="w-10 h-10 right-0 btn-circle" src={user?.photoURL ? user.photoURL : userPic}></img></button> : <Link to='/login' className="hover:btn-ghost font-serif hover:text-white hover:border-b-2 hover:border-b-[#FFD9B7] text-xl text-white font-bold p-2 rounded-md ">Login</Link>
                        }
                        {
                           user &&
                           <div className={`absolute bg-sky-200 py-2 z-40 rounded top-16 right-5 ${dropdown ? "" : "hidden"}`}>
                              <h2 className="text-lg px-2 flex items-center gap-4"><FaUserTie></FaUserTie>{user?.displayName ? user?.displayName : user?.email}</h2>
                              <Link to="/dashboard" className="text-lg px-2 flex items-center gap-4 rounded mt-2 py-1 hover:bg-[#e29070] hover:text-white"><MdDashboard />Dashboard</Link>
                              <hr className="border-b-2 border-b-black my-2" />
                              <button onClick={handleLogOut} className="text-lg px-2 py-1 rounded flex items-center w-full gap-4 hover:bg-[#e29070] hover:text-white"><MdOutlineLogout></MdOutlineLogout>Log Out</button>
                           </div>
                        }
                     </div>
                  </div>
               </div>
            </nav>

            <div id="sideNav" className={`lg:block ${open ? "" : 'hidden'} bg-white w-64 mt-[55px] h-screen z-50 fixed rounded-none border-none`}>
               <div className="p-4 space-y-4">
                  <ul className="menu">
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
                           <NavItems label="Shoping Cart" address="/dashboard/shopping-cart" icon={MdAnalytics} />
                           {/* <NavItems label="Payment History" address="/dashboard/payment" icon={MdOutlineAddToPhotos} /> */}
                        </>
                     }
                     {/* Common */}
                     <hr className="divide-y-4 border-2  mt-4" />
                     <NavItems label="Home" address="/" icon={FaHome} />
                  </ul>
               </div>
            </div>

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-16 mx-2">
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default DashboardLayout;
