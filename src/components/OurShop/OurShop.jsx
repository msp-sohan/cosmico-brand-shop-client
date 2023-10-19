import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ShopSlick from "./ShopSlick";
import "./ourshop.css";

const OurShop = () => {
   const [OurShop, setOurShop] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data => setOurShop(data))
   }, [])

   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <div className="bg-white overflow-hidden">
         <h4 className="text-xl text-center tracking-[15px] uppercase">Our Shop</h4>
         <h2 className="text-5xl uppercase tracking-[10px] mt-6 mb-12 text-center">Product</h2>
         <div>
            <div className="container mx-auto">
               <Slider {...settings}>
                  {
                     OurShop.map(shopData => <ShopSlick key={shopData._id} shopData={shopData}></ShopSlick>)
                  }
               </Slider>
            </div>
         </div>
      </div>
   );
};

export default OurShop;
