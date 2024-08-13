"use client";

import { UserContext } from "@/contexts/user";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

const UserWrapper = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const path = usePathname();

  useEffect(() => {
    const userString: string | null = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    } else {
      setUser(null);
    }
  }, [path]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserWrapper;
