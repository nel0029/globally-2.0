"use client";

import { useContext, useState } from "react";
import { GroupMenuContainer, SideBarContainer } from "./style";
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

const SideBar = () => {
  const { user } = useContext(UserContext);
  const { mode, toggleMode } = useContext(ThemeContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const path = usePathname();

  const menuItems = useMenuItemsData();

  return (
    <SideBarContainer>
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

      <MenuItem
        text="Settings"
        icon={<IoOptions />}
        iconEnd={isSettingsOpen ? <IoChevronDown /> : <IoChevronUp />}
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        path=""
      />

      <MenuItem
        menuStyle={{ display: isSettingsOpen ? "flex" : "none" }}
        text={mode === "dark" ? "Light Mode" : "Dark Mode"}
        icon={mode === "dark" ? <IoSunny /> : <IoMoon />}
        onClick={toggleMode}
        path=""
      />
      <MenuItem
        menuStyle={{ display: isSettingsOpen ? "flex" : "none" }}
        text="Logout"
        icon={<IoPower />}
        onClick={toggleMode}
        path=""
      />
    </SideBarContainer>
  );
};

export default SideBar;
