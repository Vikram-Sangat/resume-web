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
      <SectionHeader>Achivements</SectionHeader>
      <SectionBody>
        <ul>
          {Resume.awards.map((p) => (
            <li key={p.title}>
              {p.title} -{" "}
              <small>
                <i>{p.issuer}</i>
              </small>
            </li>
          ))}
        </ul>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
