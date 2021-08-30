import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    marginRight: 8,
  },
  icons: {
    marginRight: 4,
  },
  icon: {
    width: 16,
  },
  section: {
    display: "flex",
    marginBottom: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
});
export default styles;
