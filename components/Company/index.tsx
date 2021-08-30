/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import { calculateDuration } from "../../constants/date";
import CompanyWork from "../CompanyWork";

interface Props {
  data: any;
}
const Company: React.FC<Props> = ({ data }) => (
  <View style={styles.section}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.name}>{data.company}</Text>
    <View style={styles.durationContainer}>
      <Text style={styles.duration}>{calculateDuration(data)}</Text>
      <Text style={styles.area}>{data.area}</Text>
    </View>
    <CompanyWork data={data} />
  </View>
);
export default Company;
