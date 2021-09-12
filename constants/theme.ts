import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { ToPT, toIn, toPt } from "../utils/style";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    toPt: ToPT;
    toIn: ToPT;
  }
  interface ThemeOptions {
    toPt: ToPT;
    toIn: ToPT;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Lato","Roboto", "Helvetica", "Arial", sans-serif',
  },
  toIn,
  toPt,
});

export default theme;
