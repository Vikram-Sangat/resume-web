import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import Overview from "../Overview";
import Patents from "../Patents";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Header from "../Header";
import Certification from "../Certification";
import Achivement from "../Achivement";
import Education from "../Education";
import Page from "../Page";

type Props = WithStyles<typeof style>;
const Container: React.FC<Props> = ({ classes }) => {
  return (
    <span className={classes.root}>
      <Page>
        <Header />
        <Overview />
        <Patents />
        <Skills />
        <Experience />
        <Projects />
        <Certification />
        <Achivement />
        <Education />
      </Page>
    </span>
  );
};
export default withStyleComponent(style, "Container")(Container);
