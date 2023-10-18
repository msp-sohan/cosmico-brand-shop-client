import { FaRegCopyright } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CopyRight = () => {
   return (
      <div className=''>
         <div className='flex flex-col lg:flex-row justify-between items-center container mx-auto py-4 lg:px-5 xl:px-0'>
            <div className='flex'>
               <FaRegCopyright className='mt-1 mr-2'></FaRegCopyright>
               <p>2023 <span><Link to="/" className='hover:text-yellow-600'>Cosmico.</Link></span></p>
               <p className='pl-2'> All rights reserved.</p>
            </div>
            <div className='lg:flex gap-4 items-center hidden'>
               <Link to="#" className='hover:text-yellow-600'>Privacy Policy</Link>
               <BsDot/>
               <Link to="#" className='hover:text-yellow-600'>Terms</Link>
               <BsDot />
               <Link to="#" className='hover:text-yellow-600'>Faq</Link>
            </div>
         </div>
      </div>
   );
};

export default CopyRight;