"use client";

import { AuthFormValues, AuthResponse } from "@/types/common";
import { clientRequest } from "@/utils/axios";
import useSWRMutation from "swr/mutation";

const logIn = async (url: string, { arg }: { arg: AuthFormValues }) => {
  const res = await clientRequest.post(url, arg);
  return res.data;
};

const useAuthLogIn = () => {
  const url = `/api/auth/login`;
  const { data, isMutating, trigger } = useSWRMutation(url, logIn);

  return {
    doRequest: trigger,
    data,
    isLoading: isMutating,
  };
};

export default useAuthLogIn;
