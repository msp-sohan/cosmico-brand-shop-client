import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useEffect, useState } from 'react'
import './CheckoutForm.css'
import { ImSpinner9 } from 'react-icons/im'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const CheckoutForm = ({ closeModal, price }) => {
   const stripe = useStripe()
   const elements = useElements()
   const axios = useAxios()
   const { user } = useContext(AuthContext)
   const [cardError, setCardError] = useState('')
   const [clientSecret, setClientSecret] = useState('')
   const [processing, setProcessing] = useState(false)
   const navigate = useNavigate()

   // Create Payment Intent
   useEffect(() => {
      axios.post('/create-payment-intent', { price })
         .then(res => {
            setClientSecret(res?.data?.clientSecret)
         })
   }, [price, axios])

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
         return;
      }

      // Card Data lookup (Asynchronous network call)
      const { error } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         setCardError(error.message);
      } else {
         setCardError('');
      }

      setProcessing(true);

      // Ekhane Taka Katbe
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
         clientSecret,
         {
            payment_method: {
               card: card,
               billing_details: {
                  email: user?.email,
                  name: user?.displayName,
               },
            },
         }
      );

      if (confirmError) {

         setCardError(confirmError.message);
      } else if (paymentIntent?.status === 'succeeded') {

         toast.success(`Booking successful! ${paymentIntent?.id}`);
         Swal.fire(`Booking successful! ${paymentIntent?.id}`);

         // Reset the form (assuming you have a ref for the form)
         event.target.reset();

         // Redirect to home page
         navigate('/');
      }
      setProcessing(false);
   };

   return (
      <>
         <form className='my-2' onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            <div className='flex mt-2 justify-around'>
               <button
                  type='button'
                  className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                  onClick={closeModal}
               >
                  Cancel
               </button>
               <button
                  type='submit'
                  disabled={!stripe || !clientSecret || processing}
                  className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
               >
                  {processing ? (
                     <ImSpinner9 className='m-auto animate-spin' size={24} />
                  ) : (
                     `Pay ${price}$`
                  )}
               </button>
            </div>
         </form>
         {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      </>
   )
}

export default CheckoutForm