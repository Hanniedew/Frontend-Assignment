// Desc: Toggle function between light and dark mode
"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState, createContext, useEffect, useContext } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [isMounted, setIsMounted] = useState(false); // Flag to check if component is mounted (to prevent flickering modes on refresh)

  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client side
    const storedMode = localStorage.getItem("colorMode");
    setMode(storedMode || "light");
  }, []); // Only runs once on component mount

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("colorMode", newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // Render nothing until the component is mounted to avoid flickering
  if (!isMounted) return null;

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
