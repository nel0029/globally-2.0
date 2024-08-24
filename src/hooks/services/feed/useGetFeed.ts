import { clientRequest } from "@/utils/axios";
import useSWR from "swr";

const getFeed = async (url: string) => {
  return await clientRequest.get(url);
};
const useGetFeed = () => {
  const url = `/api/posts/get-list`;

  const { data, isLoading } = useSWR(url, getFeed);

  return {
    data,
    isLoading,
  };
};

export default useGetFeed;
