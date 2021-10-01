import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {},
    body: {
      [theme.breakpoints.down("xs")]: {
        justifyContent: "flex-start",
        display: "flex",
        flexWrap: "wrap",
      },
    },
    section: {
      width: "25%",
      display: "inline-block",
      paddingRight: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        width: "50%",
      },
      "& ul": {
        margin: 0,
        listStylePosition: "inside",
        paddingLeft: 0,
      },
      "& li": {
        margin: 0,
        float: "left",
        marginRight: theme.spacing(0.5),
        [theme.breakpoints.down("xs")]: {
          float: "unset",
        },
      },
      clear: "both",
      "& header": {
        fontWeight: "700",
      },
      "&:after": {
        content: ".",
        visibility: "hidden",
        display: "block",
        height: "0",
        clear: "both",
      },
    },
  });

export default style;
