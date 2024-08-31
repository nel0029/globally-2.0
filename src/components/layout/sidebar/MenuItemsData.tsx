"use client";

import { useEffect, useState, ReactNode } from "react";
import {
  IoHome,
  IoPerson,
  IoSearch,
  IoMail,
  IoNotifications,
  IoPersonCircleSharp,
} from "react-icons/io5";

interface MenuItem {
  name: string;
  icon: ReactNode;
  path?: string;
}

const useMenuItemsData = () => {
  const ItemsData: MenuItem[] = [
    {
      name: "Home",
      icon: <IoHome />,
      path: "/home",
    },
    {
      name: "Explore",
      icon: <IoSearch />,
      path: "/explore",
    },
    {
      name: "Profile",
      icon: <IoPerson />,
    },
    {
      name: "Messages",
      icon: <IoMail />,
      path: "/messages",
    },
    {
      name: "Notifications",
      icon: <IoNotifications />,
      path: "/notifications",
    },
    {
      name: "Account",
      icon: <IoPersonCircleSharp />,
      path: "/settings",
    },
  ];

  const [menuItems, setMenuItems] = useState<MenuItem[]>(ItemsData);

  useEffect(() => {
    const userString: string | null = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);

      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.name === "Profile"
            ? { ...item, path: `/profile/${user.user_name}` }
            : item
        )
      );
    }
  }, []);

  return menuItems;
};

export default useMenuItemsData;
