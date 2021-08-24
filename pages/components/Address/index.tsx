/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text, View, Image, Link } from "@react-pdf/renderer";
import styles from "./style";
import Resume from "../../../constants/resume";

const Address: React.FC = () => (
  <View style={styles.section}>
    <View style={styles.textContainer}>
      <View style={styles.icons}>
        <Image source="/mail.png" style={styles.icon} />
      </View>
      <Link src={`mailto:${Resume.email}`} style={styles.text}>
        {Resume.email}
      </Link>
    </View>
    <View style={styles.textContainer}>
      <View style={styles.icons}>
        <Image source="/phone.png" style={styles.icon} />
      </View>
      <Text style={styles.text}> {Resume.mobile}</Text>
    </View>
    <View style={styles.textContainer}>
      <View style={styles.icons}>
        <Image source="/marker.png" style={styles.icon} />
      </View>
      <Text style={styles.text}> {Resume.address}</Text>
    </View>
    <View style={styles.textContainer}>
      <View style={styles.icons}>
        <Image source="/linkedin.png" style={styles.icon} />
      </View>
      <Link src={Resume.linkedIn} style={styles.text}>
        {Resume.linkedIn}
      </Link>
    </View>
    <View style={styles.textContainer}>
      <View style={styles.icons}>
        <Image source="/github.png" style={styles.icon} />
      </View>
      <Link src={Resume.github} style={styles.text}>
        {Resume.github}
      </Link>
    </View>
  </View>
);
export default Address;
