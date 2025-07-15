import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name={'Login'} component={Login} />
         <Stack.Screen name={'Signup'} component={Signup} />
         <Stack.Screen name={'Home'} component={Home} />
           </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})