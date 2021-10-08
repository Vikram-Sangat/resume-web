import React from "react";
import { Typography, WithStyles, Box } from "@material-ui/core";
import Image from "next/image";
import { get } from "lodash-es";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import { Resume } from "../../constants/resume";

type Props = WithStyles<typeof style> | Record<string, any>;
const Container: React.FC<Props> = ({ classes, global }) => {
  const profileImage = get(global, "profile.favicon.url", "") || "";
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <img src={profileImage} alt="hero" />{" "}
      </div>
      <Typography className={classes.title}>{Resume.name}</Typography>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
