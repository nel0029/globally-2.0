import MainLayout from "@/components/layout/main-layout";
import { MainContentWrapper } from "@/components/layout/main-layout/style";
import SideBar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <SideBar />
        <MainContentWrapper>{children}</MainContentWrapper>
      </div>
    </MainLayout>
  );
}
