"use client";

import { useContext, useEffect, useState } from "react";
import { SideBarContainer } from "./style";
import {
  IoSunny,
  IoMoon,
  IoChevronDown,
  IoSettings,
  IoChevronUp,
  IoPower,
} from "react-icons/io5";
import { ThemeContext } from "@/components/common/theme/ThemeClient";
import MenuItem from "./MenuItem";
import { usePathname, useRouter } from "next/navigation";
import useMenuItemsData from "./MenuItemsData";

interface User {
  profile_picture: {
    url: string;
  };
  user_name: string;
}

const SideBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const { mode, toggleMode } = useContext(ThemeContext);
  const [isChildMenuOpen, setIsChildMenuOpen] = useState(false);
  const toggleChildMenu = () => setIsChildMenuOpen(!isChildMenuOpen);
  const router = useRouter();
  const path = usePathname();

  const menuItems = useMenuItemsData();

  useEffect(() => {
    const userString: string | null = localStorage.getItem("user");
    setUser(userString ? JSON.parse(userString) : null);
  }, []);

  return (
    <SideBarContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          icon={item.icon}
          text={item.name}
          onClick={() => router.push(item.path || "")}
          isOnRoute={
            item.path && item.name !== user?.user_name
              ? path.includes(item.path)
              : item.name === user?.user_name
          }
        />
      ))}
      <MenuItem
        text="Settings"
        icon={<IoSettings />}
        onClick={toggleChildMenu}
        iconEnd={isChildMenuOpen ? <IoChevronDown /> : <IoChevronUp />}
      />

      <MenuItem
        menuStyle={{ display: isChildMenuOpen ? "flex" : "none" }}
        text="Account"
        icon={
          <div style={{ width: "1.75rem", height: "1.75rem" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${user?.profile_picture?.url})`,
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        }
        isOnRoute={path.includes("settings")}
        onClick={() => router.push("/settings")}
      />

      <MenuItem
        menuStyle={{ display: isChildMenuOpen ? "flex" : "none" }}
        text={mode === "dark" ? "Light Mode" : "Dark Mode"}
        icon={mode === "dark" ? <IoSunny /> : <IoMoon />}
        onClick={toggleMode}
      />
      <MenuItem
        menuStyle={{ display: isChildMenuOpen ? "flex" : "none" }}
        text="Logout"
        icon={<IoPower />}
        onClick={toggleMode}
      />
    </SideBarContainer>
  );
};

export default SideBar;
