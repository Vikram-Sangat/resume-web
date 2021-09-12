import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
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
    section: {
      width: "23%",
      display: "inline-block",
      marginRight: theme.spacing(1),
      "& ul": {
        margin: 0,
        listStylePosition: "inside",
        paddingLeft: 0,
      },
      "& li": {
        margin: 0,
        float: "left",
        marginRight: theme.spacing(0.5),
      },
    },
  });

export default style;
