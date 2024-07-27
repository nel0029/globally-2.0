"use client";

import { Inter } from "next/font/google";
import ThemeClient from "@/components/common/theme/ThemeClient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeClient>{children}</ThemeClient>
      </body>
    </html>
  );
}
