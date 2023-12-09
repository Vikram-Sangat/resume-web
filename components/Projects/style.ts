import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const style = (theme: Theme) =>
  createStyles({
    root: {
      "& ul": {
        margin: 0,
        listStylePosition: "inside",
        paddingLeft: 0,
      },
      "& li": {
        margin: 0,
        pagaBreakInside: "avoid",
      },
    },
    details: {
      position: "relative",
      pageBreakBefore: "auto",
      paddingBottom: theme.spacing(1),
      "& small": {
        margin: theme.spacing(1, 0),
      },
    },
    title: {
      fontSize: theme.toPt(10 / 8),
      fontWeight: 700,
      "& svg": {
        fontSize: theme.toPt(1),
        margin: theme.spacing(0, 1),
      },
    },
    time: {
      fontSize: theme.toPt(10 / 8),
    },
    company: {
      fontSize: theme.toPt(10 / 8),
    },
    duration: {
      position: "absolute",
      top: 4,
      right: 0,
      fontWeight: 700,
    },
    area: {
      fontSize: theme.toPt(10 / 8),
      fontWeight: 700,
    },
  });

export default style;
