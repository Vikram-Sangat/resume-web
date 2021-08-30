import { StyleSheet } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  leftContainer: {
    paddingRight: 4,
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  rightContainer: {
    paddingLeft: 4,
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  separator: {
    marginBottom: 4,
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
