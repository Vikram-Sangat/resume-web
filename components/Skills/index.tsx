import React from "react";
import { WithStyles } from "@mui/styles";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import SectionHeader from "../SectionHeader";
import SectionBody from "../SectionBody";
import { Resume } from "../../constants/resume";

type Props = WithStyles<typeof style>;
const Overview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SectionHeader>Skills</SectionHeader>
      <SectionBody classes={{ root: classes.body }}>
        <div className={classes.section}>
          <header> Languages </header>
          <ul>
            {Resume.languages.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className={classes.section}>
          <header> Frameworks </header>
          <ul>
            {Resume.frameworks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className={classes.section}>
          <header> Databases </header>
          <ul>
            {Resume.databases.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className={classes.section}>
          <header> Tools </header>
          <ul>
            {Resume.tools.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
