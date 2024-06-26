import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useCartItem from "../../hooks/useCartItem";
import CheckoutModal from "./CheckoutModal";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const MyCart = () => {
   const [isOpen, setIsOpen] = useState(false)
   const axios = useAxios()
   const { user } = useContext(AuthContext)
   const { data: userCart, refetch } = useCartItem({ email: user?.email })
   console.log(userCart)

   const item = userCart?.map(item => { return item })
   console.log(item)

   const total = userCart?.reduce((sum, cart) => sum + cart?.price, 0)

   function closeModal() {
      setIsOpen(false)
   }
   console.log(user?.email)

   const handleDeleteCart = async () => {
      try {
         const { data } = await axios.delete(`/cartitem?email=${user?.email}`)
         console.log("first", data)
         refetch()
      } catch (error) {
         toast.error(error.message)
      }
   }

   const handleDelete = (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
         if (result.isConfirmed) {
            const { data } = await axios.delete(`/mycart/${id}`)
            if (data.deletedCount > 0) {
               Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
               )
               refetch()
            }
         }
      })
   }

   if (userCart?.length === 0) {
      return (
         <div className="my-[30vh]">
            <h2 className="text-3xl text-center mt-4">
               Sorry, You Dont added any Product to Cart.
            </h2>
         </div>
      );
   }

   return (
      <div className="py-16 bg-gray-100 font-poppins dark:bg-gray-700">
         <div className="px-4 py-6 mx-auto container lg:py-4 md:px-6">
            <div>
               <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
               <div className="mx-auto w-full px-4 py-8 sm:px-8">
                  <div className="overflow-y-hidden rounded-lg border">
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                 <th className="px-5 py-3">#</th>
                                 {/* <th className="px-5 py-3">Image</th> */}
                                 <th className="px-5 py-3">Name</th>
                                 <th className="px-5 py-3">Price</th>
                                 <th className="px-5 py-3">Brand</th>
                                 <th className="px-5 py-3">Qty</th>
                                 <th className="px-5 py-3">Action</th>
                              </tr>
                           </thead>
                           <tbody className="text-gray-500">
                              {
                                 userCart?.map((cart, index) => (
                                    <tr key={cart?._id}>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          <p className="whitespace-no-wrap">{index + 1}</p>
                                       </td>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          <div className="flex items-center">
                                             <div className="h-16 w-16 flex-shrink-0">
                                                <img className="h-full w-full rounded" src={cart?.image} alt="" />
                                             </div>
                                             <div className="ml-3">
                                                <p className="whitespace-no-wrap">{cart?.name}</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          <p className="whitespace-no-wrap">${cart?.price}</p>
                                       </td>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          <p className="whitespace-no-wrap">{cart?.brand}</p>
                                       </td>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          <p className="whitespace-no-wrap">2h</p>
                                       </td>
                                       <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                          {/* <button onClick={() => handleDelete(cart?._id)} className="rounded-full bg-green-200 hover:bg-green-900 hover:text-white px-3 py-1 text-xs font-semibold text-green-900">remove</button> */}
                                          <button onClick={() => handleDeleteCart()} className="rounded-full bg-green-200 hover:bg-green-900 hover:text-white px-3 py-1 text-xs font-semibold text-green-900">remove</button>
                                       </td>
                                    </tr>
                                 ))
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>

               {/* Checkout */}
               <div className="flex flex-wrap px-4 justify-between">
                  <div className="w-full px-4 mb-4 lg:w-1/2 ">
                     <div className="flex flex-wrap items-center gap-4">
                        <span className="text-gray-700 dark:text-gray-400">Apply Coupon</span>
                        <input type="text"
                           className="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-400 dark:bg-gray-800"
                           placeholder="Cosmico" required />
                        <button
                           className="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">Apply</button>
                     </div>
                  </div>
                  <div className="w-full px-4 mb-4 lg:w-1/2 ">
                     <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                        <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                        <div
                           className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                           <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
                           <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">${total}</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 mb-4 ">
                           <span className="text-gray-700 dark:text-gray-400 ">Shipping</span>
                           <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 mb-4 ">
                           <span className="text-gray-700 dark:text-gray-400">Order Total</span>
                           <span className="text-xl font-bold text-gray-700 dark:text-gray-400">${total}</span>
                        </div>
                        <h2 className="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                        <div className="flex items-center gap-2 mb-4 ">
                           <a href="#">
                              <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt=""
                                 className="object-cover h-16 w-26" />
                           </a>
                           <a href="#">
                              <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt=""
                                 className="object-cover h-16 w-26" />
                           </a>
                           <a href="#">
                              <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt=""
                                 className="object-cover h-16 w-26" />
                           </a>
                        </div>
                        <div className="flex items-center justify-between ">
                           <button onClick={() => setIsOpen(true)}
                              className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <CheckoutModal isOpen={isOpen} closeModal={closeModal} checkoutInfo={userCart} price={total} handleDeleteCart={handleDeleteCart} />
      </div>
   );
};

export default MyCart;