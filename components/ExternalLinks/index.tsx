import React from "react";
import { WithStyles } from "@material-ui/core";
import { GitHub, Language, LinkedIn } from "@material-ui/icons";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import { LINKEDIN_URL, URL, GITHUB_URL } from "../../constants/variables";
import Link from "../Link";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <span className={classes.root}>
      <Link href={LINKEDIN_URL} target="__blank" title="Vikrams Profile">
        <LinkedIn />
      </Link>
      <Link href={GITHUB_URL} target="__blank" title="Vikram's Github">
        <GitHub />
      </Link>
      <Link href={URL} target="__blank" title="Vikram's Website">
        <Language />
      </Link>
    </span>
  );
};
export default withStyleComponent(style, "Container")(Container);
