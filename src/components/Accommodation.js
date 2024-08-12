import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const StudentCard = ({ student }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.cardKey}>Student Name:</Text>
        <Text style={styles.cardValue}>{student.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardKey}>Need Accommodation?</Text>
        <Text style={styles.cardValue}>Yes/No</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardKey}>Recommend Part-time?</Text>
        <Text style={styles.cardValue}>Yes/No</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Email</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Accommodation = () => {
  const students = [
    { name: "Student 1", needAccommodation: true, recommendPartTime: false },
    { name: "Student 2", needAccommodation: false, recommendPartTime: true },
    { name: "Student 3", needAccommodation: true, recommendPartTime: true },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> List of Accommodation </Text>
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
    backgroundColor: "#eceffb",
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
    borderRadius: 5,
    shadowOpacity: 0.1,
    elevation: 2,
    shadowOffset: 2,
    backgroundColor: "#FFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  cardKey: {
    fontWeight: "300",
  },
  cardValue: {
    textAlign: "right",
  },
  btnContainer: {},
  line: {
    height: 1,
    backgroundColor: "black",
    opacity: 0.1,
  },
  btnAction: {
    backgroundColor: "red",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#5E83FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Accommodation;
