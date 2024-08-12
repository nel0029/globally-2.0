"use client";
import useGetFeed from "@/hooks/feed/useGetFeed";

const HomePage = () => {
  useGetFeed();
  return <div>HomePage</div>;
};

export default HomePage;
