/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../constants/resume";
import Title from "../Title";
import Company from "../Company";

const WorkExperience: React.FC = () => (
  <View style={styles.section}>
    <Title>Work Experience</Title>
    {Resume.experience.map((e) => (
      <Company data={e} key={e.company} />
    ))}
  </View>
);
export default WorkExperience;
