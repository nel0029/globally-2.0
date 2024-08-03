import axios, { AxiosRequestConfig, Method } from "axios";

const request = axios.create({
  baseURL: "",
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const requestServer = (params: AxiosRequestConfig) => {
  return request(params);
};

export { requestServer };
