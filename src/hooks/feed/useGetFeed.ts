"use client";

import { useState, useEffect } from "react";
import { requestServer } from "@/configs/axios";

const useGetFeed = () => {
  const url = `/api/posts/get-list`;
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<{
    code: string;
    message: string;
    data: object;
  }>({
    code: "",
    message: "",
    data: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await requestServer({
          url,
          method: "GET",
        });
        setResponse(res.data);

        if (res.data.code.startsWith("E")) {
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Error fetching feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Fetch data immediately when hook is used
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    data: response,
  };
};

export default useGetFeed;
