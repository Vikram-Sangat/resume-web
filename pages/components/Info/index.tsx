import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";

import styles from "./style";
import Resume from "../../../constants/resume";

const Info: React.FC = () => (
  <View style={styles.section}>
    <View style={styles.infoSection}>
      <Text style={styles.name}>{Resume.name}</Text>
      <Text style={styles.position}>{Resume.position}</Text>
      <Text style={styles.description}>{Resume.description}</Text>
    </View>
    <View style={styles.imageSection}>
      <View style={styles.image}>
        <Image src={Resume.profile} style={styles.img} />
      </View>
    </View>
  </View>
);
export default Info;
