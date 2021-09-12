import { createStyles, Theme } from "@material-ui/core";

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
    },
    area: {
      fontSize: theme.toPt(10 / 8),
      fontWeight: 700,
    },
  });

export default style;
