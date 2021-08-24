import React from "react";
import { View } from "@react-pdf/renderer";
import styles from "./style";
import WorkExperience from "../WorkExperience";
import Skills from "../Skills";
import Patents from "../Patents";
import Education from "../Education";
import Certifications from "../Certification";
import Interests from "../Interests";
import Achievements from "../Achievements";

const Details: React.FC = () => (
  <View style={styles.section}>
    <View style={styles.leftContainer}>
      <WorkExperience />
    </View>
    <View style={styles.rightContainer}>
      <Skills />
      <View style={styles.separator} />
      <Patents />
      <View style={styles.separator} />
      <Education />
      <View style={styles.separator} />
      <Certifications />
      <View style={styles.separator} />
      <Achievements />
      <View style={styles.separator} />
      <Interests />
    </View>
  </View>
);
export default Details;
