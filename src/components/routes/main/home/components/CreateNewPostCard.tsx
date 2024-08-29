"use client";

import useCreatePost from "@/hooks/services/posts/useCreatePost";
import {
  AvatarContainer,
  ActionButtonsContainer,
  CreateNewPostCardContainer,
  CreateNewPostSectionContainer,
  CustomImage,
  CustomTextAreaContainer,
} from "./style";
import { useCallback, useContext, useState } from "react";
import { toFormData } from "@/utils/common/form-data";
import useGetFeed from "@/hooks/services/feed/useGetFeed";
import { PostsFormValues } from "@/types/common";
import { UserContext } from "@/contexts/user";
import CreateNewPostTextArea from "./CreateNewPostTextArea";
import CreatePostButton from "./CreatePostButton";
import CreateNewPostIconButtons from "./CreateNewPostIconButtons";

const CreateNewPostCard = () => {
  const [postContent, setPostContent] = useState<string>("");
  const { trigger: createPost, isLoading } = useCreatePost();
  const { mutate } = useGetFeed();

  const { user } = useContext(UserContext);

  const handleCreatePost = async () => {
    const body = toFormData({
      content: postContent,
      post_type: 1,
      has_poll: false,
    });
    await createPost(body);
    mutate();
  };

  const handlePostContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(event.target.value);
  };

  return (
    <CreateNewPostCardContainer>
      <AvatarContainer>
        <CustomImage
          fill
          src={user?.profile_picture.url || ""}
          alt="Profile Picture"
        />
      </AvatarContainer>

      <CreateNewPostSectionContainer>
        <CustomTextAreaContainer>
          <CreateNewPostTextArea
            placeholder="What is happening?!"
            maxLength={99}
            onChange={handlePostContentChange}
            value={postContent}
          />
        </CustomTextAreaContainer>

        <ActionButtonsContainer>
          <CreateNewPostIconButtons />

          <CreatePostButton label="Post" onClick={handleCreatePost} />
        </ActionButtonsContainer>
      </CreateNewPostSectionContainer>
    </CreateNewPostCardContainer>
  );
};

export default CreateNewPostCard;
