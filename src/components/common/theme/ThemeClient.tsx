"use client";

import { AppTheme } from "@/configs/theme";
import { ThemeProvider } from "styled-components";
import { createContext, useEffect, useState } from "react";
import Link from "next/link";

export const ThemeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

const ThemeClient = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const appMode = localStorage.getItem("mode");
    if (appMode) {
      setMode(appMode);
    }
  }, []);

  const toggleMode = () => {
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={AppTheme[mode]}>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <Link href={"/home"}>Home</Link>
        <button onClick={toggleMode}>
          {mode === "dark" ? "Light" : "Dark"} Mode
        </button>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeClient;
