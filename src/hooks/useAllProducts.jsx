import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllProducts = () => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allProduct'],
      queryFn: async () => {
         const { data } = await axios.get("/products")
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useAllProducts;