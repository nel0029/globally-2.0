"use client";

import ThemeClient from "@/components/common/theme/ThemeClient";
import UserWrapper from "../user-wrapper";
import ProtectedRoutesLayout from "./protected";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserWrapper>
          <ThemeClient>
            <ProtectedRoutesLayout>{children}</ProtectedRoutesLayout>
          </ThemeClient>
        </UserWrapper>
      </body>
    </html>
  );
}
