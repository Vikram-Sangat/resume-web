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
      pageBreakAfter: "auto",
      marginBottom: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      "& small": {
        margin: theme.spacing(1, 0),
      },
    },
    title: {
      fontSize: theme.toPt(14 / 8),
      fontWeight: 700,
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
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        display: "block",
        marginBottom: theme.spacing(1),
      },
    },
    area: {
      fontSize: theme.toPt(10 / 8),
      fontWeight: 700,
    },
    lastDetail: {
      "@media print": {
        // paddingTop: theme.toPt(4),
      },
    },
    lastDuration: {
      "@media print": {
        // top: `calc(${theme.toPt(4)} - 4px)`,
      },
    },
  });

export default style;
