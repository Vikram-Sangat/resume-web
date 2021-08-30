import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  description: {
    fontSize: 10,
    marginBottom: 4,
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
