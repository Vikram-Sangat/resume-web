import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
  createStyles({
    root: {
      "&  small>svg": {
        fontSize: 12,
      },
    },
  });

export default style;
