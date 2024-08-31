"use client";

import { ReactNode, forwardRef } from "react";
import {
  LeftSideBarIconContainer,
  LeftSideBarMenuItem,
  LeftSideBarTextContainer,
} from "./style";

interface Props {
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
  fontSize?: string;
}

const MenuItem = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      icon,
      text,
      onClick,
      isOnRoute = false,
      iconEnd,
      menuStyle,
      path,
      fontSize,
    },
    ref
  ) => {
    return (
      <LeftSideBarMenuItem
        ref={ref}
        $isOnRoute={isOnRoute}
        onClick={onClick}
        style={menuStyle}
        href={path ?? ""}
        $font_size={fontSize}
      >
        {!!icon && <LeftSideBarIconContainer>{icon}</LeftSideBarIconContainer>}
        <LeftSideBarTextContainer>{text}</LeftSideBarTextContainer>
        {!!iconEnd && (
          <LeftSideBarIconContainer>{iconEnd}</LeftSideBarIconContainer>
        )}
      </LeftSideBarMenuItem>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
