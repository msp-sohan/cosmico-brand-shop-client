import { useContext } from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {
   const { user } = useContext(AuthContext)
   const email = user?.email
   const products = useLoaderData()
   const { id } = useParams()

   const single = products.find(product => product._id === id)

   const handleAddCart = (cart) => {
      const { brand, description, name, price, rating, type, image } = cart;
      const data = { brand, description, name, price, rating, type, image, email }
      fetch('https://cosmico-brand-shop-server.vercel.app/mycart', {
         method: "POST",
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {
               Swal.fire('Add to Cart Seccessfully')
            }
         })

   }

   return (
      <div>
         <div className="hero min-h-screen bg-base-20 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row">
               <img src={single.image} className="rounded-lg w-96 h-[400px] shadow-2xl" />
               <div>
                  <h1 className="text-4xl text-black text-left font-bold">{single.name}</h1>
                  <h3 className="text-2xl">Brand: {single.brand}</h3>
                  <h3 className="py-5 text-xl">Brand: {single.type}</h3>
                  <h4>
                     <Rating
                        initialRating={single.rating}
                        emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
                        // placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
                        fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
                     />
                  </h4>
                  <p className="py-6 text-[16px]">{single.description}</p>
                  <div className="w-[45vw]">
                     <p className="pb-6 text-[16px]">{single.longDescription}</p>
                  </div>
                  <button onClick={() => handleAddCart(single)} className="btn btn-primary">Add to Cart</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;