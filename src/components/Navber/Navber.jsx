import { NavLink } from "react-router-dom";


const Navber = () => {

   const navlinks = <>
      <NavLink  to="/" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl mx-3 rounded-none "}>Home
      </NavLink>
      <NavLink  to="/service" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none"}>Service
      </NavLink>
      <NavLink  to="/about" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>About Us
      </NavLink>
      <NavLink  to="/contact" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>Contact Us
      </NavLink>
      <NavLink to="/login" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-red-500  text-red-500 text-xl  mx-3 rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl  mx-3 rounded-none "}>Login
      </NavLink>
      <NavLink  to="/register" className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active hover:border-b-2 border-b-[#FFE17B]  text-[#FFE17B] text-xl mx-3  rounded-none font-semibold border-b-2" : "hover:border-b-2 border-b-red-500  text-white text-xl mx-3 rounded-none "}>Sign Up
      </NavLink>

   </>

   return (
      <div>
         <div className="navbar bg-transparent filter absolute">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu flex menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     
                        {navlinks}
                     
                  </ul>
               </div>
               <a className="btn btn-ghost normal-case text-xl text-white">Cosmic</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  
                     {navlinks}
                  
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
      </div>
   );
};

export default Navber;