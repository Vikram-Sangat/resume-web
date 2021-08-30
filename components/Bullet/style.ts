import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_FONT } from "../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  task: {
    marginBottom: 2,
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  taskContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    width: "95%",
  },
});
export default styles;
