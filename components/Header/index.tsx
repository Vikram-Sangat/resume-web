import React, { useContext } from "react";
import { WithStyles } from "@mui/styles";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import ContactDetails from "../ContactDetails";
import IntroHero from "../IntroHero";
import ExternalLinks from "../ExternalLinks";
import { GlobalContext } from "../../constants/context";

interface Props extends WithStyles<typeof style>, Record<string, any> {}
const Header: React.FC<Props> = ({ classes }) => {
  const global = useContext(GlobalContext);
  return (
    <div className={classes.headerRoot}>
      <IntroHero global={global} />
      <ContactDetails />
      <ExternalLinks />
    </div>
  );
};
export default withStyleComponent(style, "Header")(Header);
