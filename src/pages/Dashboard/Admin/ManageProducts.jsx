import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAllProducts from "../../../hooks/useAllProducts";
import Loader from "../../../components/Loader/Loader";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useBrand from "../../../hooks/useBrand";
import { useState } from "react";

const ManageProducts = () => {
   const axios = useAxios();

   const [categoryName, setCategoryName] = useState([]);
   const [search, setSearch] = useState("")

   const { data: allProduct, isLoading, refetch } = useAllProducts(categoryName, search);

   const { data: brands } = useBrand()

   const mutation = useMutation({
      mutationFn: async (id) => {
         const res = await axios.delete(`/products/${id}`)
         return res.data
      },
   })

   const handleDelete = async (id) => {
      try {
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
               await mutation.mutateAsync(id);
               Swal.fire(
                  'Deleted!',
                  'Product Delete Successfully.',
                  'success'
               )
               refetch()
            }
         })


      } catch (error) {
         console.error("Error deleting product:", error);
         Swal.fire("Error deleting product");
      }
   };

   const handleSearch = (e) => {
      e.preventDefault()
      setSearch(e.target.search.value)
   }

   const handleCategory = (e) => {
      setCategoryName(e.target.value)
      setSearch("")
   }

   if (isLoading) return <Loader />
   return (
      <>
         <div className="mt-5">
            <h2 className="text-3xl lg:text-5xl font-semibold my-10 text-center">Manage All Product</h2>
         </div>
         <h3 className="bg-blue-300 mb-2 p-2 w-full text-2xl font-medium">Total Products: {allProduct?.result?.length}</h3>
         {/* ==================== */}
         <div className="flex flex-col md:flex-row-reverse gap-3 my-3">
            <div className="flex justify-end">
               <form onSubmit={handleSearch}>
                  <input
                     type="text"
                     name="search"
                     placeholder="Search for the tool you like"
                     className="w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                  />
                  <button type="submit" className="bg-sky-500 hover:bg-green-500 text-white rounded-r h-full px-2 md:px-3 py-0 md:py-1">
                     Search
                  </button>
               </form>
            </div>
            <select
               onChange={(e) => handleCategory(e)}
               id="category"
               name="category"
               className="h-10 border-2 text-sm border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-2 tracking-wider">
               <option value="" className="">Select Category</option>
               <option value="all" className="">All Category</option>
               {brands?.map((brand) => (
                  <option key={brand?._id} value={brand?.name}>
                     {brand?.brand}
                  </option>
               ))}
            </select>
         </div>
         {/* =================== */}
         <div className="overflow-x-auto shadow-md sm:rounded-lg border grid grid-cols-1 mb-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
               <thead className="text-xs text-gray-100 uppercase bg-blue-500  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-16 py-3">Image</th>
                     <th scope="col" className="px-6 py-3">Product</th>
                     <th scope="col" className="px-6 py-3">Price</th>
                     <th scope="col" className="px-6 py-3">Brand</th>
                     <th scope="col" className="px-6 py-3">Category</th>
                     <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     allProduct?.result?.map(product => (
                        <tr key={product._id} className="bg-white border-b divide-x-2 divide-y-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                           <td className="p-4">
                              <img src={product?.image} className="w-16 md:w-28 md:h-28 max-w-full bg-gray-300 max-h-full" alt="Apple Watch" />
                           </td>
                           <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{product?.name}</td>
                           <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                              ${product?.price}
                           </td>
                           <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{product?.brand}</td>
                           <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{product?.type}</td>

                           <td className="px-6 py-4 ">
                              <Link to={`/dashboard/update/${product._id}`} className="btn btn-square mr-5 bg-yellow-500 hover:bg-yellow-800">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </Link>
                              <button onClick={() => handleDelete(product._id)} className="btn btn-square hover:bg-gray-400">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 6H5H21" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 11V17" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 11V17" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </button>
                           </td>
                        </tr>))
                  }

               </tbody>
            </table>
            {
               allProduct?.result?.length === 0 && <div className="">
                  <div className="my-[10vh]">
                     <h2 className="text-3xl text-center mt-4">
                        Sorry, You Dont have any Data.
                     </h2>
                  </div>
               </div>
            }
         </div>
      </>
   );
};

export default ManageProducts;