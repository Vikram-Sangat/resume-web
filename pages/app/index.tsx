import React, { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Font } from "@react-pdf/renderer";
import Resume from "../components/Resume";

const PDFViewer = dynamic<any>(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer) as any,
  {
    ssr: false,
  }
);
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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onResize = useCallback(() => {
    setWidth(window.outerWidth - 100);
    setHeight(window.outerHeight - 100);
  }, []);

  useEffect(() => {
    setWidth(window.outerWidth - 100);
    setHeight(window.outerHeight - 100);
    window.addEventListener("resize", onResize, false);
  }, [onResize]);
  return (
    <PDFViewer width={width} height={height} showToolbar>
      <Resume />
    </PDFViewer>
  );
};
export default App;
