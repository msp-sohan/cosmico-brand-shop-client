import { BsClock, BsTelephoneForward } from 'react-icons/bs';
import { GrMailOption } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";



const Footer = () => {
   return (
      <div className='dark:bg-gray-900 dark:text-white'>
         <div className="container mx-auto py-12 lg:py-5 bg-transparent dark:bg-gray-900">
            <div className="flex text-xl flex-wrap justify-center items-center gap-6 lg:gap-4 py-6 px-2 dark:text-yellow-300 text-yellow-700 bg-gray-200 bg-opacity-30">
               <Link to="/" className="hover:border-b-2 hover:border-yellow-700 hover:pb-[1px] pb-[3px]">About US</Link>
               {/* <BsDot className="sm:hidden md:hidden"/> */}
               <Link to="/" className="hover:border-b-2 hover:border-yellow-700 hover:pb-[1px] pb-[3px]">Our Team</Link>
               {/* <BsDot className="sm:hidden md:hidden"/> */}
               <Link to="/" className="hover:border-b-2 hover:border-yellow-700 hover:pb-[1px] pb-[3px]">Faq</Link>
               {/* <BsDot className="sm:hidden md:hidden"/> */}
               <Link to="/" className="hover:border-b-2 hover:border-yellow-700 hover:pb-[1px] pb-[3px] hidden">Maintanance Mode</Link>
               {/* <BsDot className="sm:hidden md:hidden"/> */}
               <Link to="/" className="hover:border-b-2 hover:border-yellow-700 hover:pb-[1px] pb-[3px]">Contact</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between items-center px-5 text-lg">
               <div className="order-2 lg:order-1 py-12 lg:py-0">
                  <p className="flex items-center gap-6"><BsTelephoneForward /><span>+123 456 7890</span></p>
                  <p className="flex items-center gap-6"><IoLocationOutline /><span>Level-4, 34, Awal Centre, Banani, Dhaka</span></p>
                  <p className="flex items-center gap-6"><GrMailOption className='' /><span>info@cosmico.com</span></p>
                  <p className="flex items-center gap-6"><BsClock /><span>Mon-Fri: 10:00 - 18:00</span></p>
               </div>
               <div className="order-3 md:order-1 lg:order-2">
                  <h2 className="text-center text-3xl font-semibold text-yellow-600 pb-3">COSMICO</h2>
                  <SocialIcon></SocialIcon>
               </div>
               <div className="text-center lg:text-right lg:w-[360px] w-full mt-5 order-1 md:order-3 lg:order-3 md:col-span-4 ">
                  <p>Our formulas are made with natural, organic, and cruelty-free ingredients that are gentle, effective, and good for you and the environment.</p>
                  <Link to="/"><button className="btn btn-ghost">Read More</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;