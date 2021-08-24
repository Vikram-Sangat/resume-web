import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

import styles from "./style";
import Info from "../Info";
import Address from "../Address";
import Details from "../Details";

const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Info />
      </View>
      <View style={styles.section}>
        <Address />
      </View>
      <View style={styles.hr} />
      <View style={styles.section}>
        <Details />
      </View>
      <Text
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        style={styles.pageNumber}
        fixed
      />
    </Page>
  </Document>
);
export default MyDocument;
