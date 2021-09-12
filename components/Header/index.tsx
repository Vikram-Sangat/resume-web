import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import ContactDetails from "../ContactDetails";
import IntroHero from "../IntroHero";

type Props = WithStyles<typeof style>;
const Header: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <IntroHero />
      <ContactDetails />
      <hr />
    </div>
  );
};
export default withStyleComponent(style, "Header")(Header);
