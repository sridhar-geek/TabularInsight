import { useQuery } from "@tanstack/react-query";

// Imports from another files
import { getStaticsData } from "./ApiCalls";


export const useGetStatics = (sMonth) => {
   return useQuery({
      queryKey: ["Statics", "" + sMonth],
      queryFn: (sMonth) => getStaticsData(sMonth),
   });
}