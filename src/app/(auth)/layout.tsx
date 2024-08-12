"use client";

import { Inter } from "next/font/google";
import ThemeClient from "@/components/common/theme/ThemeClient";
import { useEffect, useState } from "react";
import UserWrapper from "@/components/layout/user-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light";
    setMode(storedMode);
  }, []);

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundColor: mode === "dark" ? "#121212" : "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserWrapper>
          <ThemeClient>{children}</ThemeClient>
        </UserWrapper>
      </body>
    </html>
  );
}
