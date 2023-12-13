import { useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Login/SocialLogin";
import "./register.css";
import { saveUser } from "../../api/auth";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
   const { createUser, profileUpdate } = useAuth()
   const [passwordError, setPasswordError] = useState("")
   const [showPass, setShowPass] = useState(false)
   const navigate = useNavigate()

   const handleRegister = async (e) => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const photo = form.photo.value
      const email = form.email.value
      const password = form.password.value

      const lengthError = /^.{6,}$/;
      const spError = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
      const capitalError = /^[^A-Z]*$/;

      if (!lengthError.test(password)) {
         setPasswordError("Password is less than 6 characters.");
         return;
      } else if (capitalError.test(password)) {
         setPasswordError("Password has no Capital Letter.");
         return;
      } else if (!spError.test(password)) {
         setPasswordError("Password has no special characters.");
         return;
      }
      try {
         const result = await createUser(email, password)
         await profileUpdate(name, photo)
         await saveUser(result?.user, name, photo)
         navigate('/')
         toast.success('Sign up Successfull')
      } catch (error) {
         if (error.message) {
            Swal.fire("Email Already in Use.")
         }
      }
   }
   const handleShowPass = () => {
      setShowPass(!showPass)
   }
   return (
      <div>
         <div className="body h-full md:h-[90vh] lg:h-screen">
            <section>
               <form onSubmit={handleRegister}>
                  <h1 className="text-3xl font-sans font-extrabold tracking-widest">Sign Up</h1>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="text" name="name" required />
                     <label htmlFor="">Full Name</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="text" name="photo" required />
                     <label htmlFor="">PhotoURL</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input type="email" name="email" required />
                     <label htmlFor="">Email</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="lock-closed-outline"></ion-icon>
                     <input type={showPass ? "text" : "password"} name="password" id="password" required />
                     <label htmlFor="">Password</label>
                     <p onClick={handleShowPass} htmlFor="password" className="absolute -top-2 right-2 p-2 hover:bg-gray-100 rounded-full">
                        {
                           showPass ? <BsEyeSlash className="text-xl text-gray-600"></BsEyeSlash> : <BsEye className="text-xl text-gray-600"></BsEye>
                        }
                     </p>
                  </div>
                  <div className="error">
                     {
                        passwordError && (<p className="text-red-500 text-sm mb-3">{passwordError}</p>)
                     }
                  </div>
                  <button className="button">Sign Up</button>
               </form>
               <div>
                  <div className="flex text-white justify-center items-center pt-2">
                     <hr />
                     <p>Or</p>
                     <hr />
                  </div>
                  <SocialLogin></SocialLogin>
                  <div className="login">
                     <p>Already have an account <Link to="/login">Login</Link></p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Register;