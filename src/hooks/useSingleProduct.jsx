import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSingleProduct = (id) => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allProduct', id],
      queryFn: async () => {
         const { data } = await axios.get(`/products/${id}`)
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useSingleProduct;