import { StyleSheet } from "@react-pdf/renderer";
import {
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_DARKER,
} from "../../../constants/variables";
// Create styles
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginTop: 4,
    color: PRIMARY_COLOR_DARKER,
    marginBottom: 8,
    fontFamily: "Verdana",
    fontWeight: 700,
    textTransform: "uppercase",
    textDecoration: "underline",
    textDecorationColor: PRIMARY_COLOR_DARK,
  },
});
export default styles;
