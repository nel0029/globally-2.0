import Header from "@/components/layout/header/Header";
import MainLayout from "@/components/layout/main-layout";
import { MainContentWrapper } from "@/components/layout/main-layout/style";
import LeftSideBar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <Header />
      <main style={{ width: "100%", height: "100%", display: "flex" }}>
        <LeftSideBar />
        <MainContentWrapper>{children}</MainContentWrapper>
      </main>
    </MainLayout>
  );
}
