import { clientRequest } from "@/utils/axios";
import useSWR from "swr";

const getFeed = async (url: string) => {
  return await clientRequest.get(url);
};
const useGetFeed = () => {
  const url = `/api/posts/get-list`;

  const { data, isLoading, mutate } = useSWR(url, getFeed);

  return {
    data,
    isLoading,
    mutate,
  };
};

export default useGetFeed;
