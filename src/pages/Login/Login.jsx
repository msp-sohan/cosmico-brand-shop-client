import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import "./login.css";
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
   const { signInUser, loading } = useContext(AuthContext);
   const [showPass, setShowPass] = useState(false);
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate();
   const location = useLocation();

   const handleLogin = (e) => {
      e.preventDefault();

      signInUser(email, password)
         .then((result) => {
            if (result.user) {
               navigate(location?.state ? location.state : "/");
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfully Login",
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
         .catch((error) => {
            if (error.message) {
               Swal.fire("Email and password do not match.");
            }
         });
   };
   const handleShowPass = () => {
      setShowPass(!showPass);
   };
   return (
      <div>
         <div className="body h-full md:h-[90vh] lg:h-screen py-5 md:py-0">
            <section>
               <form onSubmit={handleLogin}>
                  <h1 className="text-3xl font-sans font-extrabold tracking-widest">
                     Welcome Back
                  </h1>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     <input onChange={(e) => setEmail(e.target.email.value)} value={email} type="email" name="email" required />
                     <label htmlFor="">Email</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="lock-closed-outline"></ion-icon>
                     <input
                        onChange={(e) => setPassword(e.target.password.value)}
                        type={showPass ? "text" : "password"}
                        name="password"
                        id="password"
                        value={password}
                        required
                     />
                     <label htmlFor="">Password</label>
                     <p
                        onClick={handleShowPass}
                        htmlFor="password"
                        className="absolute -top-2 right-2 p-2 hover:bg-gray-100 rounded-full"
                     >
                        {showPass ? (
                           <BsEyeSlash className="text-xl text-gray-600"></BsEyeSlash>
                        ) : (
                           <BsEye className="text-xl text-gray-600"></BsEye>
                        )}
                     </p>
                  </div>
                  <div className="forget">
                     <label htmlFor="">
                        <input type="checkbox" />
                        Remember Me
                     </label>
                     <a href="#">Forget Password</a>
                  </div>
                  <button type="submit" className="button flex justify-center items-center">
                     {/* <input className="cursor-pointer" type="submit" value="Log in" /> */}
                     {
                        loading ? <ImSpinner9 className="animate-spin text-center" /> : "Log in"
                     }
                  </button>
               </form>
               <div className="w-full md:px-7">
                  <div className="flex text-white justify-center items-center pt-2">
                     <hr />
                     <p>Or</p>
                     <hr />
                  </div>
                  <div className="">
                     <button onClick={() => { setEmail('customer@gmail.com'), setPassword('1111A!a1') }} className="w-full bg-white py-2 rounded-[40px] text-md font-semibold mt-2 hover:bg-blue-500 hover:text-white">
                        Sign in as Customer
                     </button>
                  </div>
                  <SocialLogin></SocialLogin>
                  <div className="register">
                     <p>
                        Do not have a account <Link to="/register">Register</Link>
                     </p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Login;
