import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductBrands = () => {
   const [brandName, setBrandName] = useState([])
   const [allProduct, setAllProduct] = useState([])
   const { user } = useContext(AuthContext)
   console.log('Product Brand', user);
   const navigate = useNavigate()


   useEffect(() => {
      fetch('http://localhost:5000/products/brands')
         .then(res => res.json())
         .then(data => setBrandName(data))
   }, [])

   useEffect(() => {
      fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data => setAllProduct(data))
   }, [])

   const signleProduct = allProduct.map(product => {
      return product
   })
   console.log(signleProduct, 'single')

   const handleShowProduct = (brand) => {
      navigate(`/${brand}`)
   }

   return (
      <div className="bg-white py-12 container mx-auto px-3 xl:px-0">
         <h2 className="text-3xl font-semibold text-center mb-10">Brand Products</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
               brandName.map(brand =>
                  <Link to={`/products/${brand.brand}`} key={brand._id}>
                     <div onClick={() => handleShowProduct(brand.brand)} className="container mx-auto relative cursor-pointer">
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