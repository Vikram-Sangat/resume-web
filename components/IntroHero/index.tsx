import React from "react";
import { Typography, WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import ExternalLinks from "../ExternalLinks";
import Resume from "../../constants/resume";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <span className={classes.root}>
      <Typography className={classes.title}>
        {Resume.name}
        <ExternalLinks />
      </Typography>
    </span>
  );
};
export default withStyleComponent(style, "Container")(Container);
