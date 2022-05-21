import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Home
import Home from './app/screens/danhSach';
//Chi tiet
import Enterprise from './app/screens/enterprise';
//
import User from './app/screens/user';

const Stack = createNativeStackNavigator();

export default class App  extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='front' screenOptions={{headerShown: true}}>
          <Stack.Screen name = "front" component = {Home} options={{headerShown: false}} />
          <Stack.Screen name = "enterprise" component = {Enterprise} options={{headerShown: false}} />
          <Stack.Screen name = "user" component = {User} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
