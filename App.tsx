import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainPage from './main/core/MainPage';
import Home from './main/screens/Home';
import About from './main/screens/About';

const Stack = createStackNavigator();

export default function App() {
  const aprops: string = 'a prop'

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen 
          name="Home"
          component={ Home }
        />
        <Stack.Screen 
          name="Main Page"
          component={ MainPage }
        />
        <Stack.Screen
          name="About" 
          component={ About }
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <MainPage 
    //   aprops = { aprops }
    //   />
    // </View>
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
