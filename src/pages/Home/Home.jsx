import Banner from "../../components/Banner/Banner";
import HotDeal from "../../components/HotDeal/HotDeal";


const Home = () => {
   return (
      <div className="min-h-screen">
         <div className="">
            <Banner></Banner>
            <HotDeal></HotDeal>
         </div>
      </div>
   );
};

export default Home;