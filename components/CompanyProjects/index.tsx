/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import Bullet from "../Bullet";

interface Props {
  data: any;
}
const CompanyProjects: React.FC<Props> = ({ data }) => {
  const { tasks, project } = data;
  return (
    <View style={styles.section}>
      <Text style={styles.project}>
        <strong>{project}</strong>{" "}
      </Text>
      {tasks.map((r: any, i: any) => (
        <Bullet key={i}>{r}</Bullet>
      ))}
    </View>
  );
};
export default CompanyProjects;
