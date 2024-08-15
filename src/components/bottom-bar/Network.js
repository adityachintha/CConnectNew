import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const StudentCard = ({ student }) => {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <Text style={styles.subText}>Student Name:</Text>
        <Text style={styles.text}>{student.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subText}>Need Accommodation?</Text>
        {student.needAccommodation ? (
          <Image source={require("../../../assets/check.png")} />
        ) : (
          <Image source={require("../../../assets/slash.png")} />
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.subText}>Recommend Part-time?</Text>

        {student.recommendPartTime ? (
          <Image source={require("../../../assets/check.png")} />
        ) : (
          <Image source={require("../../../assets/slash.png")} />
        )}
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>DM</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subSubText}>Onboarded on MM/DD/YYYY</Text>
    </View>
  );
};

const Network = () => {
  const students = [
    { name: "Aditya", needAccommodation: true, recommendPartTime: false },
    { name: "Nazeef", needAccommodation: false, recommendPartTime: true },
    { name: "Simran", needAccommodation: true, recommendPartTime: true },
    { name: "Nandini", needAccommodation: true, recommendPartTime: true },
    { name: "Jeel", needAccommodation: true, recommendPartTime: true },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> List of Networks </Text>
        {students.map((studentDetails, index) => (
          <StudentCard key={index} student={studentDetails} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    borderWidth: 0.1,
    borderRadius: 10,
    shadowOpacity: 0.2,
    elevation: 2,
    shadowOffset: 2,
    backgroundColor: "#FFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignContent: "center",
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  subText: {
    fontWeight: "300",
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
  },
  line: {
    height: 1,
    backgroundColor: "black",
    opacity: 0.1,
  },
  btnAction: {
    backgroundColor: "red",
  },
  primaryBtn: {
    width: "48%",
    height: 40,
    backgroundColor: "#5E83FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10,
  },
  secondaryBtn: {
    width: "48%",
    height: 40,
    backgroundColor: "#E6EBFD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryText: {
    color: "#5E83FB",
    fontSize: 16,
    fontWeight: "700",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subSubText: {
    fontSize: 12,
    fontWeight: "200",
    textAlign: "center",
  },
});

export default Network;
