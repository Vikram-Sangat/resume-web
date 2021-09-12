import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      "& > *": {
        marginRight: theme.toPt(1),
        fontSize: theme.toPt(10 / 8),
      },
    },
    icon: {
      fontSize: theme.toPt(12 / 8),
      marginBottom: -4,
    },
  });

export default style;
