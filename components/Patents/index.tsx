import React from "react";
import { WithStyles } from "@material-ui/core";
import style from "./style";
import { withStyleComponent } from "../../utils/style";
import SectionHeader from "../SectionHeader";
import BulletList from "../BulletList";
import Bullet from "../Bullet";
import SectionBody from "../SectionBody";
import { Resume } from "../../constants/resume";
import Link from "../Link";

type Props = WithStyles<typeof style>;
const Overview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SectionHeader>Patents</SectionHeader>
      <SectionBody>
        <BulletList>
          {Resume.patents.map((p) => (
            <Bullet key={p.link}>
              {p.title} -{" "}
              <Link href={p.url} underline external>
                {p.link}
              </Link>
            </Bullet>
          ))}
        </BulletList>
      </SectionBody>
    </div>
  );
};
export default withStyleComponent(style, "Overview")(Overview);
