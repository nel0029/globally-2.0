"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, [router]);

  return (
    <div>
      <h1>NotFoundPage</h1>
    </div>
  );
};
export default NotFoundPage;
