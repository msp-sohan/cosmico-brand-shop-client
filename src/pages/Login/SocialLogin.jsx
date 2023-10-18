import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()

   const handleGoogleLogin = () => {
      googleLogin()
         .then(result => {
            if (result.user) {
               navigate(location?.state ? location.state : "/")
               alert('Successfully Login With Google')
            }
         })
         .catch(error => {
            alert(error.message)
         })
   }
   return (
      <div>
         <button onClick={handleGoogleLogin} className="w-full bg-white py-2 rounded-[40px] text-md font-semibold mt-2 hover:bg-blue-500 hover:text-white">Sign in With Google</button>
      </div>
   );
};

export default SocialLogin;