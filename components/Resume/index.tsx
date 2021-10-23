import React, { useContext } from "react";
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
import { GlobalContext } from "../../constants/context";

interface Props extends WithStyles<typeof style>, Record<string, any> {}
const Container: React.FC<Props> = ({ classes }) => {
  const global = useContext(GlobalContext);
  return (
    <div className={classes.root}>
      <Page>
        <Header global={global} />
        <Overview />
        <Patents />
        <Skills />
        <Experience />
        <Projects />
        <Certification />
        <Achivement />
        <Education />
      </Page>
    </div>
  );
};
export default withStyleComponent(style, "Container")(Container);
