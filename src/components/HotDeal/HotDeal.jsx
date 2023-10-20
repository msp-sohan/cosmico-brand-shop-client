import Marquee from "react-fast-marquee";
import { RxDot } from 'react-icons/rx';

const HotDeal = () => {
   return (
      <div className="bg-pink-50 dark:bg-gray-900">
         <Marquee>
            <div className="flex items-center gap-8 text-2xl py-3 dark:text-white">
               <p className="flex items-center"><RxDot></RxDot>Every Friday big sales! -40%</p>
               <p className="flex items-center"><RxDot></RxDot>Buy three items get one free!</p>
               <p className="flex items-center"><RxDot></RxDot>Every Friday big sales! -40%</p>
               <p className="flex items-center"><RxDot></RxDot>Buy three items get one free!</p>
               <p className="flex items-center"><RxDot></RxDot>Every Friday big sales! -40%</p>
               <p className="flex items-center pr-10"><RxDot></RxDot>Buy three items get one free!</p>
            </div>
         </Marquee>
      </div>
   );
};

export default HotDeal;