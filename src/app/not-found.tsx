"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/layout/main-layout";
const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, [router]);

  return (
    <MainLayout>
      <div>
        <h1>NotFoundPage</h1>
      </div>
    </MainLayout>
  );
};
export default NotFoundPage;
