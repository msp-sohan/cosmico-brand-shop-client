import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useSingleProduct from "../../hooks/useSingleProduct";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const UpdateProduct = () => {
   const { id } = useParams()
   const { data: singleProduct, isLoading, refetch } = useSingleProduct(id)

   const handleUpdateProduct = async (e) => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;
      const price = parseInt(form.price.value);
      const image = form.image.value;
      const rating = form.rating.value;

      if (rating > 5) {
         Swal.fire('Rating Must be Equal or less than 5')
         return
      }

      const products = { name, brand, type, price, rating, image }


      const res = await axios.put(`https://cosmico-brand-shop-server.vercel.app/products/${id}`, products)
      if (res?.data?.modifiedCount) {
         Swal.fire('Product Updated Successfully')
         refetch()
      }
   }
   const signle = ("'")

   return (
      <div className="" style={{ backgroundImage: 'url(https://i.ibb.co/nj8qHzT/layout-cosmetic-makeup-beauty-pr.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         <div id="NewRootRoot" className="flex flex-col w-[95vw] xl:w-[60vw] mx-auto shadow-2xl drop-shadow-2xl bg-transparent py-16">
            <div className="bg-white bg-opacity-90 flex flex-col justify-center gap-8 items-center xl:px-[100px] py-16 rounded">
               <div className="relative flex flex-col items-start">
                  <div className="text-center text-2xl xl:text-5xl text-pink-500 font-['Rancho'] top-0 left-0"><span className="text-black">Update</span> <br />{singleProduct?.name.split(" ")[1]} {singleProduct?.name.split(" ")[2]}</div>
               </div>
               <div className="text-center text-sm font-['Raleway'] leading-[30px] text-[rgba(27,_26,_26,_0.7)] w-full xl:w-5/6">
                  <p>
                     Welcome to our Add Product page, where you can showcase the latest additions to our beauty and cosmetic collection. This is your opportunity to introduce new and exciting products to our valued customers.
                  </p>
               </div>
               <form onSubmit={handleUpdateProduct} className="self-stretch flex flex-col justify-between gap-6 lg:px-5">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Name</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full pl-3 h-full" type="text" name="name" defaultValue={singleProduct?.name} placeholder="Enter Product name" id="" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Brand Name</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           {/* <input className="w-full pl-3 h-full" type="text" name="brand" placeholder="Enter Brand Name" id="" /> */}
                           <select className="w-full" id="brand" name="brand">
                              <option defaultValue={singleProduct?.brand}>{singleProduct?.brand}</option>
                              <option value="L'Oreal">L{signle}Oreal</option>
                              <option value="Chanel">Chanel</option>
                              <option value="Urban Decay">Urban Decay</option>
                              <option value="Procter & Gamble">Procter & Gamble</option>
                              <option value="Revlon">Revlon</option>
                              <option value="Avon">Avon</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Type</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           {/* <input className="w-full pl-3 h-full" type="text" name="type" placeholder="Enter Product type" id="" /> */}
                           <select className="w-full" id="type" name="type">
                              <option defaultValue={singleProduct?.type}>{singleProduct?.type}</option>
                              <option value="skin-care">SKIN CARE</option>
                              <option value="eye-palettes">EYE PALETTES</option>
                              <option value="fragrance">FRAGRANCE</option>
                           </select>
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Price</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full pl-3 h-full" type="number" name="price" defaultValue={singleProduct?.price} placeholder="Enter Product Price" id="" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Image</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input type="text" name="image" defaultValue={singleProduct?.image} placeholder="Enter Image URL" id="" className="w-full h-full pl-3" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Rating</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full h-full pl-3" type="number" name="rating" defaultValue={singleProduct?.rating} placeholder="Enter Product Rating" id="" />
                        </div>
                     </div>
                  </div>
                  <div className="border-solid border-[#ff3ef2] bg-[#f22ffc] flex flex-col justify-center w-[80vw] lg:w-full mx-auto h-12 shrink-0 items-center border-2 rounded">
                     <button className="h-full text-2xl w-full text-white cursor-pointer" type="submit">
                        {isLoading ? <FaSpinner className="animate-spin" /> : "Update Product"}
                     </button>
                  </div>
               </form>
            </div>
         </div >
      </div >
   );
};

export default UpdateProduct;