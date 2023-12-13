import { useContext, useEffect, useState } from "react";
import { FaUserTie } from 'react-icons/fa';
import { MdDarkMode, MdDashboard, MdOutlineLogout } from 'react-icons/md';
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import userPic from "../../assets/user.png";


const Navber = () => {
   const { user, logOut } = useContext(AuthContext)
   const [dropdown, setDropdown] = useState(false)
   const [menu, setMenu] = useState(false)
   const navigate = useNavigate()

   const handleDropdown = () => {
      setDropdown(!dropdown)
   }
   const handleLogOut = () => {
      logOut()
         .then(() => {
            Swal.fire("Successfully Logout")
            navigate("/login")
         })
         .catch(error => {
            Swal.fire(error.message)
         })
   }
   const [theme, setTheme] = useState("light");
   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);

   const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
   };

   const navlinks = <>
      <NavLink onClick={() => { setMenu(false) }} to="/" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl mx-3 rounded-none "}>Home
      </NavLink>
      {/* <NavLink onClick={() => { setMenu(false) }} to="/addproduct" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl  mx-3 rounded-none"}>Add Product
      </NavLink> */}
      <NavLink onClick={() => { setMenu(false) }} to="/about" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl  mx-3 rounded-none "}>About Us
      </NavLink>
      <NavLink onClick={() => { setMenu(false) }} to="/contact" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl  mx-3 rounded-none "}>Contact Us
      </NavLink>
      {/* <NavLink to="/login" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl  mx-3 rounded-none "}>Login
      </NavLink> */}
      <NavLink onClick={() => { setMenu(false) }} to="/mycart" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#f22ffc]  text-[#f22ffc] text-xl mx-3  rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-[#f22ffc]  text-white text-xl mx-3 rounded-none "}>My Cart
      </NavLink>

   </>

   return (
      <div className="w-full bg-[#e29070] dark:bg-gray-900 bg-opacity-70">
         <div className="navbar bg-opacity-20 container mx-auto">
            <div className="navbar-start">
               {/* Dropdown Menu */}
               <div className="dropdown z-20">
                  <label onClick={() => setMenu(!menu)} tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 font-semibold dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </label>
                  {
                     menu && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0a4275] rounded-box bg-opacity-50 w-52">
                        {navlinks}
                     </ul>
                  }
               </div>
               <Link to="/" className="btn btn-ghost normal-case text-white text-xl ">
                  <img className="w-10 " src="https://i.ibb.co/2N3fKwV/3.png" alt="" />
                  <h3 className="font-sans text-2xl">Cosmico</h3>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navlinks}
               </ul>
            </div>
            <div className="navbar-end">
               <div className="flex justify-center items-center mr-5">
                  <button className="bg-gray-200 p-2 dark:bg-gray-600  rounded-3xl" onClick={handleThemeSwitch}>
                     <MdDarkMode className="text-2xl dark:text-white"></MdDarkMode>
                  </button>
               </div>
               <div>
                  {
                     user?.email ? <button onClick={handleDropdown}><img className="w-10 h-10 right-0 btn-circle" src={user?.photoURL ? user.photoURL : userPic}></img></button> : <Link to='/login' className="hover:btn-ghost font-serif hover:text-white hover:border-b-2 hover:border-b-[#FFD9B7] text-xl text-white font-bold p-2 rounded-md ">Login</Link>
                  }
                  {
                     user &&
                     <div className={`absolute bg-sky-200 py-2 z-40 rounded top-16 right-5 ${dropdown ? "" : "hidden"}`}>
                        <h2 className="text-lg px-2 flex items-center gap-4"><FaUserTie></FaUserTie>{user?.displayName ? user?.displayName : user?.email}</h2>
                        <Link to="/dashboard" className="text-lg px-2 flex items-center gap-4 mt-2 py-1 rounded hover:bg-[#e29070] hover:text-white"><MdDashboard />Dashboard</Link>
                        <hr className="border-b-2 border-b-black my-2" />
                        <button onClick={handleLogOut} className="text-lg px-2 py-1 rounded flex items-center w-full gap-4 hover:bg-[#e29070] hover:text-white"><MdOutlineLogout></MdOutlineLogout>Log Out</button>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navber;