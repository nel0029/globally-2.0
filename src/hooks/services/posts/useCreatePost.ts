import { PostsFormValues } from "@/types/common";
import { clientRequest } from "@/utils/axios";
import useSWRMutation from "swr/mutation";

const createPost = async (
  url: string,
  {
    arg,
  }: {
    arg: FormData;
  }
) => {
  return await clientRequest.post(url, arg);
};

const useCreatePost = () => {
  const url = `/api/posts/create`;
  const { trigger, isMutating } = useSWRMutation(url, createPost);

  return {
    trigger,
    isLoading: isMutating,
  };
};

export default useCreatePost;
