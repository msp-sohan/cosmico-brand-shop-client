import Banner from "../../components/Banner/Banner";
import HotDeal from "../../components/HotDeal/HotDeal";
import ProductBrands from "../../components/ProductBrands/ProductBrands";


const Home = () => {
   return (
      <div className="min-h-screen">
         <div className="">
            <Banner></Banner>
            <HotDeal></HotDeal>
            <ProductBrands></ProductBrands>
         </div>
      </div>
   );
};

export default Home;