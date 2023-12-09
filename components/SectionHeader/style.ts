import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const style = (theme: Theme) =>
  createStyles({
    sectionRoot: {
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
