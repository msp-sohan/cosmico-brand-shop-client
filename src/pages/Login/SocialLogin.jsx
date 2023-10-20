import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()

   const handleGoogleLogin = () => {
      googleLogin()
         .then(result => {
            if (result.user) {
               navigate(location?.state ? location.state : "/")
               Swal.fire('Successfully Login With Google')
            }
         })
         .catch(error => {
            Swal.fire(error.message)
         })
   }
   return (
      <div>
         <button onClick={handleGoogleLogin} className="w-full bg-white py-2 rounded-[40px] text-md font-semibold mt-2 hover:bg-blue-500 hover:text-white">Sign in With Google</button>
      </div>
   );
};

export default SocialLogin;