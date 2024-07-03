import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Class Connect</Text>
      <View style={styles.section}>
        <Text style={styles.subheader}>Developers</Text>
        <Text style={styles.text}>Aditya Chintha (Leader) (200595829)</Text>
        <Text style={styles.text}>Nazeef Ahmad Farooqui (200590966)</Text>
        <Text style={styles.text}>Jeel Bhaskarbhai Patel (200536462)</Text>
        <Text style={styles.text}>Nandini Mihirkumar Patel (200596236)</Text>
        <Text style={styles.text}>Simrandeep Kaur Kaur (200551970)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    alignItems: "left",
    justifyContent: "left",
  },
  h1: {
    fontSize: 24,
  },
  section: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default AboutScreen;
