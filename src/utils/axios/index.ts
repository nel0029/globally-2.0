import { AuthErrorResponseCodesEnum } from "@/enums/auth/ErrorCodes";
import { AuthSuccessResponseCodesEnum } from "@/enums/auth/SuccessCodes";
import axios from "axios";

const clientRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

clientRequest.interceptors.response.use(
  (response) => {
    if (
      response &&
      (response.data.code === AuthErrorResponseCodesEnum.E0005 ||
        response.data.code === AuthErrorResponseCodesEnum.E0006)
    ) {
      const unauthorized = new CustomEvent("unauthorized");
      localStorage.removeItem("user");
      window.dispatchEvent(unauthorized);
    }

    if (response && response.data.code === AuthSuccessResponseCodesEnum.S0002) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { clientRequest };
