import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";

const Bullet: React.FC = ({ children }) => (
  <View style={styles.taskContainer}>
    <View>
      <Text style={styles.task}> &#8226; </Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.task}> {children}</Text>
    </View>
  </View>
);
export default Bullet;
