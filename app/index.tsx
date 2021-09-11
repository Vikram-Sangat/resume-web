import React from "react";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Lato",
  fonts: [
    { src: "/lato/Lato-Regular.ttf" }, // font-style: normal, font-weight: normal
    { src: "/lato/Lato-Bold.ttf", fontWeight: 700 }, // font-style: normal, font-weight: normal
    { src: "/lato/Lato-Italic.ttf", fontStyle: "italic" },
    { src: "/lato/Lato-BoldItalic.ttf", fontStyle: "italic", fontWeight: 700 },
  ],
});
Font.register({ family: "Verdana", src: "/Verdana.ttf" });
Font.register({ family: "Trebuchet", src: "/Trebuchet.ttf" });

const App: React.FC = () => {
  return <> My app</>;
};
export default App;
