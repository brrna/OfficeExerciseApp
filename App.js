import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//pages
import Router from "./src/pages/router/Router"
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/context/ThemeContext';
import { TimerContextProvider } from './src/context/TimerContext';

function App() {

  return (
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeContextProvider>
            <TimerContextProvider>
              <Router />
            </TimerContextProvider>
          </ThemeContextProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
  )
}

export default App;