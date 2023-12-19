import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//pages
import Router from "./src/pages/router/Router"
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App;