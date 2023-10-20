

const ExtraSection = () => {
   return (
      <div className="px-3 container mx-auto my-20">
         <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* 1 */}
            <div className="relative col-span-3">
               <img className="h-[200px] lg:h-[280px] xl:h-[320px] w-full" src="https://i.ibb.co/rycdRZm/luchiana-2608921661.webp" alt="" />
               <div className="absolute left-4 top-[5%] lg:top-[60%] xl:top-16">
                  <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-600">WINTER SCINCARE</h3>
                  <p className="text-gray-500 md:text-[14px] lg:text-[16px] w-3/4 pt-3">Say goodbye to dry, flaky skin and hello to a healthy, glowing complexion all winter long.</p>
               </div>
            </div>
            {/* 2 */}
            <div className="relative col-span-2">
               <img className="h-[200px] lg:h-[280px] xl:h-[320px] w-full" src="https://i.ibb.co/Yjprxpn/luchiana-2616778057.webp" alt="" />
               <div className="absolute left-4 top-[5%] lg:top-[35%] lg:flex lg:flex-col lg:justify-center lg:items-center">
                  <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-600">OIL FOR SKIN</h3>
                  <p className="text-gray-500 md:text-[14px] lg:text-[16px] w-3/4 pt-3">Discover the power of natural oils for healthy, radiant skin.</p>
               </div>
            </div>
            {/* 3 */}
            <div className="relative col-span-2">
               <img className="h-[200px] lg:h-[280px] xl:h-[320px] w-full" src="https://i.ibb.co/zVQvyw5/luchiana-2608797287-1.jpg" alt="" />
               <div className="absolute left-4 lg:left-12 top-[5%] lg:top-[40%]">
                  <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-600">SALE 30% OFF</h3>
                  <p className="text-gray-500 md:text-[14px] lg:text-[16px] w-3/4 pt-3">Dont miss out on our limited-time sale!</p>
               </div>
            </div>
            {/* 4 */}
            <div className="relative col-span-3">
               <img className="h-[200px] lg:h-[280px] xl:h-[320px] w-full" src="https://i.ibb.co/THzkFX6/luchiana-2608626103.jpg" alt="" />
               <div className="absolute left-4 top-[50%] lg:top-[40%]">
                  <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-600">ANTI-AGE CREAMS</h3>
                  <p className="text-gray-500 md:text-[14px] lg:text-[16px] w-3/4 pt-3">Fight the signs of aging with our collection of powerful anti-age creams.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ExtraSection;