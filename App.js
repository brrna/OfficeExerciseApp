import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//pages
import Router from "./src/pages/router/Router"
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <Router />
        </GestureHandlerRootView>
      </NavigationContainer>
  )
}

export default App;