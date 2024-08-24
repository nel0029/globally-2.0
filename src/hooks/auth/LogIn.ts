"use client";

import { clientRequest } from "@/utils/axios";
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
    const res = await clientRequest.post(url, body);
    setResponse(res.data);
    setLoading(false);
  };

  return {
    loading,
    doRequest,
    data: response,
  };
};
export default useAuthLogIn;
