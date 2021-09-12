import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      minWidth: "100%",
      paddingBottom: theme.toPt(1),
      marginBottom: theme.toPt(1),
      borderBottom: "2px solid black",
    },
  });

export default style;
