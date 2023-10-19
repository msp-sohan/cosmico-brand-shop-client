import Banner from "../../components/Banner/Banner";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import HotDeal from "../../components/HotDeal/HotDeal";
import OurShop from "../../components/OurShop/OurShop";
import ProductBrands from "../../components/ProductBrands/ProductBrands";


const Home = () => {
   return (
      <div className="min-h-screen">
         <div className="">
            <Banner></Banner>
            <HotDeal></HotDeal>
            <ProductBrands></ProductBrands>
            <OurShop></OurShop>
            <ExtraSection></ExtraSection>
         </div>
      </div>
   );
};

export default Home;