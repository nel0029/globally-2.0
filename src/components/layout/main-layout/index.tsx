"use client";

import ThemeClient from "@/components/common/theme/ThemeClient";
import { useEffect, useState } from "react";
import SideBar from "../sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light";
    setMode(storedMode);
  }, [mode]);

  return (
    <html lang="en">
      <body>
        <ThemeClient>{children}</ThemeClient>
      </body>
    </html>
  );
}
