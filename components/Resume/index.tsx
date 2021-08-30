import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

import styles from "./style";
import Info from "../Info";
import Address from "../Address";
import Details from "../Details";
import Title from "../Title";

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
      <View style={styles.section}>
        <Title>Declaration</Title>
        <Text style={styles.textBig}>
          I hereby declare that the particulars given herein are true to the
          best of my knowledge and belief.
        </Text>
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.sectionFooter}>
          <View>
            <Text style={styles.text}>Date:</Text>
            <Text style={styles.text}>Place:</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.text}>Signature</Text>
            <Text style={styles.text}>(Vikram Sangat)</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
