import { createStyles, Theme } from "@material-ui/core";
import {
  PAGE_HEIGHT,
  PAGE_PADDING_PT,
  PAGE_FONT_SIZE,
  PAGE_WIDTH,
} from "../../constants/variables";

const style = (theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        fontSize: PAGE_FONT_SIZE,
        "@media print": {
          width: PAGE_WIDTH,
          padding: PAGE_PADDING_PT,
          disply: "block",
          fontSize: PAGE_FONT_SIZE,
          minHeight: PAGE_HEIGHT,
          backgroundColor: "grey",
          margin: 0,
        },
      },
    },
    root: {},
  });

export default style;
