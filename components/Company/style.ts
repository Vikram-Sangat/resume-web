import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  name: {
    marginBottom: 1,
    fontSize: 11,
    fontFamily: PRIMARY_FONT,
  },
  title: {
    marginBottom: 1,
    textTransform: "capitalize",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: PRIMARY_FONT,
  },
  durationContainer: {
    display: "flex",
    marginBottom: 2,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  area: {
    fontSize: 9,
    marginRight: 8,
    fontStyle: "italic",
    opacity: 0.7,
    fontFamily: PRIMARY_FONT,
  },
  duration: {
    fontSize: 9,
    fontStyle: "italic",
    fontFamily: PRIMARY_FONT,
  },
  section: {
    display: "flex",
    paddingRight: 8,
    marginBottom: 9,
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
});
export default styles;
