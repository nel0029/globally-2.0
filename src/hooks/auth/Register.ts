"use client";

import { requestServer } from "@/configs/axios";
import { useState } from "react";

const useAuthRegister = () => {
  const url = `/api/auth/register`;
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

    setResponse({
      code: res.data.code,
      message: res.data.message,
      data: res.data.data,
    });
    setLoading(false);

    if (res.data.code.startsWith("E")) {
      localStorage.removeItem("user");
      return;
    }
    localStorage.setItem("user", JSON.stringify(res.data.data));
  };

  return {
    loading,
    doRequest,
    data: response,
  };
};
export default useAuthRegister;
