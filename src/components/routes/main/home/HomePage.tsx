"use client";

import useGetFeed from "@/hooks/services/feed/useGetFeed";
import CreateNewPostCard from "./components/CreateNewPostCard";
import { PageWrapper } from "@/components/layout/main-layout/style";

const HomePage = () => {
  const { data, isLoading } = useGetFeed();

  return (
    <PageWrapper>
      <CreateNewPostCard />
      HomePage
    </PageWrapper>
  );
};

export default HomePage;
