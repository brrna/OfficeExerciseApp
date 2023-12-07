import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';//sarmalama
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

//pages
import Router from "./src/pages/router/Router"

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Router />
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;