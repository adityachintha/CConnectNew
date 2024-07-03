import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name - Write app summary here</Text>
      <View style={styles.section}>
        <Text style={styles.subheader}>Developers</Text>
        <Text style={styles.text}>Name 1</Text>
        <Text style={styles.text}>Name 2</Text>
        <Text style={styles.text}>Name 3</Text>
        <Text style={styles.text}>Name 4</Text>
        <Text style={styles.text}>Name 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  section: {
    flexDirection: 'column', // Changed to column
    justifyContent: 'flex-start', // Align items at the start
    paddingLeft: 10,
  },
});

export default AboutScreen;
