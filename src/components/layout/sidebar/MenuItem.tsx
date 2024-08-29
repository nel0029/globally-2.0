"use client";

import { ReactNode } from "react";
import {
  LeftSideBarIconContainer,
  LeftSideBarMenuItem,
  LeftSideBarTextContainer,
} from "./style";

const MenuItem = ({
  icon,
  text,
  onClick,
  isOnRoute = false,
  iconEnd,
  menuStyle,
  path,
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
  path?: string;
}) => {
  return (
    <LeftSideBarMenuItem
      $isOnRoute={isOnRoute}
      onClick={onClick}
      style={menuStyle}
      href={path ?? ""}
    >
      {!!icon && <LeftSideBarIconContainer>{icon}</LeftSideBarIconContainer>}
      <LeftSideBarTextContainer>{text}</LeftSideBarTextContainer>
      {!!iconEnd && (
        <LeftSideBarIconContainer>{iconEnd}</LeftSideBarIconContainer>
      )}
    </LeftSideBarMenuItem>
  );
};

export default MenuItem;
