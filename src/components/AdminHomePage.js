import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const AdminHomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Admin Page</Text>
      <Text style={styles.subText}>
        Currently, we dont have any Admin workflow so please navigation back to
        student login or reload the app
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#757575",
  },
});

export default AdminHomePage;
