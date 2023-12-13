import useRole from "../../../hooks/useRole";
import AdminDashboard from "../Admin/AdminDashboard";
import UserDashboard from "../User/UserDashboard";

const DashboardHome = () => {
   const { data: role } = useRole()

   return (
      <>
         {role === "admin" && <AdminDashboard />}
         {role === "user" && <UserDashboard />}
      </>
   );
};

export default DashboardHome;