"use client";
import { ReactNode, createContext, useState } from "react";

type ModeProps = {
  mode: string;
  lightModeHandler: () => void;
  darkModeHandler: () => void;
};

export const ModeContext = createContext<ModeProps>({
  mode: "dark",
  lightModeHandler: () => {},
  darkModeHandler: () => {},
});

const ModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<string>("dark");

  const darkModeHandler = () => {
    setIsDarkMode("dark");
  };

  const lightModeHandler = () => {
    setIsDarkMode("light");
  };

  const value = {
    mode: isDarkMode,
    darkModeHandler: darkModeHandler,
    lightModeHandler: lightModeHandler,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export default ModeContextProvider;
