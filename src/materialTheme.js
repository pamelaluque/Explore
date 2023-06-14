import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#368DC1",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  spacing: 8,
});
