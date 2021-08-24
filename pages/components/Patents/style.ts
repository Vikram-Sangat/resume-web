import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  skills: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  patent: {
    marginBottom: 4,
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  link: {
    fontSize: 8,
    fontFamily: PRIMARY_FONT,
  },
  section: {
    display: "flex",
    marginBottom: 8,
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
});
export default styles;
