import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductBrands = () => {
   const [brandName, setBrandName] = useState([])

   // const [allProduct, setAllProduct] = useState([])

   // const { user } = useContext(AuthContext)
   // console.log('Product Brand', user);
   // const navigate = useNavigate()


   useEffect(() => {
      fetch('https://b8a10-brandshop-server-side-mspsohan.vercel.app/products/brands')
         .then(res => res.json())
         .then(data => setBrandName(data))
   }, [])

   // useEffect(() => {
   //    fetch('https://b8a10-brandshop-server-side-mspsohan.vercel.app/products')
   //       .then(res => res.json())
   //       .then(data => setAllProduct(data))
   // }, [])

   // const signleProduct = allProduct.map(product => {
   //    return product
   // })
   // console.log(signleProduct, 'single')

   // const handleShowProduct = (brand) => {
   //    navigate(`/${brand}`)
   // }

   return (
      <div className="py-12 mb-12 container mx-auto px-3 xl:px-0">
         <div className="mb-20 bg-pink-100 py-2 dark:bg-gray-800">
            <h2 className="text-4xl font-semibold text-center pb-5 text-pink-500">Choose Your Brand</h2>
            <p className="text-center text-lg italic text-blue-700">Choosing Your Brand: A Deliberate Decision</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {
               brandName.map(brand =>
                  <Link to={`/products/${brand.brand}`} key={brand._id}>
                     <div className="container mx-auto relative cursor-pointer dark:bg-white">
                        <img className="w-full  h-[400px] hover:drop-shadow-2xl shadow-2xl object-fill hover:ease-linear rounded-md" src={brand.brandimage} alt="" />
                        <h4 className="text-2xl hover:bg-pink-800 p-2 bg-pink-500 mt-4 text-white bg-opacity-90 rounded-sm uppercase tracking-widest text-center">{brand.brand}</h4>
                     </div>
                  </Link>
               )
            }
         </div>
      </div>
   );
};

export default ProductBrands;