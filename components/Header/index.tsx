import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import ContactDetails from "../ContactDetails";
import IntroHero from "../IntroHero";
import ExternalLinks from "../ExternalLinks";

interface Props extends WithStyles<typeof style>, Record<string, any> {}
const Header: React.FC<Props> = ({ classes, global }) => {
  return (
    <div className={classes.root}>
      <IntroHero global={global} />
      <ContactDetails />
      <ExternalLinks />
    </div>
  );
};
export default withStyleComponent(style, "Header")(Header);
