import Banner from "../../components/Banner/Banner";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import HotDeal from "../../components/HotDeal/HotDeal";
import OurShop from "../../components/OurShop/OurShop";
import ProductBrands from "../../components/ProductBrands/ProductBrands";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
   return (
      <div className="bg-white">
         <div className="">
            <Banner></Banner>
            <HotDeal></HotDeal>
            <ProductBrands></ProductBrands>
            <OurShop></OurShop>
            <ExtraSection></ExtraSection>
            <Testimonials></Testimonials>
         </div>
      </div>
   );
};

export default Home;