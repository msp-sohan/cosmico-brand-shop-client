import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBrand = () => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['brands'],
      queryFn: async () => {
         const { data } = await axios.get("/products/brands")
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useBrand;