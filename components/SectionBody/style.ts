import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const style = (theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      fontSize: theme.toPt(10 / 8),
      padding: theme.toPt(1),
      textAlign: "justify",
      "&:after, &:before": {
        content: ".",
        visibility: "hidden",
        display: "block",
        height: 0,
        clear: "both",
      },
    },
  });

export default style;
