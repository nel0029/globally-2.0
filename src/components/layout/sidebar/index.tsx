"use client";

import { useState } from "react";

const SideBar = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "dark");
  return (
    <div>
      <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default SideBar;
