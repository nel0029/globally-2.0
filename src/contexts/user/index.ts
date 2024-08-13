import { User } from "@/types/user";
import { createContext } from "react";

export const UserContext = createContext<{
  user: User | null;
}>({
  user: null,
});
