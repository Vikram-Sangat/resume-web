import React, { useContext } from "react";
import Resume from "../components/Resume";
import Theme from "../components/Theme";
import { GlobalContext } from "../constants/context";

const App: React.FC<Record<string, any>> = () => {
  const global = useContext(GlobalContext);
  return (
    <Theme>
      <Resume global={global} />;
    </Theme>
  );
};
export default App;
