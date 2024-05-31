import { useQuery } from "@tanstack/react-query";

// Imports from another files
import {
  getStaticsData,
  getBarChartData,
  getPieChartData,
  getTableData,
} from "./ApiCalls";

// Custom Hook for Table data
export const useTableData = (sMonth) => {
  return useQuery({
    queryKey: ["table", sMonth],
    queryFn: (sMonth) => getTableData(sMonth),
  });
};

// Custim Hook for Statics
export const useGetStatics = (sMonth) => {
  return useQuery({
    queryKey: ["Statics", sMonth],
    queryFn: (sMonth) => getStaticsData(sMonth),
  });
};

// Custim Hook for Product Range
export const useProductRange = (sMonth) => {
  return useQuery({
    queryKey: ["ProductRange", sMonth],
    queryFn: (sMonth) => getBarChartData(sMonth),
  });
};

// Custim Hook for Category
export const useCategoryData = (sMonth) => {
  return useQuery({
    queryKey: ["CategoryData", sMonth],
    queryFn: (sMonth) => getPieChartData(sMonth),
  });
};
