import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {},
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
      position: "absolute",
      left: 16,
      width: 50,
      "@media print": {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        right: 16,
        left: "unset",
      },
    },
  });

export default style;
