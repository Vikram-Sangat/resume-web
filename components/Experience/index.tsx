import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import SectionHeader from "../SectionHeader";
import SectionBody from "../SectionBody";
import { Resume } from "../../constants/resume";
import { calculateDuration } from "../../constants/date";

type Props = WithStyles<typeof style>;
const Overview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SectionHeader>Experience</SectionHeader>
      <SectionBody>
        <div>
          {Resume.experience.map((p) => (
            <div key={p.title} className={classes.details}>
              <span className={classes.title}>{p.title}</span>
              <div>
                <span className={classes.company}>{p.company}</span> -{" "}
                <span className={classes.area}>{p.area}</span>
                <span className={classes.duration}>{calculateDuration(p)}</span>
              </div>
              <ul>
                {p.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <small>
                Technologies used : <strong>{p.techStack.join(", ")}</strong>{" "}
              </small>
            </div>
          ))}
        </div>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
