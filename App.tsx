
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// Components
import SplashScreen from './src/components/SplashScreen.js';
import LoginScreen from './src/components/LoginScreen.js';
import RegisterScreen from './src/components/RegisterScreen';
import HomePage from './src/components/HomePage';
import AboutScreen from './src/components/AboutScreen';
import SettingsScreen from './src/components/SettingsScreen.js';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splash">
        <Drawer.Screen name="Splash" component={SplashScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        
      </Drawer.Navigator>
   
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
