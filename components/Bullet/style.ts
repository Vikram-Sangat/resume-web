import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

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
