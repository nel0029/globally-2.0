import { ReactNode } from "react";
import { StyledButton } from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

const IconButton = ({ icon, ...rest }: Props) => {
  return <StyledButton {...rest}>{icon}</StyledButton>;
};

export default IconButton;
