import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './app/screens/LoadingScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import NotificationScreen from './app/screens/NotificationScreen';
import AddItemScreen from './app/screens/AddItemScreen';
import SmsScreen from './app/screens/SmsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import CheckoutScreen from './app/screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { height: 0, backgroundColor: 'rgba(0,0,0,0)' }, headerTintColor: 'rgba(255,255,255,0)' }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SmsScreen" component={SmsScreen} />
        <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
