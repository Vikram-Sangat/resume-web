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
      <SectionHeader>Patents</SectionHeader>
      <SectionBody>
        <ul>
          {Resume.patents.map((p) => (
            <li key={p.link}>
              {p.title} -{" "}
              <a href={p.url} target="__blank" title={p.title}>
                <u>{p.link}</u>
              </a>
            </li>
          ))}
        </ul>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
