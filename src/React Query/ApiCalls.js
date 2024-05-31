import axios from "axios";

// Creating axiosInstance, so that we can call this anytime
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
});


// Api Call to get Statics data of a paticular month
export const getStaticsData = async (sMonth) => {
const month = sMonth.queryKey[1]
const url = `/statics/` + month;
const { data } = await axiosInstance.get(url);
  return data;
};