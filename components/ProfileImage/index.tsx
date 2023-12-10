import React, { useContext } from "react";
import { WithStyles } from "@mui/styles";
import { get } from "lodash-es";
import style from "./style";
import { GlobalContext } from "../../constants/context";
import { withStyleComponent } from "../../utils/style";
import { GRAVATAR, KEYMAPPING } from "../../constants/variables";

interface Props extends WithStyles<typeof style>, Record<string, any> {}
const ProfileImage: React.FC<Props> = ({ classes }) => {
  const global = useContext(GlobalContext);
  const name = get(global, KEYMAPPING.name, "") || "";
  return (
    <div className={classes.img}>
      <img src={GRAVATAR} alt={name} width={200} />
    </div>
  );
};
export default withStyleComponent(style, "ProfileImage")(ProfileImage);
