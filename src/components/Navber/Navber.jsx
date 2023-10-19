import { useContext, useState } from "react";
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { Link, NavLink, useNavigate } from "react-router-dom";
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
            alert("Successfully Logout")
            navigate("/login")
         })
         .catch(error => {
            alert(error.message)
         })
   }

   const navlinks = <>
      <NavLink onClick={() => { setMenu(false) }} to="/" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl mx-3 rounded-none "}>Home
      </NavLink>
      <NavLink onClick={() => { setMenu(false) }} to="/addproduct" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none"}>Add Product
      </NavLink>
      {/* <NavLink onClick={() => { setMenu(false) }} to="/about" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>About Us
      </NavLink>
      <NavLink onClick={() => { setMenu(false) }} to="/contact" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>Contact Us
      </NavLink> */}
      {/* <NavLink to="/login" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-red-500  text-red-500 text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>Login
      </NavLink> */}
      <NavLink onClick={() => { setMenu(false) }} to="/mycart" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl mx-3  rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl mx-3 rounded-none "}>My Cart
      </NavLink>

   </>

   return (
      <div className="w-full bg-green-900 bg-opacity-70">
         <div className="navbar bg-opacity-20 container mx-auto">
            <div className="navbar-start">
               {/* Dropdown Menu */}
               <div className="dropdown z-20">
                  <label onClick={() => setMenu(!menu)} tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <h3>Cosmic</h3>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navlinks}
               </ul>
            </div>
            <div className="navbar-end">
               {
                  user?.email ? <button onClick={handleDropdown}><img className="w-10 h-10 right-0 btn-circle" src={user?.photoURL ? user.photoURL : userPic}></img></button> : <Link to='/login' className="hover:btn-ghost hover:text-[#f8c89d] hover:border-b-2 hover:border-b-[#FFD9B7] text-xl text-white font-semibold p-2 rounded-md ">Login</Link>
               }
               {
                  user && <div className={`absolute bg-sky-200 p-2 rounded top-16 ${dropdown ? "" : "hidden"}`}>
                     <h2 className="text-lg flex items-center gap-4"><FaUserTie></FaUserTie>{user?.displayName ? user?.displayName : user?.email}</h2>
                     <hr className="border-b-2 border-b-black my-2" />
                     <button onClick={handleLogOut} className="text-lg flex items-center gap-4"><MdOutlineLogout></MdOutlineLogout>Log Out</button>
                  </div>
               }
            </div>
         </div>
      </div>
   );
};

export default Navber;