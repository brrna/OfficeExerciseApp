import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/context/ThemeContext';
import { TimerContextProvider } from './src/context/TimerContext';

//pages
import Router from "./src/pages/router/Router";
import Splash from './src/pages/Splash';

function App() {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000)
  })

  return (
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeContextProvider>
            <TimerContextProvider>
              {splash ? <Splash/> : <Router/>}
            </TimerContextProvider>
          </ThemeContextProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
  )
}

export default App;