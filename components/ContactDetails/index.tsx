import React from "react";
import { WithStyles } from "@material-ui/core";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import { Resume } from "../../constants/resume";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <a href={`tel:${Resume.mobile}`} title="Contact Vikram">
        <Phone className={classes.icon} /> {Resume.mobile}
      </a>
      <span>-</span>
      <u>
        <a href={`mailto:${Resume.email}`} title="Contact Vikram">
          <Email className={classes.icon} /> {Resume.email}
        </a>
      </u>
      <span>-</span>
      <span>
        <LocationOn className={classes.icon} /> {Resume.address}
      </span>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
