import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Onboarding = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Login"); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Onboarding Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUpText} onPress={handleNext}>
          Go to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
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
    fontSize: 16,
  },
  signUpText: {
    color: "#5E83FB",
  },
});

export default Onboarding;
