import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../components/Loader/Loader";

const AdminRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation();
   const admin = user?.email === 'admin@gmail.com'

   if (loading) {
      return <Loader />
   }

   if (admin) {
      return children;
   }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default AdminRoute;