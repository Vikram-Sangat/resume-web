import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import Page from "../Page";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <span className={classes.root}>
      I am resume
      <Page />
    </span>
  );
};
export default withStyleComponent(style, "Container")(Container);
