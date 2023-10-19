// import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Advertisement = () => {
   const [advertisement, setAdvertisement] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/advertisement')
      .then(res=>res.json())
      .then(data=>setAdvertisement(data))
   },[])

   return (
      <div className="container mx-auto">
         <div className="flex justify-center gap-10 my-12">
            <Marquee>
            {
               advertisement.map(advertise =>
                     <div key={advertise._id} className="flex ml-32">
                        <img className="w-[25vw] h-[300px]" src={advertise.image} alt="" />
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