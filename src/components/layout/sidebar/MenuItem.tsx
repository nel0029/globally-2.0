"use client";

import { ReactNode } from "react";
import {
  SideBarIconContainer,
  SideBarMenuItem,
  SideBarTextContainer,
} from "./style";

const MenuItem = ({
  icon,
  text,
  onClick,
  isOnRoute = false,
  iconEnd,
  menuStyle,
}: {
  icon?: ReactNode;
  text?: ReactNode;
  onClick?: () => void;
  isOnRoute?: boolean;
  iconEnd?: ReactNode;
  childIcon?: ReactNode;
  childText?: ReactNode;
  toggleChildMenu?: () => void;
  menuStyle?: React.CSSProperties;
}) => {
  return (
    <SideBarMenuItem $isOnRoute={isOnRoute} onClick={onClick} style={menuStyle}>
      {!!icon && <SideBarIconContainer>{icon}</SideBarIconContainer>}
      <SideBarTextContainer>{text}</SideBarTextContainer>
      {!!iconEnd && <SideBarIconContainer>{iconEnd}</SideBarIconContainer>}
    </SideBarMenuItem>
  );
};

export default MenuItem;
