import React from "react";
import { Text } from "@react-pdf/renderer";
import styles from "./style";

const Title: React.FC = ({ children }) => (
  <Text style={styles.text}> {children}</Text>
);
export default Title;
