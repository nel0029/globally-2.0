import { User } from "@/types/user";
import { createContext } from "react";

export const UserContext = createContext<{
  user: User | null;
  setUser: (user: any) => void;
}>({
  user: null,
  setUser: (user: User) => {},
});
