"use client";

import useGetFeed from "@/hooks/services/feed/useGetFeed";

const HomePage = () => {
  const { data, isLoading } = useGetFeed();

  return <div>HomePage</div>;
};

export default HomePage;
