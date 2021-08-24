/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../../constants/resume";
import Title from "../Title";

const WorkExperience: React.FC = () => (
  <View style={styles.section}>
    <Title>Work Experience</Title>
    <Text>{Resume.address}</Text>
  </View>
);
export default WorkExperience;
