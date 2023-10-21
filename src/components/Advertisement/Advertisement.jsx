// import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Advertisement = () => {
   const [advertisement, setAdvertisement] = useState([])

   useEffect(() => {
      fetch('https://b8a10-brandshop-server-side-mspsohan.vercel.app/advertisement')
         .then(res => res.json())
         .then(data => setAdvertisement(data))
   }, [])

   return (
      <div className="container mx-auto dark:bg-gray-800">
         <div className="flex justify-center gap-10 my-12">
            <Marquee>
               {
                  advertisement.map(advertise =>
                     <div key={advertise._id} className="flex ml-32">
                        <img className="w-[300px] 2xl:w-[380px] h-[300px]" src={advertise.image} alt="" />
                     </div>
                  )
               }
            </Marquee>
         </div>
         {/* <div className="flex justify-center gap-10 my-12">
            {
               advertisement.map(advertise =>
                  <div key={advertise._id} className="flex">
                     <img className="w-[25vw] h-[70%]" src={advertise.image} alt="" />
                  </div>
               )
            }
         </div> */}
      </div>
   );
};

export default Advertisement;