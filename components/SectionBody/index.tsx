import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";

interface Props extends WithStyles<typeof style> {
  children: React.ReactNode;
}
const SectionBody: React.FC<Props> = ({ classes, children }) => {
  return <span className={classes.root}>{children}</span>;
};
export default withStyleComponent(style, "SectionBody")(SectionBody);
