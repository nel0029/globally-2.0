"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href={"/login"}>Login</Link>
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;
