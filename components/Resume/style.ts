import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
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
          display: "block",
          fontSize: PAGE_FONT_SIZE,
          minHeight: PAGE_HEIGHT,
          margin: 0,
        },
      },
    },
    root: {},
  });

export default style;
