import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const Data = [
  {
    id: "1",
    image: require("../../assets/bro.png"),
    title: "Search Jobs, Accommodations",
    description:
      "No more stress!Search for jobs and accommodations with hassle-free",
  },
  {
    id: "2",
    image: require("../../assets/bro2.png"),
    title: "Network and Connect",
    description:
      "Connect with your classmates, to direct message or for a coffee",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image}></Image>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    navigation.navigate("Login");
  };
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.dotContainer}>
        {Data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.skipButton}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    // maxHeight: 800,
  },
  slide: {
    alignItems: "center",
    width: width,
    paddingHorizontal: 20,
    marginTop: 150,
  },
  image: {
    height: height * 0.3,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  dotContainer: {
    flexDirection: "row",
    // marginTop: 5,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "#d3d3d3",
    margin: 8,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: "#5E83FB",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 150,
    marginBottom: 50,
    width: width * 0.8,
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#5E83FB",
  },
  nextButton: {
    padding: 10,
    backgroundColor: "#5E83FB",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  nextText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Onboarding;
