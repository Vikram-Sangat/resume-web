/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../../constants/resume";
import Title from "../Title";

const Skills: React.FC = () => (
  <View style={styles.section}>
    <Title>Skills</Title>
    <View style={styles.skills}>
      {Resume.skills.map((r) => (
        <Text key={r} style={styles.skill}>
          {r}
        </Text>
      ))}
    </View>
  </View>
);
export default Skills;
