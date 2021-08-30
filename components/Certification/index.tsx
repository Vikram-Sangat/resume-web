/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../constants/resume";
import Title from "../Title";

const Certifications: React.FC = () => (
  <View style={styles.section}>
    <Title>Certifications</Title>
    <View style={styles.skills}>
      {Resume.certifications.map((r: any, i: any) => (
        <View key={i} style={styles.skills}>
          <Text key={r.title} style={styles.degree}>
            {r.title}
          </Text>
          <Link key={r.issuer} style={styles.university} src={r.link}>
            {r.issuer}
          </Link>
        </View>
      ))}
    </View>
  </View>
);
export default Certifications;
