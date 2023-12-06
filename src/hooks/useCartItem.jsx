import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCartItem = ({ email }) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allProduct', email],
      queryFn: async () => {
         const { data } = await axios.get(`/mycart/${email}`)
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useCartItem;