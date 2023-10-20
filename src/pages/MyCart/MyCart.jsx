import { useState } from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
   const product = useLoaderData()

   const [myCart, setMyCart] = useState(product)

   const handleDelete = (id) => {

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/mycart/${id}`, {
               method: "DELETE",
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                     )
                     const remaining = myCart.filter(data => data._id !== id)
                     setMyCart(remaining)
                  }
               })
         }
      })
   }


   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-6 my-12">
            {
               myCart.map(product =>
                  <div key={product._id}>
                     <div className="card bg-base-100 shadow-2xl drop-shadow-2xl">
                        <figure>
                           <img src={product.image} alt="Product" className="h-72 w-full" />
                        </figure>
                        <div className="card-body px-3">
                           <h2 className="card-title">{product.name}</h2>
                           <div className="flex items-center justify-between">
                              <h3 className="text-lg text-pink-500">{product.brand}</h3>
                              <h3 className="text-lg text-pink-500 capitalize">{product.type}</h3>
                           </div>
                           <p className="text-[14px]">{product.description}</p>

                           <div className="flex justify-between">
                              <p className="text-lg">${product.price}</p>
                              <p className="flex justify-end">
                                 <Rating
                                    initialRating={product.rating}
                                    emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
                                    // placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
                                    fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
                                 />
                              </p>
                           </div>
                           <div className="flex justify-center  gap-8">
                              <button onClick={() => handleDelete(product._id)} className="badge text-xl py-4 hover:bg-pink-500 hover:text-white w-full badge-outline">Delete</button>
                           </div>
                        </div>
                     </div>
                  </div>)
            }
         </div>
      </div>
   );
};

export default MyCart;