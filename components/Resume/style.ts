import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_COLOR, PRIMARY_FONT } from "../../constants/variables";
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
  sectionFooter: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hr: {
    display: "flex",
    margin: "4px 0px",
    borderBottom: `2px solid ${PRIMARY_COLOR}`,
  },
  space: {
    margin: 8,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { marginBottom: 2, fontSize: 10, fontFamily: PRIMARY_FONT },
  textBig: { marginBottom: 2, fontSize: 12, fontFamily: PRIMARY_FONT },
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
