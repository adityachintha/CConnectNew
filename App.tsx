import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import SplashScreen from "./src/components/SplashScreen.js";
import LoginScreen from "./src/components/LoginScreen.js";
import RegisterScreen from "./src/components/RegisterScreen";
import HomePage from "./src/components/HomePage";
import AboutScreen from "./src/components/AboutScreen";
import SettingsScreen from "./src/components/SettingsScreen.js";
import Onboarding from "./src/components/Onboarding.js";
import Accommodation from "./src/components/bottom-bar/Accommodation.js";
import Messages from "./src/components/bottom-bar/messages.js";
import Network from "./src/components/bottom-bar/Network.js";
import studentCourse from "./src/components/bottom-bar/studentCourse.js";
import AdminHomePage from "./src/components/AdminHomePage.js";
import Profile from "./src/components/Profile.js";
import Jobs from "./src/components/bottom-bar/Jobs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Network"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Network") {
            iconName = focused ? "people" : "people-outline";
          }else if (route.name === "Jobs") {
              iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Accommodation") {
            iconName = focused ? "bed" : "bed-outline";
          } else if (route.name === "Course") {
            iconName = focused ? "book" : "book-outline";
          }  else if (route.name === "Messages") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5E83FB",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Network"
        component={Network}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Tab.Screen
        name="Accommodation"
        component={Accommodation}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Tab.Screen
        name="Course"
        component={studentCourse}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerTitle: "", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Network">
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: true }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Network" component={Network} />
        <Stack.Screen
          name="Admin"
          options={{ headerShown: true }}
          component={AdminHomePage}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
