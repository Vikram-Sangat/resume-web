import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_COLOR } from "../../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 24,
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
  },
  hr: {
    display: "flex",
    margin: "4px 0px",
    borderBottom: `2px solid ${PRIMARY_COLOR}`,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
export default styles;
