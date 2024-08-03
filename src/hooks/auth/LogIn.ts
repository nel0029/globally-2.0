"use client";

import { requestServer } from "@/configs/axios";
import { useState } from "react";

const useAuthLogIn = () => {
  const url = `/api/auth/login`;
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{
    code: string;
    message: string;
    data: object;
  }>({
    code: "",
    message: "",
    data: {},
  });

  const doRequest = async ({ body }: { body: object }) => {
    setLoading(true);
    const res = await requestServer({
      url,
      method: "POST",
      data: body,
    });
    setLoading(false);
    setResponse({
      code: res.data.code,
      message: res.data.message,
      data: res.data.data,
    });
  };

  return {
    loading,
    doRequest,
    data: response,
  };
};
export default useAuthLogIn;
