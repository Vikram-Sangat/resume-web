import React from "react";
import { Hidden, WithStyles } from "@material-ui/core";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import { Resume } from "../../constants/resume";
import Link from "../Link";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <a href={`tel:${Resume.mobile}`} title="Contact Vikram">
        <Phone className={classes.icon} /> {Resume.mobile}
      </a>{" "}
      <span>
        <Hidden smDown>
          <span>-</span>{" "}
        </Hidden>
        <u>
          <Link href={`mailto:${Resume.email}`} title="Contact Vikram">
            <Email className={classes.icon} /> {Resume.email}
          </Link>
        </u>
      </span>
      <span>
        <Hidden smDown>
          <span>-</span>
        </Hidden>
        <span>
          <LocationOn className={classes.icon} /> {Resume.address}
        </span>
      </span>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
