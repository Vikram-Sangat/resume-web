import React from "react";
import { WithStyles } from "@material-ui/core";
import { GitHub, Language, LinkedIn } from "@material-ui/icons";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import { LINKEDIN_URL, URL, GITHUB_URL } from "../../constants/variables";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <span className={classes.root}>
      <a href={LINKEDIN_URL} target="__blank" title="Vikrams Profile">
        <LinkedIn />
      </a>
      <a href={GITHUB_URL} target="__blank" title="Vikram's Github">
        <GitHub />
      </a>
      <a href={URL} target="__blank" title="Vikram's Website">
        <Language />
      </a>
    </span>
  );
};
export default withStyleComponent(style, "Container")(Container);
