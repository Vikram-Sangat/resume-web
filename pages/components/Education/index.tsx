/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../../constants/resume";
import Title from "../Title";

const Education: React.FC = () => (
  <View style={styles.section}>
    <Title>Education</Title>
    <View style={styles.skills}>
      {Resume.education.map((r, i) => (
        <View key={i} style={styles.skills}>
          <Text key={r.duration} style={styles.degree}>
            {r.degree}
          </Text>
          <Text key={r.duration} style={styles.university}>
            {r.university}
          </Text>
          <Text key={r.duration} style={styles.duration}>
            {r.duration}
          </Text>
        </View>
      ))}
    </View>
  </View>
);
export default Education;
