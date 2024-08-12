"use client";

import { Inter } from "next/font/google";
import { AppTheme } from "@/configs/theme";
import { ThemeProvider } from "styled-components";
import { createContext, useEffect, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "@/contexts/theme";

const inter = Inter({ subsets: ["latin"] });

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
    <div
      className={inter.className}
      style={{
        backgroundColor: mode === "dark" ? "#121212" : "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <ThemeProvider theme={AppTheme[mode]}>
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default ThemeClient;
