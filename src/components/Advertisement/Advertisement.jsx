import Marquee from "react-fast-marquee";

const Advertisement = ({ brandMatch }) => {

   return (
      <div className="container mx-auto dark:bg-gray-800">
         <div className="flex justify-center gap-10 my-12">
            <Marquee>
               {
                  brandMatch?.map(advertise =>
                     <div key={advertise._id} className="flex ml-32">
                        <img className="w-[300px] 2xl:w-[380px] h-[300px]" src={advertise.adImage} alt="" />
                     </div>
                  )
               }
            </Marquee>
         </div>
      </div>
   );
};

export default Advertisement;