"use client";
import theme from "@/util/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
