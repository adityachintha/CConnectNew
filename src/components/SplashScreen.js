import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Student.png")}
      ></Image>
      <Text style={styles.text}>Class Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#5E83FB",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
  image: {
    alignContent: "center",
  },
});

export default SplashScreen;
