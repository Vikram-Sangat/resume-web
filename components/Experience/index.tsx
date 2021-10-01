import React from "react";
import { WithStyles } from "@material-ui/core";
import clsx from "clsx";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import SectionHeader from "../SectionHeader";
import SectionBody from "../SectionBody";
import { Resume } from "../../constants/resume";
import { calculateDuration } from "../../constants/date";
import BulletList from "../BulletList";
import Bullet from "../Bullet";

type Props = WithStyles<typeof style>;
const Overview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SectionHeader>Experience</SectionHeader>
      <SectionBody>
        <div>
          {Resume.experience.map((p, i) => (
            <div
              key={p.title}
              className={clsx(classes.details, {
                [classes.lastDetail]: i === Resume.experience.length - 1,
              })}
            >
              <span className={classes.title}>{p.title}</span>
              <div>
                <span className={classes.company}>{p.company}</span> -{" "}
                <span className={classes.area}>{p.area}</span>
                <span
                  className={clsx(classes.duration, {
                    [classes.lastDuration]: i === Resume.experience.length - 1,
                  })}
                >
                  {calculateDuration(p)}
                </span>
              </div>
              <BulletList>
                {p.tasks.map((t) => (
                  <Bullet key={t}>{t}</Bullet>
                ))}
              </BulletList>
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
