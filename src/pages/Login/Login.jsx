import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import "./login.css";

const Login = () => {
   const { signInUser } = useContext(AuthContext)
   const [showPass, setShowPass] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()

   const handleLogin = (e) => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value

      signInUser(email, password)
         .then(result => {
            if (result.user) {
               navigate(location?.state ? location.state : "/")
               Swal.fire('Successfully Login')
            }
         })
         .catch(error => {
            if (error.message) {
               Swal.fire("Email and password do not match.")
            }
         })
   }
   const handleShowPass = () => {
      setShowPass(!showPass)
   }
   return (
      <div>
         <div className="body h-full md:h-[90vh] lg:h-screen py-5 md:py-0">
            <section>
               <form onSubmit={handleLogin}>
                  <h1 className="text-3xl font-sans font-extrabold tracking-widest">Welcome Back</h1>
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
                  <div className="forget">
                     <label htmlFor=""><input type="checkbox" />Remember Me</label>
                     <a href="#">Forget Password</a>
                  </div>
                  <button className="button"><input className="cursor-pointer" type="submit" value="Log in" /></button>
               </form>
               <div>
                  <div className="flex text-white justify-center items-center pt-2">
                     <hr />
                     <p>Or</p>
                     <hr />
                  </div>
                  <SocialLogin></SocialLogin>
                  <div className="register">
                     <p>Do not have a account <Link to="/register">Register</Link></p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Login;