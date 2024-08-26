"use client";

import useCreatePost from "@/hooks/services/posts/useCreatePost";
import { CreateNewPostCardContainer, CreateNewPostTextArea } from "./style";
import { useCallback, useState } from "react";
import { toFormData } from "@/utils/common/form-data";
import useGetFeed from "@/hooks/services/feed/useGetFeed";
import { PostsFormValues } from "@/types/common";

const CreateNewPostCard = () => {
  const [postContent, setPostContent] = useState<string>("");
  const { trigger: createPost, isLoading } = useCreatePost();
  const { mutate } = useGetFeed();

  const handleCreatePost = useCallback(
    async (post: PostsFormValues) => {
      const { content } = post;
      const body = toFormData({
        content,
        post_type: 1,
        has_poll: false,
      });
      await createPost(body);
      mutate();
    },
    [createPost, mutate]
  );

  const handlePostContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(event.target.value);
  };

  return (
    <CreateNewPostCardContainer>
      <CreateNewPostTextArea
        placeholder="Create new post"
        maxLength={99}
        rows={7}
        onChange={handlePostContentChange}
        value={postContent}
      />

      <button onClick={() => handleCreatePost({ content: postContent })}>
        Post
      </button>
    </CreateNewPostCardContainer>
  );
};

export default CreateNewPostCard;
