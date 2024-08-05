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
    setResponse(res.data);

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
export default useAuthLogIn;
