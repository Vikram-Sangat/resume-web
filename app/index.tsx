import React from "react";
import Resume from "../components/Resume";
import Theme from "../components/Theme";

const App: React.FC<Record<string, any>> = ({ global }) => {
  return (
    <Theme>
      <Resume global={global} />;
    </Theme>
  );
};
export default App;
