/* eslint-disable react/jsx-no-comment-textnodes */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProduct = () => {
   const { user } = useContext(AuthContext)
   const userEmail = user.email;

   const handleAddProduct = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;
      const price = form.price.value;
      const description = form.description.value;
      const image = form.image.value;
      const rating = form.rating.value;
      const products = { name, brand, type, price, description, rating, image, userEmail }
      console.log(products)
      if (rating > 5) {
         alert('Rating Must be Equal or less than 5')
         return
      }

      fetch('http://localhost:5000/products', {
         method: "POST",
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(products)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.insertedId) {
               alert('Product added Successfully')
            }
         })
   }
   const signle = ("'")

   return (
      <div className="" style={{ backgroundImage: 'url(https://i.ibb.co/nj8qHzT/layout-cosmetic-makeup-beauty-pr.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         <div id="NewRootRoot" className="flex flex-col w-[95vw] xl:w-[60vw] mx-auto shadow-2xl drop-shadow-2xl bg-transparent py-16">
            <div className="bg-white bg-opacity-90 flex flex-col justify-center gap-8 items-center xl:px-[100px] py-16 rounded">
               <div className="relative flex flex-col items-start">
                  <div className="text-center text-5xl font-['Rancho'] text-[#374151] top-0 left-0 h-12 w-96">Add New Product</div>
               </div>
               <div className="text-center text-sm font-['Raleway'] leading-[30px] text-[rgba(27,_26,_26,_0.7)] w-full xl:w-5/6">
                  <p>
                     Welcome to our Add Product page, where you can showcase the latest additions to our beauty and cosmetic collection. This is your opportunity to introduce new and exciting products to our valued customers.
                  </p>
               </div>
               <form onSubmit={handleAddProduct} className="self-stretch flex flex-col justify-between gap-6 lg:px-5">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Name</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full pl-3 h-full" type="text" name="name" placeholder="Enter Product name" id="" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Brand Name</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           {/* <input className="w-full pl-3 h-full" type="text" name="brand" placeholder="Enter Brand Name" id="" /> */}
                           <select className="w-full" id="brand" name="brand">
                              <option value="">Select One</option>
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
                              <option value="">Select One</option>
                              <option value="skin-care">SKIN CARE</option>
                              <option value="eye-palettes">EYE PALETTES</option>
                              <option value="fragrance">FRAGRANCE</option>
                           </select>
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Price</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full pl-3 h-full" type="number" name="price" placeholder="Enter Product Price" id="" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Short Description</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full pl-3 h-full" type="text" name="description" placeholder="Enter Short Description" id="" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 w-[80vw] mx-auto xl:w-1/2 items-start">
                        <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Rating</div>
                        <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                           <input className="w-full h-full pl-3" type="number" name="rating" placeholder="Enter Product Rating" id="" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-4 w-[80vw] mx-auto lg:w-full items-start">
                     <div className="text-xl font-['Raleway'] font-semibold leading-[30px] text-[rgba(27,_26,_26,_0.8)]">Product Image</div>
                     <div className="bg-white self-stretch flex flex-col justify-center h-12 shrink-0 items-start rounded">
                        <input type="text" name="image" placeholder="Enter Image URL" id="" className="w-full h-full pl-3" />
                     </div>
                  </div>
                  <div className="border-solid border-[#ff3ef2] bg-[#f22ffc] flex flex-col justify-center w-[80vw] lg:w-full mx-auto h-12 shrink-0 items-center border-2 rounded">
                     <input className="h-full text-2xl text-white cursor-pointer" type="submit" value="Add Product" />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddProduct;