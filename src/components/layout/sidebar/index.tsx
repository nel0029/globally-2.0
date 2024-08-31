"use client";

import { useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  DropDownContainer,
  GroupMenuContainer,
  LeftSideBarContainer,
} from "./style";
import {
  IoSunny,
  IoMoon,
  IoChevronDown,
  IoOptions,
  IoChevronUp,
  IoPower,
} from "react-icons/io5";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import useMenuItemsData from "./MenuItemsData";
import { ThemeContext } from "@/contexts/theme";
import { UserContext } from "@/contexts/user";

const LeftSideBar = () => {
  const { user } = useContext(UserContext);
  const { mode, toggleMode } = useContext(ThemeContext);
  const menuItemsRef = useRef<HTMLAnchorElement>(null);
  const path = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(
    menuItemsRef.current?.scrollHeight ?? 40
  );

  const menuItems = useMenuItemsData();
  const handleOpenSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const subMenuItems = useMemo(
    () => [
      {
        text: "Settings",
        onClick: handleOpenSettings,
        icon: <IoOptions />,
        iconEnd: isSettingsOpen ? <IoChevronDown /> : <IoChevronUp />,
        path: "",
      },
      {
        text: mode === "dark" ? "Light Mode" : "Dark Mode",
        onClick: toggleMode,
        icon: mode === "dark" ? <IoSunny /> : <IoMoon />,
        path: "",
      },
      {
        text: "Logout",
        onClick: toggleMode,
        icon: <IoPower />,
        path: "",
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSettingsOpen, mode]
  );

  useEffect(() => {
    if (menuItemsRef.current) {
      const menuItemsHeight = menuItemsRef.current.scrollHeight;
      const minHeight = isSettingsOpen ? subMenuItems.length : 1;
      const drawerHeight =
        menuItemsHeight * minHeight +
        (isSettingsOpen ? subMenuItems.length - 1 : 0) * 4;
      setMaxHeight(drawerHeight);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSettingsOpen, menuItemsRef]);

  return (
    <LeftSideBarContainer>
      <GroupMenuContainer>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            icon={item.icon}
            text={item.name}
            isOnRoute={
              item.path && item.name !== user?.user_name
                ? path.includes(item.path)
                : item.path === user?.user_name
            }
            path={item.path || ""}
          />
        ))}
      </GroupMenuContainer>

      <DropDownContainer $maxHeight={maxHeight + 6}>
        {subMenuItems.map((item, index) => (
          <MenuItem
            ref={menuItemsRef}
            key={index}
            text={item.text}
            icon={item.icon}
            onClick={item.onClick}
            iconEnd={item.iconEnd}
            path={item.path}
            isOnRoute={!!(item.path && path.includes(item.path))}
          />
        ))}
      </DropDownContainer>
    </LeftSideBarContainer>
  );
};

export default LeftSideBar;
