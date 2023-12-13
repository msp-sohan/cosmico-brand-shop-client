import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useRole = () => {
   const { user } = useAuth()
   const axios = useAxios()
   const { data, isLoading } = useQuery({
      queryKey: ['userRole', user?.email],
      queryFn: async () => {
         const { data } = await axios.get(`/user/role?email=${user?.email}`)
         return data
      }
   })
   return { data, isLoading }
};
export default useRole;