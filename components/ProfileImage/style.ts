import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const style = (theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "row-reverse",
      },
    },
    title: {
      fontSize: theme.toPt(2.5),
      position: "relative",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.toPt(3),
        textAlign: "left",
      },
    },
    img: {
      width: 100,
      "& img": {
        objectFit: "contain",
        width: 100,
        [theme.breakpoints.up("sm")]: {
          width: 50,
        },
      },
      "@media print": {
        display: "none",
      },
    },
  });

export default style;
