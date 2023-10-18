import { createContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   const googleLogin = () =>{
      setLoading(true)
      signInWithPopup(auth, googleProvider)
   }

   const authInfo = {
      user,
      loading,
      googleLogin,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;