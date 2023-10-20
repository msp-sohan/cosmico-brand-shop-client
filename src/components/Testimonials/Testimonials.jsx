import { useEffect, useState } from "react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./testimonial.css";


const Testimonials = () => {
   const [testimonials, setTestimonial] = useState([])
   useEffect(() => {
      fetch('https://cosmico-brand-shop-server-r36j3c39y-sohan-perves-projects.vercel.app/testimonial')
         .then(res => res.json())
         .then(data => setTestimonial(data))
   }, [])

   const breakpoints = {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 2
      }
   }

   return (
      <div className="bg-[#fbe7df] py-12">
         <div className="container mx-auto px-3 xl:px-16 overflow-hidden">
            <div className="text-center">
               <h2 className="text-xl text-red-500 uppercase tracking-[10px]">Our customer</h2>
               <h2 className="text-2xl lg:text-4xl py-3 pb-12 tracking-[10px] text-blue-800">
                  REVIEWS
               </h2>
            </div>
            <div className="">
               <Swiper
                  // slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  breakpoints={breakpoints}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper">
                  {
                     testimonials.map(testimonial => <SwiperSlide key={testimonial.id}>
                        <div className="shadow-2xl px-5 xl:px-10  rounded-lg h-full hover:bg-blue-50 py-14">
                           <p className="h-full md:h-full lg:h-48 xl:h-full"><q> {testimonial.message}</q></p>
                           <hr className="my-4" />
                           <div className="flex justify-center items-center gap-6 pt-6">

                              <div className="w-16 h-16">
                                 <img src={testimonial.image} alt="" className="rounded-full" />
                              </div>

                              <div>
                                 <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                                 <p className="text-[16px]">{testimonial.designation}</p>
                              </div>
                           </div>


                        </div>
                     </SwiperSlide>)
                  }
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
