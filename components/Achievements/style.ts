import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  skills: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  duration: {
    fontSize: 8,
    fontStyle: "italic",
    fontFamily: PRIMARY_FONT,
  },
  degree: {
    marginBottom: 4,
    fontSize: 11,
    fontWeight: "bold",
    fontFamily: PRIMARY_FONT,
  },
  university: {
    fontSize: 10,
    fontStyle: "italic",
    fontFamily: PRIMARY_FONT,
  },
  section: {
    display: "flex",
    marginBottom: 4,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
});
export default styles;
