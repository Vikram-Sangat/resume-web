import { StyleSheet } from "@react-pdf/renderer";
import { PRIMARY_COLOR, PRIMARY_FONT } from "../../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  position: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Trebuchet",
    marginBottom: 8,
  },
  description: {
    fontSize: 10,
    fontFamily: PRIMARY_FONT,
  },
  section: {
    display: "flex",
    marginBottom: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  infoSection: {
    width: "85%",
    paddingRight: 8,
  },
  imageSection: {
    width: "15%",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    borderRadius: "50%",
    objectFit: "contain",
    border: `2px solid ${PRIMARY_COLOR}`,
    padding: 4,
  },
  img: {
    borderRadius: "50%",
  },
});
export default styles;
