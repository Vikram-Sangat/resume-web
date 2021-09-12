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
        paddingBottom: 8,
      },
      "& div": {
        marginLeft: theme.spacing(13 / 8),
      },
    },
  });

export default style;
