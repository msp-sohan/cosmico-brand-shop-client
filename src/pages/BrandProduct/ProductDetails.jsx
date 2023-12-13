import { useContext, useState } from "react";
import Rating from "react-rating";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useSingleProduct from "../../hooks/useSingleProduct";
import useAxios from "../../hooks/useAxios";

const ProductDetails = () => {
   const { user } = useContext(AuthContext)
   const email = user?.email
   const axios = useAxios()
   let [qty, setQty] = useState(1)
   console.log(qty)
   const { id } = useParams()
   const { data: single } = useSingleProduct(id)
   const navigate = useNavigate()


   const handleAddCart = async (cart) => {
      const { brand, description, name, price, rating, type, image } = cart;
      const data = { brand, description, name, price, rating, type, image, email }
      const res = await axios.post("/mycart", data)
      if (res?.data?.insertedId) {
         Swal.fire('Add to Cart Seccessfully')
         navigate('/mycart')
      }
   }



   return (
      <>
         <div className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
               <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 ">
                     <div className="sticky top-0 z-50 overflow-hidden  border">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                           <img src={single?.image} alt="" className="object-cover w-full lg:h-full " />
                        </div>
                        <div className="flex-wrap hidden md:flex ">
                           <div className="w-1/2 p-2 sm:w-1/4">
                              <a href="" className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                 <img src={single?.image} alt="" className="object-cover w-full lg:h-20" />
                              </a>
                           </div>
                           <div className="w-1/2 p-2 sm:w-1/4">
                              <a href="" className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                 <img src={single?.image} alt="" className="object-cover w-full lg:h-20" />
                              </a>
                           </div>
                           <div className="w-1/2 p-2 sm:w-1/4">
                              <a href="" className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                 <img src={single?.image} alt="" className="object-cover w-full lg:h-20" />
                              </a>
                           </div>
                           <div className="w-1/2 p-2 sm:w-1/4">
                              <a href="" className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300 cursor-zoom-in">
                                 <img src={single?.image} alt="" className="object-cover w-full lg:h-20" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 ">
                     <div className="lg:pl-20">
                        <div className="mb-8 ">
                           <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                           <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                              {single?.name}</h2>
                           <div className="flex items-center mb-6">
                              <Rating
                                 initialRating={single?.rating}
                                 emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
                                 placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
                                 fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
                              />
                              <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                           </div>
                           <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                              {single?.longDescription}
                           </p>
                           <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                              <span>${single?.price}</span>
                              <span
                                 className="text-base font-normal text-gray-500 line-through dark:text-gray-400">${single?.price}</span>
                           </p>
                           <p className="text-green-600 dark:text-green-300 ">7 in stock</p>
                        </div>
                        {/* <div className="flex items-center mb-8">
                           <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                              Colors:</h2>
                           <div className="flex flex-wrap -mx-2 -mb-2">
                              <button
                                 className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                 <div className="w-6 h-6 bg-cyan-300"></div>
                              </button>
                              <button
                                 className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                 <div className="w-6 h-6 bg-green-300 "></div>
                              </button>
                              <button
                                 className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                 <div className="w-6 h-6 bg-red-200 "></div>
                              </button>
                           </div>
                        </div> */}
                        {/* <div className="flex items-center mb-8">
                           <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                              Size:</h2>
                           <div className="flex flex-wrap -mx-2 -mb-2">
                              <button
                                 className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                              </button>
                              <button
                                 className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                              </button>
                              <button
                                 className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                              </button>
                              <button
                                 className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                              </button>
                           </div>
                        </div> */}
                        <div className="w-32 mb-8 ">
                           <label htmlFor=""
                              className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                           <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                              <button onClick={() => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))}
                                 className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                 <span className="m-auto text-2xl font-thin">-</span>
                              </button>
                              <p type="number"
                                 className="flex items-center justify-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                              >{qty}</p>
                              <button onClick={() => setQty((prevQty) => (prevQty < 7 ? prevQty + 1 : 7))}
                                 className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                 <span className="m-auto text-2xl font-thin">+</span>
                              </button>
                           </div>
                        </div>
                        <div className="flex flex-wrap items-center -mx-4 ">
                           <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                              <button onClick={() => handleAddCart(single)}
                                 className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                 Add to Cart
                              </button>
                           </div>
                           <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                              {/* <button
                                 className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                 Add to wishlist
                              </button> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
      // <div>
      //    <div className="hero min-h-screen bg-base-20 overflow-hidden">
      //       <div className="hero-content flex-col lg:flex-row">
      //          <img src={single?.image} className="rounded-lg w-96 h-[400px] shadow-2xl" />
      //          <div>
      //             <h1 className="text-4xl text-black text-left font-bold">{single?.name}</h1>
      //             <h3 className="text-2xl">Brand: {single?.brand}</h3>
      //             <h3 className="py-5 text-xl">Brand: {single?.type}</h3>
      //             <h4>
      //                <Rating
      //                   initialRating={single?.rating}
      //                   emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
      //                   // placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
      //                   fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
      //                />
      //             </h4>
      //             <p className="py-6 text-[16px]">{single?.description}</p>
      //             <div className="w-[45vw]">
      //                <p className="pb-6 text-[16px]">{single?.longDescription}</p>
      //             </div>
      //             <button onClick={() => handleAddCart(single)} className="btn btn-primary">Add to Cart</button>
      //          </div>
      //       </div>
      //    </div>
      // </div>
   );
};

export default ProductDetails;