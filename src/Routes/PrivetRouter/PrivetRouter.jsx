import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../components/Loader/Loader";

const PrivetRouter = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation();

   if (loading) {
      return <Loader />
   }

   if (user) {
      return children;
   }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRouter;