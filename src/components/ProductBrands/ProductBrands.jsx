import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductBrands = () => {
   const [brandName, setBrandName] = useState([])
   const {user} = useContext(AuthContext)
   console.log(user.email)

   useEffect(() => {
      fetch('http://localhost:5000/products/brands')
         .then(res => res.json())
         .then(data => setBrandName(data))
   }, [])

   const handleShowProduct = (brand) =>{
      console.log(brand)
   }

   return (
      <div className="bg-white py-12 container mx-auto px-3">
         <h2 className="text-3xl font-semibold text-center mb-10">Brand Products {brandName.length}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
               brandName.map(brand =>
                  <div onClick={()=>handleShowProduct(brand.brand)} className="container mx-auto relative cursor-pointer" key={brand._id}>
                     <img className="w-full  h-[400px] hover:drop-shadow-2xl shadow-2xl object-fill hover:ease-linear rounded-md" src={brand.brandimage} alt="" />
                     <h4 className="text-2xl hover:bg-pink-800 p-2 bg-pink-500 mt-4 text-white bg-opacity-90 rounded-sm uppercase tracking-widest text-center">{brand.brand}</h4>
                  </div>
               )
            }
         </div>
      </div>
   );
};

export default ProductBrands;