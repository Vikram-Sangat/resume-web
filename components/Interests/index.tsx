/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../constants/resume";
import Title from "../Title";

const Interests: React.FC = () => (
  <View style={styles.section}>
    <Title>Interests</Title>
    <View style={styles.skills}>
      {Resume.interests.map((r) => (
        <Text key={r} style={styles.skill}>
          {r}
        </Text>
      ))}
    </View>
  </View>
);
export default Interests;
