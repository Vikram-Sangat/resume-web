import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import {
  PAGE_WIDTH,
  PAGE_PADDING_PT,
  PAGE_FONT_SIZE,
  PAGE_HEIGHT,
} from "../../constants/variables";

const style = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.toPt(2),
      "@media print": {
        width: PAGE_WIDTH,
        padding: PAGE_PADDING_PT,
        paddingBottom: theme.toPt(3),
        display: "block",
        fontSize: PAGE_FONT_SIZE,
        minHeight: PAGE_HEIGHT,
        margin: 0,
      },
    },
  });

export default style;
