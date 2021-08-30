/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../constants/resume";
import Title from "../Title";

const Patents: React.FC = () => (
  <View style={styles.section}>
    <Title>Patents</Title>
    <View style={styles.skills}>
      {Resume.patents.map((r) => (
        <React.Fragment key={r.link}>
          <Text key={r.link} style={styles.patent}>
            &#8226; {r.title}
          </Text>
          <Link
            src={`https://patents.google.com/patent/${r.link}`}
            style={styles.link}
          >
            {r.link}
          </Link>
        </React.Fragment>
      ))}
    </View>
  </View>
);
export default Patents;
