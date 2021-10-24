import React, { useContext } from "react";
import { Hidden, WithStyles } from "@material-ui/core";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import { get } from "lodash-es";
import style from "./style";

import { withStyleComponent } from "../../utils/style";
import Link from "../Link";
import { GlobalContext } from "../../constants/context";
import { KEYMAPPING } from "../../constants/variables";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  const global = useContext(GlobalContext);
  const contactDetails = get(global, KEYMAPPING.contact_details, []) || [];
  let phone = {};
  let email = {};
  let location = {};
  contactDetails.forEach((c) => {
    if (c.type === "phone") {
      phone = c;
    }
    if (c.type === "email") {
      email = c;
    }
    if (c.type === "location") {
      location = c;
    }
  });
  return (
    <div className={classes.root}>
      <a href={`${phone.link}`} title="Contact Vikram">
        <Phone className={classes.icon} /> {phone.details}
      </a>
      <span>
        <Hidden smDown>
          <span>-</span>{" "}
        </Hidden>
        <u>
          <Link href={`${email.link}`} title="Contact Vikram">
            <Email className={classes.icon} /> {email.details}
          </Link>
        </u>
      </span>
      <span>
        <Hidden smDown>
          <span>-</span>
        </Hidden>
        <span>
          <LocationOn className={classes.icon} /> {location.details}
        </span>
      </span>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
