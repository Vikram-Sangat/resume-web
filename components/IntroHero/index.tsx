import React from "react";
import { Typography, WithStyles, Box } from "@material-ui/core";
import Image from "next/image";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import ExternalLinks from "../ExternalLinks";
import { Resume } from "../../constants/resume";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <Image
          src="/apple-icon-180x180.png"
          alt="hero"
          width={100}
          height={100}
        />{" "}
      </div>
      <Typography className={classes.title}>
        {Resume.name}
        <ExternalLinks />
      </Typography>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
