import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./banner.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };
   return (
      <div className="h-[180px] md:h-[280px] lg:h-[360px] xl:h-full">
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false
            }}
            pagination={{
               clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
         >
            <SwiperSlide>
               <img className="relative" src="https://i.ibb.co/h8ZqHhD/cosmico-banner-1.jpg" alt="" />
               <div className="absolute left-5 lg:left-20 xl:left-32 top-5 md:top-20 lg:top-[20%] xl:top-[25%] text-white">
                  <p className="text-sm lg:text-xl font-bold tracking-widest md:tracking-[5px] xl:tracking-[10px] text-left">Exclusive</p>
                  <h3 className="text-xl lg:text-5xl text-left py-3 lg:py-8  tracking-widest md:tracking-[10px] xl:tracking-[25px]">Pathecs <br /> Under Eye</h3>
                  <button className="hover:bg-slate-100 hover:text-black border p-1 rounded-md flex justify-start bg-transparent text-white">Explore</button>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <img className="relative" src="https://i.ibb.co/qnFbFSw/cosmico-banner-2.jpg" alt="" />
               <div className="absolute left-5 lg:left-20 xl:left-32 top-5 md:top-20 lg:top-[20%] xl:top-[25%] text-white">
                  <p className="text-sm lg:text-xl font-bold tracking-widest md:tracking-[5px] xl:tracking-[10px] text-left">skin package</p>
                  <h3 className="text-xl lg:text-5xl text-left py-3 lg:py-8  tracking-widest md:tracking-[10px] xl:tracking-[25px]">Daily <br /> Skincare </h3>
                  <button className="hover:bg-slate-100 hover:text-black border p-1 rounded-md flex justify-start bg-transparent text-white">Explore</button>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <img className="relative" src="https://i.ibb.co/6NL6XS1/cosmico-banner-4.jpg" alt="" />
               <div className="absolute left-5 lg:left-20 xl:left-32 top-5 md:top-20 lg:top-[20%] xl:top-[25%] text-white">
                  <p className="text-sm lg:text-xl font-bold tracking-widest md:tracking-[5px] xl:tracking-[10px] text-left">new product</p>
                  <h3 className="text-xl lg:text-5xl text-left py-3 lg:py-8  tracking-widest md:tracking-[10px] xl:tracking-[25px]">Nature <br /> Moisturizers</h3>
                  <button className="hover:bg-slate-100 hover:text-black border p-1 rounded-md flex justify-start bg-transparent text-white">Explore</button>
               </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
               <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="14"></circle>
               </svg>
               <span ref={progressContent}></span>
            </div>
         </Swiper>
      </div>
   );
};

export default Banner;