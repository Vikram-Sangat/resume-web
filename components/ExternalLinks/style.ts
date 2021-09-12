import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      paddingTop: theme.spacing(1),
      verticalAlign: "middle",
      "& *": {
        float: "left",
        fontSize: theme.toPt(18 / 8),
        marginRight: theme.spacing(1),
      },
    },
  });

export default style;
