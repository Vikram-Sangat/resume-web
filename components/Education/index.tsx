import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import SectionHeader from "../SectionHeader";
import SectionBody from "../SectionBody";
import { Resume } from "../../constants/resume";

type Props = WithStyles<typeof style>;
const Overview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SectionHeader>Education</SectionHeader>
      <SectionBody>
        <ul>
          {Resume.education.map((p) => (
            <li key={p.degree}>
              <strong>{p.degree}</strong>
              <div>
                <i>{p.university}</i>
              </div>
              <div>
                <small>
                  <strong>{p.duration}</strong>
                </small>
              </div>
            </li>
          ))}
        </ul>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
