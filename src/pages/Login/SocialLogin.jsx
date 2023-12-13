import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { saveUser } from "../../api/auth";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()

   const handleGoogleLogin = async () => {
      try {
         const result = await googleLogin()
         await saveUser(result?.user)
         navigate(location?.state ? location.state : "/");
         toast.success('Successfully Login With Google')
      } catch (error) {
         toast.error(error.message)
      }
   }

   return (
      <div>
         <button onClick={handleGoogleLogin} className="w-full bg-white py-2 rounded-[40px] text-md font-semibold mt-2 hover:bg-blue-500 hover:text-white">Sign in With Google</button>
      </div>
   );
};

export default SocialLogin;