import axios, { AxiosRequestConfig } from "axios";

const axiosRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosRequest.interceptors.response.use((response) => {
  return response;
});

const requestServer = async (params: AxiosRequestConfig) => {
  const response = await axiosRequest(params);

  return response;
};

export { requestServer };
