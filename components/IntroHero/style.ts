import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontSize: theme.toPt(2.5),
      position: "relative",
      textAlign: "center",
    },
  });

export default style;
