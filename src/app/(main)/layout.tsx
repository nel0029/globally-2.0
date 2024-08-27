import MainLayout from "@/components/layout/main-layout";
import {
  HeaderContainer,
  HeaderTextContainer,
  LogoContainer,
  MainContentWrapper,
} from "@/components/layout/main-layout/style";
import SideBar from "@/components/layout/sidebar";
import { IoEarth } from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <HeaderContainer>
        <HeaderTextContainer>
          Gl
          <LogoContainer>
            <IoEarth />
          </LogoContainer>
          bally
        </HeaderTextContainer>
      </HeaderContainer>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <SideBar />
        <MainContentWrapper>{children}</MainContentWrapper>
      </div>
    </MainLayout>
  );
}
