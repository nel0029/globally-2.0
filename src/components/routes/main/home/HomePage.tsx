"use client";

import useGetFeed from "@/hooks/services/feed/useGetFeed";
import CreateNewPostCard from "./components/CreateNewPostCard";
import { PageWrapper } from "@/components/layout/main-layout/style";
import { HomePageContentContainer } from "./style";

const HomePage = () => {
  const { data, isLoading } = useGetFeed();

  return (
    <PageWrapper>
      <HomePageContentContainer>
        <CreateNewPostCard />
        HomePage
      </HomePageContentContainer>
    </PageWrapper>
  );
};

export default HomePage;
