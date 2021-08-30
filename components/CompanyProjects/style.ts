import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  skills: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  task: {
    marginBottom: 1,
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  project: {
    marginBottom: 1,
    fontWeight: "bold",
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  section: {
    display: "flex",
    marginBottom: 4,
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
});
export default styles;
