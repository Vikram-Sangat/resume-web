/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { View } from "@react-pdf/renderer";
import { isObject } from "lodash-es";
import styles from "./style";
import CompanyProjects from "../CompanyProjects";
import Bullet from "../Bullet";

interface Props {
  data: any;
}
const CompanyWorkList: React.FC<Props> = ({ data }) => {
  const { tasks } = data;
  return (
    <View style={styles.section}>
      {tasks.map((r: any, i: any) => {
        if (isObject(r)) {
          return <CompanyProjects key={i} data={r} />;
        }
        return <Bullet key={i}>{r}</Bullet>;
      })}
    </View>
  );
};
export default CompanyWorkList;
