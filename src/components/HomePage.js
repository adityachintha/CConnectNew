// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native';

// const HomePage = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the HomePage</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   });

// export default HomePage
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
      <View style={styles.btnContainer}>
        <View style={styles.btnAction}/>
          <Button  title="Email" onPress={() => { /* Email action */ }} />
        <View style={styles.line} />
          <Button title="Call" onPress={() => { /* Call action */ }} />
        </View>
    </View>
  );
};

const HomePage = () => {
  const students = [
    { name: 'Student 1', needAccommodation: true, recommendPartTime: false },
    { name: 'Student 2', needAccommodation: false, recommendPartTime: true },
    { name: 'Student 3', needAccommodation: true, recommendPartTime: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of Students</Text>
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20,
    
    textAlign:'left',
  },
  card: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderWidth: 0.1,
    borderRadius: 5,
    shadowOpacity: 0.1,
    elevation:2,
    shadowOffset:2,
    backgroundColor:'#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardKey: {
    fontWeight: '300',
  },
  cardValue: {
    textAlign: 'right',
  },
  btnContainer: {
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  btnAction:{
    backgroundColor: "red",

  },
});

export default HomePage;