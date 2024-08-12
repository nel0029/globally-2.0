"use client";

import { UserContext } from "@/contexts/user";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const UserWrapper = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const userString: string | null = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, [path]);

  useEffect(() => {
    if (user === null && !isLoading) {
      router.push("/login");
    }
  }, [user, router, isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserWrapper;
