import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#5E83FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  signInText: {
    color: '#5E83FB',
  },
});

export default RegisterScreen;
