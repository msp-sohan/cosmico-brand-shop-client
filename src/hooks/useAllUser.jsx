import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllUser = () => {
   const axios = useAxios()
   const { data, isLoading } = useQuery({
      queryKey: ['AllUser'],
      queryFn: async () => {
         const { data } = await axios.get('/users')
         return data
      }
   })
   return { data, isLoading }
};

export default useAllUser;