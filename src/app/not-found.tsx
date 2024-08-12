"use client";

import { useRouter } from "next/navigation";
import MainLayout from "@/components/layout/main-layout";
const NotFoundPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div>
        <h1>NotFoundPage</h1>
        <button onClick={() => router.replace("/login")}> Log In</button>
      </div>
    </MainLayout>
  );
};
export default NotFoundPage;
