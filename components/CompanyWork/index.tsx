/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./style";
import CompanyWorkList from "../CompanyWorkList";

interface Props {
  data: any;
}

const CompanyWork: React.FC<Props> = ({ data }) => {
  const { description = "" } = data;
  return (
    <View style={styles.section}>
      {description !== "" && (
        <Text style={styles.description}>{description}</Text>
      )}
      <CompanyWorkList data={data} />
    </View>
  );
};
export default CompanyWork;
