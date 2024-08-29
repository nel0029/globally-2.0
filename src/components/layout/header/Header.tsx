import { IoEarth } from "react-icons/io5";
import {
  HeaderContainer,
  HeaderTextContainer,
  LogoContainer,
} from "../main-layout/style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        Gl
        <LogoContainer>
          <IoEarth />
        </LogoContainer>
        bally
      </HeaderTextContainer>
    </HeaderContainer>
  );
};

export default Header;
