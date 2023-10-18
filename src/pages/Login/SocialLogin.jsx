import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext)
   const handleGoogleLogin = () =>{
      googleLogin()
   }
   return (
      <div>
         <button onClick={handleGoogleLogin} className="mt-2 hover:bg-blue-500 hover:text-white">Sign in With Google</button>
      </div>
   );
};

export default SocialLogin;