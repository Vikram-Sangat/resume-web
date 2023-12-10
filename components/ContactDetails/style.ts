import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const style = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      "& > *": {
        marginRight: theme.toPt(1),
        fontSize: theme.toPt(10 / 8),
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      },
    },
    icon: {
      fontSize: theme.toPt(12 / 8),
      marginBottom: -4,
    },
    dash: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  });

export default style;
