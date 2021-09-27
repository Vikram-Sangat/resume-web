import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontSize: theme.toPt(2.5),
      position: "relative",
      textAlign: "center",
    },
    img: {
      position: "absolute",
      left: 16,
      width: theme.toPt(60),
      "@media print": {
        display: "none",
      },
    },
  });

export default style;
