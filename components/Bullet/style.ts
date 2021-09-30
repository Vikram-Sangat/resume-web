import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {},
    bullet: {
      verticalAlign: "baseline",
      fontSize: theme.spacing(2),
      lineHeight: 1,
    },
  });

export default style;
