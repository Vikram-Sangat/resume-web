import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_COLOR, PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    marginBottom: 4,
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
    padding: "4px 8px",
    lineHeight: 1.2,
    border: `1px solid ${PRIMARY_COLOR}`,
    borderColor: PRIMARY_COLOR,
    borderRadius: 4,
    marginRight: 4,
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
