import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card2}>
        <Text style={styles.text}>Admin Login</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Student Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e3e8f8",
  },
  card2: {
    flexDirection: "column",
    width: "70%",
    height: "30%",
    padding: 20,
    marginBottom: 40,
    borderWidth: 0.1,
    borderRadius: 10,
    shadowOpacity: 0.1,
    elevation: 2,
    shadowOffset: 2,
    backgroundColor: "#514d4d",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "column",
    width: "70%",
    height: "30%",
    padding: 20,
    marginBottom: 40,
    borderWidth: 0.1,
    borderRadius: 10,
    shadowOpacity: 0.1,
    elevation: 2,
    shadowOffset: 2,
    backgroundColor: "#5E83FB",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
});

export default SplashScreen;
