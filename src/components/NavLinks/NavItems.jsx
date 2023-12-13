import { NavLink } from 'react-router-dom'

const NavItems = ({ label, address, icon: Icon }) => {
   return (
      <NavLink to={address} end className={({ isActive }) =>
         `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? ' relative px-4 py-3 flex items-center space-x-4 rounded-lg hover:bg-gradient-to-r hover:to-sky-600 hover:from-cyan-400 text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ' px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group'}`}>
         <Icon className='w-5 h-5' />
         <span className='mx-4 font-medium'>{label}</span>
      </NavLink>
   )
}

export default NavItems