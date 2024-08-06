"use client";

import MainLayout from "@/components/layout/main-layout";
import { PageWrapper } from "@/components/layout/main-layout/style";
import SideBar from "@/components/layout/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const userString: string | null = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    if (user === null) router.push("/login");
  }, [router, path]);

  return (
    <MainLayout>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <SideBar />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </MainLayout>
  );
}
