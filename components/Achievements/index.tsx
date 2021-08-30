/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../constants/resume";
import Title from "../Title";

const Achievements: React.FC = () => (
  <View style={styles.section}>
    <Title>Achievements</Title>
    <View style={styles.skills}>
      {Resume.awards.map((r: any, i: any) => (
        <View key={i} style={styles.skills}>
          <Text key={r.title} style={styles.degree}>
            {r.title}
          </Text>
          <Text key={r.issuer} style={styles.university}>
            ({r.issuer})
          </Text>
        </View>
      ))}
    </View>
  </View>
);
export default Achievements;
