import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.toPt(14 / 8),
      fontWeight: 700,
      position: "relative",
      display: "inline-block",
      marginBottom: theme.spacing(1),
      "&::after": {
        content: '" "',
        bottom: theme.spacing(-0.5),
        left: 0,
        width: "50%",
        height: 2,
        position: "absolute",
        background: "black",
      },
    },
  });

export default style;
