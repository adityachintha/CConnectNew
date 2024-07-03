import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
      </TouchableOpacity>
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
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#5E83FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpText: {
    color: '#5E83FB',
  },
  forgotPasswordText: {
    color: '#5E83FB',
  },
});

export default LoginScreen;