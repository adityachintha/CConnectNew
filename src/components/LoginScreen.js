import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const mockCredentials = {
    Student: { email: "Student@gmail.com", password: "Student123" },
    Admin: { email: "Admin@gmail.com", password: "Admin123" },
  };

  const handleNext = () => {
    const isAuthorized =
      email === mockCredentials[role].email &&
      password === mockCredentials[role].password;

    if (isAuthorized) {
      if (role === "Admin") {
        Alert.alert("Login Successful");
        navigation.navigate("Admin");
      } else if (role === "Student") {
        Alert.alert("Login Successful");
        navigation.replace("Drawer");
      } else {
        Alert.alert("Invalid Credentials");
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Choose your role to Login</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Student" && styles.selectedRoleButton,
          ]}
          onPress={() => setRole("Student")}
        >
          <Text
            style={
              role === "Student" ? styles.selectedRoleText : styles.roleText
            }
          >
            Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Admin" && styles.selectedRoleButton,
          ]}
          onPress={() => setRole("Admin")}
        >
          <Text
            style={role === "Admin" ? styles.selectedRoleText : styles.roleText}
          >
            Admin
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 32,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRoleButton: {
    backgroundColor: "#5E83FB",
  },
  roleText: {
    fontSize: 16,
    color: "#000",
  },
  selectedRoleText: {
    fontSize: 16,
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#5E83FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#5E83FB",
    fontSize: 14,
    marginTop: 16,
  },
});

export default LoginScreen;
