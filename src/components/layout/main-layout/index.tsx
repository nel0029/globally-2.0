"use client";

import ThemeClient from "@/components/common/theme/ThemeClient";
import UserWrapper from "../user-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserWrapper>
          <ThemeClient>{children}</ThemeClient>
        </UserWrapper>
      </body>
    </html>
  );
}
