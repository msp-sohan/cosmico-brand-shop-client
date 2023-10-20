import { BsDot } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';
import { IoArrowUp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const CopyRight = () => {
   const goToTop = () => window.scrollTo(0, 0)
   return (
      <div className='dark:bg-gray-700 dark:text-white relative'>
         <div className='flex flex-col lg:flex-row justify-between items-center container mx-auto py-4 lg:px-5 xl:px-0'>
            <div className='flex'>
               <FaRegCopyright className='mt-1 mr-2'></FaRegCopyright>
               <p>2023 <span><Link to="/" className='hover:text-yellow-600'>Cosmico.</Link></span></p>
               <p className='pl-2'> All rights reserved.</p>
            </div>
            <div className='lg:flex gap-4 items-center hidden'>
               <Link to="#" className='hover:text-yellow-600'>Privacy Policy</Link>
               <BsDot />
               <Link to="#" className='hover:text-yellow-600'>Terms</Link>
               <BsDot />
               <Link to="#" className='hover:text-yellow-600'>Faq</Link>
            </div>
         </div>
         <div><button onClick={goToTop} className='absolute bottom-3 bg-gray-200 dark:bg-black p-2 hover:text-pink-500 hover:font-bold rounded-full right-5'><IoArrowUp></IoArrowUp></button></div>
      </div>
   );
};

export default CopyRight;